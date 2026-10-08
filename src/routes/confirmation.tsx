import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { rupees } from '@/data/menu';
import { WHATSAPP_NUMBER } from '@/config';
import { pageHead } from '@/lib/seo';
type Confirmation = { orderNumber: string; total: number; name: string; orderType: string; items: { name: string; quantity: number; price: number }[] };
export const Route = createFileRoute('/confirmation')({ head: () => pageHead('Order confirmation | Frono – The Italiano', 'Your Frono order confirmation and pickup or delivery details.'), component: ConfirmationPage });
function ConfirmationPage() {
  const [order, setOrder] = useState<Confirmation | null>(null); const [ready, setReady] = useState(false);
  useEffect(() => { try { const saved = JSON.parse(sessionStorage.getItem('frono-confirmation') || 'null'); if (saved && typeof saved.orderNumber === 'string' && Array.isArray(saved.items)) setOrder(saved); } catch { /* No saved confirmation. */ } setReady(true); }, []);
  if (!ready) return <div className="container-frono py-24 text-center">Loading your order…</div>;
  if (!order) return <div className="container-frono py-24 text-center"><h1 className="section-title">Something delicious awaits.</h1><Button asChild className="mt-6"><Link to="/menu">Explore the menu</Link></Button></div>;
  const message = `Frono order ${order.orderNumber}\n${order.name} · ${order.orderType}\n${order.items.map(i => `${i.quantity} × ${i.name}`).join('\n')}\nTotal: ${rupees(order.total)}\nPay on ${order.orderType.toLowerCase()}`;
  return <div className="container-frono section-space"><div className="mx-auto max-w-lg text-center"><div className="mx-auto mb-6 grid size-20 place-items-center rounded-full bg-highlight text-primary"><Check className="size-10" /></div><div className="eyebrow justify-center text-muted-foreground">A little feast is on its way</div><h1 className="section-title shadow-heading mt-4">Grazie, {order.name.split(' ')[0]}!</h1><p className="mt-4 text-sm leading-7 text-muted-foreground">Your order has been received by our kitchen.</p><p className="my-6 text-xl font-extrabold text-primary">{order.orderNumber}</p><div className="border-y border-border py-5 text-left">{order.items.map((i, n) => <div key={n} className="flex justify-between gap-4 py-2 text-sm"><span>{i.quantity} × {i.name}</span><span>{rupees(i.price * i.quantity)}</span></div>)}<div className="mt-3 flex justify-between border-t border-border pt-4 font-bold"><span>Total</span><span>{rupees(order.total)}</span></div></div><p className="my-6 text-sm font-semibold">{order.orderType} · Pay on {order.orderType.toLowerCase()}</p>{WHATSAPP_NUMBER && <Button variant="pizza" asChild className="mb-4"><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer"><MessageCircle />Send order via WhatsApp</a></Button>}<Button asChild size="lg"><Link to="/">Back to Frono <ArrowRight /></Link></Button></div></div>;
}