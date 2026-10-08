import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Pizza } from 'lucide-react';
import { categories, menuItems } from '@/data/menu';
import { DishCard } from '@/components/dish-card';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/menu')({ head: () => pageHead('Menu | Frono – The Italiano', 'Explore pizzas, pasta, starters, desserts and drinks at Frono, Vadodara. Order for pickup or delivery.'), component: MenuPage });
function MenuPage() {
  const [active, setActive] = useState<string>('Starters');
  return <><div className="container-frono py-12 text-center"><div className="eyebrow justify-center text-muted-foreground"><Pizza className="size-4" /> A little something for everyone</div><h1 className="section-title shadow-heading mt-4">The Frono menu.</h1><p className="mt-4 text-sm text-muted-foreground">Italian classics. Global favorites. All made with love.</p></div><div className="category-bar"><div className="container-frono category-inner">{categories.map(category => <Button key={category} variant={active === category ? 'pizza' : 'ghost'} asChild onClick={() => setActive(category)}><a href={`#${category.toLowerCase()}`}>{category}</a></Button>)}</div></div><div className="container-frono pb-16">{categories.map(category => <section key={category} id={category.toLowerCase()} className="menu-section pt-10"><h2 className="mb-6 text-2xl font-extrabold text-primary">{category}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{menuItems.filter(i => i.category === category).map(i => <DishCard key={i.id} item={i} />)}</div></section>)}</div></>;
}