import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as rupees } from "./menu-CuOMq-co.mjs";
import { n as QuantityControl } from "./cart-DMBEypUA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dish-card-9-oytuxP.js
var import_jsx_runtime = require_jsx_runtime();
function DishCard({ item, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "dish-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "dish-image",
				src: item.image,
				alt: item.name,
				loading: "lazy"
			}), featured && item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-md bg-background px-2.5 py-1.5 text-[9px] font-bold text-primary",
				children: item.badge
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `veg-dot ${item.veg ? "" : "nonveg"}`,
						"aria-label": item.veg ? "Vegetarian" : "Non-vegetarian"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-primary",
						children: item.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-h-10 text-[11px] leading-relaxed text-muted-foreground",
					children: item.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-extrabold text-primary",
						children: rupees(item.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityControl, {
						item,
						label: featured ? "Add" : "Add"
					})]
				})
			]
		})]
	});
}
//#endregion
export { DishCard as t };
