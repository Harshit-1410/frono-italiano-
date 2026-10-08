import { r as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as rupees } from "./menu-CuOMq-co.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { _ as Check, b as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmation-DjXKRUVF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmationPage() {
	const [order, setOrder] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const saved = JSON.parse(sessionStorage.getItem("frono-confirmation") || "null");
			if (saved && typeof saved.orderNumber === "string" && Array.isArray(saved.items)) setOrder(saved);
		} catch {}
		setReady(true);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-frono py-24 text-center",
		children: "Loading your order…"
	});
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-frono py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "section-title",
			children: "Something delicious awaits."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/menu",
				children: "Explore the menu"
			})
		})]
	});
	`${order.orderNumber}${order.name}${order.orderType}${order.items.map((i) => `${i.quantity} × ${i.name}`).join("\n")}${rupees(order.total)}${order.orderType.toLowerCase()}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-frono section-space",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-6 grid size-20 place-items-center rounded-full bg-highlight text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow justify-center text-muted-foreground",
					children: "A little feast is on its way"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "section-title shadow-heading mt-4",
					children: [
						"Grazie, ",
						order.name.split(" ")[0],
						"!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-7 text-muted-foreground",
					children: "Your order has been received by our kitchen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "my-6 text-xl font-extrabold text-primary",
					children: order.orderNumber
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-y border-border py-5 text-left",
					children: [order.items.map((i, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-4 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							i.quantity,
							" × ",
							i.name
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rupees(i.price * i.quantity) })]
					}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex justify-between border-t border-border pt-4 font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rupees(order.total) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "my-6 text-sm font-semibold",
					children: [
						order.orderType,
						" · Pay on ",
						order.orderType.toLowerCase()
					]
				}),
				"",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: ["Back to Frono ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			]
		})
	});
}
//#endregion
export { ConfirmationPage as component };
