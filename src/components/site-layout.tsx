import { useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, ShoppingBag, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
const logo = '/images/frono-logo.png';
import { Button } from '@/components/ui/button';
import { useCart } from './cart';
import { INSTAGRAM_URL } from '@/config';
export function Logo() { return <img src={logo} className="brand-logo" alt="Frono – The Italiano" />; }
export function SiteLayout({ children }: { children: ReactNode }) {
  const [mobile, setMobile] = useState(false); const cart = useCart();
  const nav = <><Link to="/menu" onClick={() => setMobile(false)}>Menu</Link>{['About', 'Gallery', 'Contact'].map(text => <a key={text} href={`/#${text.toLowerCase()}`} onClick={() => setMobile(false)}>{text}</a>)}</>;
  return <><header className="site-header"><div className="container-frono flex h-full items-center justify-between gap-3"><Link to="/" aria-label="Frono home"><Logo /></Link><nav aria-label="Main navigation" className="hidden items-center gap-9 text-xs font-semibold text-primary md:flex">{nav}</nav><div className="flex items-center gap-2 md:gap-5"><Button variant="ghost" size="icon" aria-label={`Open cart, ${cart.count} items`} onClick={cart.open} className="relative"><ShoppingBag className="size-5" />{cart.count > 0 && <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-highlight text-[10px] text-primary">{cart.count}</span>}</Button><Button variant="pizza" asChild className="hidden h-11 px-5 sm:inline-flex"><Link to="/menu">Order Now <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</Button></div></div>{mobile && <nav className="mobile-nav flex flex-col gap-6 font-semibold" aria-label="Mobile navigation">{nav}<Button variant="pizza" asChild><Link to="/menu" onClick={() => setMobile(false)}>Order Now <ArrowUpRight /></Link></Button></nav>}</header>
    <main>{children}</main>
    <footer className="bg-primary py-10 text-primary-foreground"><div className="container-frono"><div className="grid gap-8 border-b border-primary-foreground/20 pb-8 md:grid-cols-[1.4fr_1fr_1fr]"><div className="w-fit rounded-lg bg-background px-4 py-1"><Logo /></div><div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs">{nav}</div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs"><Instagram className="size-5" /> @frono.the_italiano <ArrowUpRight className="size-4" /></a></div><div className="flex flex-wrap justify-between gap-4 pt-6 text-[11px] text-primary-foreground/75"><span>© Frono – The Italiano</span><span className="flex items-center gap-2"><MapPin className="size-3" /> Made with amore in Vadodara.</span></div></div></footer>
  </>;
}