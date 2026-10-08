import { r as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { t as supabase } from "./client-Baw3gYCb.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as ShoppingBag, l as Menu, m as Instagram, t as X, u as MapPin, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { r as useCart, t as CartProvider } from "./cart-DMBEypUA.mjs";
import { t as INSTAGRAM_URL } from "./config-DqxRv-Zj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CvPZAbA9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DNWW-3Rr.css";
var logo = "/images/frono-logo.png";
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo,
		className: "brand-logo",
		alt: "Frono – The Italiano"
	});
}
function SiteLayout({ children }) {
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const cart = useCart();
	const nav = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/menu",
		onClick: () => setMobile(false),
		children: "Menu"
	}), [
		"About",
		"Gallery",
		"Contact"
	].map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `/#${text.toLowerCase()}`,
		onClick: () => setMobile(false),
		children: text
	}, text))] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-frono flex h-full items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Frono home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Main navigation",
						className: "hidden items-center gap-9 text-xs font-semibold text-primary md:flex",
						children: nav
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 md:gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `Open cart, ${cart.count} items`,
								onClick: cart.open,
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), cart.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-highlight text-[10px] text-primary",
									children: cart.count
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "pizza",
								asChild: true,
								className: "hidden h-11 px-5 sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/menu",
									children: ["Order Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "md:hidden",
								"aria-label": mobile ? "Close navigation" : "Open navigation",
								"aria-expanded": mobile,
								onClick: () => setMobile(!mobile),
								children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						]
					})
				]
			}), mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mobile-nav flex flex-col gap-6 font-semibold",
				"aria-label": "Mobile navigation",
				children: [nav, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "pizza",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/menu",
						onClick: () => setMobile(false),
						children: ["Order Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "bg-primary py-10 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-frono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 border-b border-primary-foreground/20 pb-8 md:grid-cols-[1.4fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-fit rounded-lg bg-background px-4 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-x-6 gap-y-3 text-xs",
							children: nav
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" }),
								" @frono.the_italiano ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-between gap-4 pt-6 text-[11px] text-primary-foreground/75",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© Frono – The Italiano" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), " Made with amore in Vadodara."]
					})]
				})]
			})
		})
	] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		position: "top-center",
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Frono – The Italiano" },
			{
				name: "description",
				content: "Italian tastes and family favorites in Vasna-Bhayli, Vadodara."
			},
			{
				property: "og:title",
				content: "Frono – The Italiano"
			},
			{
				property: "og:description",
				content: "Italian tastes and family favorites in Vadodara."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (![
				"SIGNED_IN",
				"SIGNED_OUT",
				"USER_UPDATED"
			].includes(event)) return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
function pageHead(title, description) {
	return { meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
var $$splitComponentImporter$4 = () => import("./routes-gj5Q1oA6.mjs");
var Route$4 = createFileRoute("/")({
	head: () => pageHead("Frono – The Italiano | Authentic Italian in Vasna-Bhayli, Vadodara", "Authentic Italian tastes & global family favorites at Frono in Vasna-Bhayli, Vadodara. Explore pizza, pasta and more. Order for pickup or delivery."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin-DJIepue0.mjs");
var Route$3 = createFileRoute("/admin")({
	head: () => pageHead("Staff orders | Frono – The Italiano", "Secure staff access to incoming Frono orders."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./checkout-C0kH7Cug.mjs");
var Route$2 = createFileRoute("/checkout")({
	head: () => pageHead("Checkout | Frono – The Italiano", "Complete your Frono order for pickup or delivery. Pay when you receive your food."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./confirmation-DjXKRUVF.mjs");
var Route$1 = createFileRoute("/confirmation")({
	head: () => pageHead("Order confirmation | Frono – The Italiano", "Your Frono order confirmation and pickup or delivery details."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./menu-RXUz_I7I.mjs");
var Route = createFileRoute("/menu")({
	head: () => pageHead("Menu | Frono – The Italiano", "Explore pizzas, pasta, starters, desserts and drinks at Frono, Vadodara. Order for pickup or delivery."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AdminRoute: Route$3.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$5
	}),
	CheckoutRoute: Route$2.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$5
	}),
	ConfirmationRoute: Route$1.update({
		id: "/confirmation",
		path: "/confirmation",
		getParentRoute: () => Route$5
	}),
	MenuRoute: Route.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
