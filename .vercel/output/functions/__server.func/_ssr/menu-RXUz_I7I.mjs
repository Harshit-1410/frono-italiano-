import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as menuItems, t as categories } from "./menu-CuOMq-co.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { s as Pizza } from "../_libs/lucide-react.mjs";
import { t as DishCard } from "./dish-card-9-oytuxP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-RXUz_I7I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	const [active, setActive] = (0, import_react.useState)("Starters");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-frono py-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow justify-center text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pizza, { className: "size-4" }), " A little something for everyone"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "section-title shadow-heading mt-4",
					children: "The Frono menu."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Italian classics. Global favorites. All made with love."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "category-bar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-frono category-inner",
				children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: active === category ? "pizza" : "ghost",
					asChild: true,
					onClick: () => setActive(category),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${category.toLowerCase()}`,
						children: category
					})
				}, category))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-frono pb-16",
			children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: category.toLowerCase(),
				className: "menu-section pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-6 text-2xl font-extrabold text-primary",
					children: category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: menuItems.filter((i) => i.category === category).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, { item: i }, i.id))
				})]
			}, category))
		})
	] });
}
//#endregion
export { MenuPage as component };
