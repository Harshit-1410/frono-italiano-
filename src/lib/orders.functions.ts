import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { menuItems } from '@/data/menu';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';

const orderSchema = z.object({ requestId: z.string().uuid(), name: z.string().trim().min(2).max(100), phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'), orderType: z.enum(['Pickup', 'Delivery']), address: z.string().trim().max(500), notes: z.string().trim().max(1000), items: z.array(z.object({ id: z.string(), quantity: z.number().int().min(1).max(99) })).min(1).max(50) }).refine(v => v.orderType !== 'Delivery' || v.address.length >= 10, { message: 'Enter your full delivery address', path: ['address'] });
export type OrderInput = z.infer<typeof orderSchema>;
export const submitOrder = createServerFn({ method: 'POST' }).inputValidator((input: OrderInput) => orderSchema.parse(input)).handler(async ({ data }) => {
  const ids = new Set<string>();
  const items = data.items.map(line => {
    const item = menuItems.find(i => i.id === line.id);
    if (!item || ids.has(line.id)) throw new Error('Please refresh your cart and try again.');
    ids.add(line.id);
    return { id: item.id, name: item.name, price: item.price, quantity: line.quantity };
  });
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const orderNumber = `FR-${data.requestId.replaceAll('-', '').slice(0, 12).toUpperCase()}`;
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { error } = await supabaseAdmin.from('orders').insert({ id: data.requestId, order_number: orderNumber, customer_name: data.name, phone: data.phone, order_type: data.orderType, address: data.orderType === 'Delivery' ? data.address : null, notes: data.notes, items, total });
  if (error && error.code !== '23505') throw new Error('Your order could not be saved. Please try again.');
  return { orderNumber, total, items, name: data.name, orderType: data.orderType };
});
export const listOrders = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: admin, error: roleError } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (roleError || !admin) throw new Error('This account does not have staff access.');
  const { data, error } = await context.supabase.from('orders').select('*').order('created_at', { ascending: false }).limit(100);
  if (error) throw new Error(error.message); return data;
});
export const updateOrderStatus = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator((input: { id: string; status: string }) => z.object({ id: z.string().uuid(), status: z.enum(['New', 'Preparing', 'Ready', 'Completed']) }).parse(input)).handler(async ({ data, context }) => {
  const { data: admin } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (!admin) throw new Error('Staff access required.');
  const { error } = await context.supabase.from('orders').update({ status: data.status }).eq('id', data.id);
  if (error) throw new Error(error.message); return { success: true };
});