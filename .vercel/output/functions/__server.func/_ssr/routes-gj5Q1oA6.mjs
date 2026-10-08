import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as featuredItems } from "./menu-CuOMq-co.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { b as ArrowRight, g as Clock, h as Heart, m as Instagram, n as Utensils, p as Leaf, s as Pizza, u as MapPin, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as DishCard } from "./dish-card-9-oytuxP.mjs";
import { n as OPENING_HOURS, r as RESTAURANT_ADDRESS, t as INSTAGRAM_URL } from "./config-DqxRv-Zj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gj5Q1oA6.js
var import_jsx_runtime = require_jsx_runtime();
var hero = "/images/pizza.jpg";
var pizza = "/images/pizza.jpg";
var pasta = "/images/pasta.jpg";
var bread = "/images/bread.jpg";
var dessert = "/images/dessert.jpg";
var coffee = "/images/coffee.jpg";
var interior = "/images/interior.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero,
					alt: "Fresh Italian pizza coming out of a wood-fired oven",
					className: "hero-photo",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-frono",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow mb-6 text-highlight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-highlight" }), " A little Italy. A lot of love."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"Authentic Italian.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Family Favorites." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-primary-foreground/85",
								children: [
									"Authentic Italian tastes & global family favorites.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Good food. Great company. A table for everyone."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "pizza",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/menu",
										children: ["Order Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "hero",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/menu",
										children: ["View Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, {})]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex items-center gap-2 text-[11px] text-primary-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-highlight" }),
									" Vasna-Bhayli, Vadodara ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2 text-secondary",
										children: "•"
									}),
									" Made with amore"
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-stamp",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pizza, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LOVE AT FIRST BITE" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "info-strip",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-frono info-strip-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-4" }), " Fresh ingredients"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pizza, { className: "size-4" }), " Italian at heart"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), " Something for everyone"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingIcon, {}), " Pickup & delivery"] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-frono section-space",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-3 text-muted-foreground",
							children: "From our kitchen, with love"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title shadow-heading",
							children: "Meet your new favorites."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "The classics you love. The flavors you’ll come back for."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "link",
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							children: ["Explore full menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: featuredItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						featured: true
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "link",
					asChild: true,
					className: "mt-6 sm:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/menu",
						children: ["Explore full menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "about",
			className: "about-section section-space",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-frono grid items-center gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: pasta,
					alt: "Freshly prepared Italian pasta with basil",
					className: "about-image",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow mb-4 text-highlight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), " Our kind of Italian"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title",
						children: [
							"Italian soul.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"A family kind of feeling."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-8 text-primary-foreground/80",
						children: "At Frono, we believe the best moments happen around a table. We’re a friendly Italian kitchen bringing together authentic Italian dishes and global favorites that everyone in the family can love."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-8 text-primary-foreground/80",
						children: "From cheesy first bites to sweet last spoonfuls, there’s always a little something for everyone. Come hungry. Leave happy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "pizza",
						size: "lg",
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							children: ["Find your favorite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "gallery",
			className: "container-frono section-space",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap items-end justify-between gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-3 text-muted-foreground",
						children: "A taste of Frono"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title shadow-heading",
						children: "Good food. Happy moments."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: INSTAGRAM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-2 text-xs font-semibold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }),
							" @frono.the_italiano ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-3",
					children: [
						{
							asset: pizza,
							alt: "Fresh basil pizza"
						},
						{
							asset: pasta,
							alt: "Italian pasta"
						},
						{
							asset: interior,
							alt: "Restaurant atmosphere inspiration"
						},
						{
							asset: bread,
							alt: "Golden garlic bread"
						},
						{
							asset: dessert,
							alt: "A slice of tiramisu"
						},
						{
							asset: coffee,
							alt: "Freshly made cold coffee"
						}
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: i.asset,
						alt: i.alt,
						className: "gallery-photo",
						loading: "lazy"
					}, i.alt))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}),
								" Follow us on Instagram ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "contact",
			className: "section-space border-t border-border bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-frono grid items-center gap-9 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-3 text-muted-foreground",
						children: "Your next happy place"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title shadow-heading",
						children: "See you at Frono."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 shrink-0 text-primary" }), RESTAURANT_ADDRESS]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 shrink-0 text-primary" }), OPENING_HOURS]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Contact details coming soon"
							})
						]
					}),
					""
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map of Vasna-Bhayli, Vadodara",
					src: "https://maps.google.com/maps?q=Vasna%20Bhayli%20Vadodara&output=embed",
					className: "h-72 w-full rounded-xl border border-border",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})]
			})
		})
	] });
}
function ShoppingIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-4" });
}
//#endregion
export { Index as component };
