import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { menuItems, rupees, type MenuItem } from '@/data/menu';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';

type CartLine = { id: string; quantity: number };
type CartContextValue = { lines: CartLine[]; count: number; total: number; quantity: (id: string) => number; change: (id: string, delta: number) => void; remove: (id: string) => void; clear: () => void; open: () => void };
const CartContext = createContext<CartContextValue | null>(null);
export function useCart() { const cart = useContext(CartContext); if (!cart) throw new Error('Cart unavailable'); return cart; }
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem('frono-cart') || '[]');
      if (Array.isArray(saved)) setLines(saved.filter((v): v is CartLine => v && typeof v.id === 'string' && menuItems.some(i => i.id === v.id) && Number.isInteger(v.quantity) && v.quantity > 0 && v.quantity <= 99));
    } catch { /* Ignore invalid saved carts. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem('frono-cart', JSON.stringify(lines)); }, [lines, ready]);
  const quantity = (id: string) => lines.find(i => i.id === id)?.quantity || 0;
  const change = (id: string, delta: number) => setLines(prev => {
    const q = Math.min(99, Math.max(0, (prev.find(i => i.id === id)?.quantity || 0) + delta));
    return [...prev.filter(i => i.id !== id), ...(q ? [{ id, quantity: q }] : [])];
  });
  const remove = (id: string) => setLines(prev => prev.filter(i => i.id !== id));
  const count = lines.reduce((n, i) => n + i.quantity, 0);
  const total = lines.reduce((n, i) => n + (menuItems.find(m => m.id === i.id)?.price || 0) * i.quantity, 0);
  return <CartContext.Provider value={{ lines, count, total, quantity, change, remove, clear: () => setLines([]), open: () => setOpen(true) }}>
    {children}
    {count > 0 && <Button variant="pizza" size="lg" className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 shadow-lg md:hidden" onClick={() => setOpen(true)}><ShoppingBag /> View cart · {count} <span className="border-l border-primary/30 pl-3">{rupees(total)}</span></Button>}
    <Sheet open={isOpen} onOpenChange={setOpen}><SheetContent className="cart-drawer"><SheetTitle className="text-2xl font-extrabold text-primary">Your little feast</SheetTitle><SheetDescription>{count} {count === 1 ? 'item' : 'items'} in your cart</SheetDescription>
      <div className="mt-4 flex-1 overflow-auto">{lines.length === 0 ? <div className="py-16 text-center"><ShoppingBag className="mx-auto mb-4 size-12 text-secondary" /><p>Your cart is waiting for something delicious.</p><Button asChild className="mt-5" onClick={() => setOpen(false)}><Link to="/menu">Explore the menu</Link></Button></div> : lines.map(line => {
        const item = menuItems.find(i => i.id === line.id); if (!item) return null;
        return <div key={line.id} className="flex gap-3 border-b border-border py-5"><img src={item.image} alt={item.name} className="size-20 rounded-xl object-cover" /><div className="min-w-0 flex-1"><h3 className="text-sm">{item.name}</h3><p className="my-2 text-sm font-bold text-primary">{rupees(item.price * line.quantity)}</p><QuantityControl item={item} /></div><Button variant="ghost" size="icon" aria-label={`Remove ${item.name}`} onClick={() => remove(item.id)}><Trash2 className="text-destructive" /></Button></div>;
      })}</div>
      {count > 0 && <div className="border-t border-border pt-5"><div className="mb-4 flex justify-between font-bold"><span>Subtotal</span><span>{rupees(total)}</span></div><p className="mb-4 text-xs text-muted-foreground">Pay on pickup or delivery. No online payment.</p><Button size="lg" className="w-full" asChild onClick={() => setOpen(false)}><Link to="/checkout">Checkout <ArrowRight /></Link></Button></div>}
    </SheetContent></Sheet>
  </CartContext.Provider>;
}
export function QuantityControl({ item, label = 'Add' }: { item: MenuItem; label?: string }) {
  const cart = useCart(); const q = cart.quantity(item.id);
  const addItem = () => { cart.change(item.id, 1); toast.success(`${item.name} added to your cart`); };
  return q ? <div className="inline-flex h-9 items-center gap-1 rounded-lg border border-primary/30 bg-background"><Button variant="ghost" size="icon" aria-label={`Decrease ${item.name}`} onClick={() => cart.change(item.id, -1)}><Minus /></Button><span className="w-5 text-center text-sm font-bold">{q}</span><Button variant="ghost" size="icon" aria-label={`Increase ${item.name}`} disabled={q >= 99} onClick={addItem}><Plus /></Button></div> : <Button variant="outline" className="border-primary/30 text-primary" aria-label={`Add ${item.name} to cart`} onClick={addItem}><Plus />{label}</Button>;
}