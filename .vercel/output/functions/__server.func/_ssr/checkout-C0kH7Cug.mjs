import { r as __toESM } from "../_runtime.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as useServerFn, n as submitOrder } from "./orders.functions-Cbbs24_E.mjs";
import { i as rupees, r as menuItems } from "./menu-CuOMq-co.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { b as ArrowRight, i as ShoppingBag, u as MapPin, v as Banknote } from "../_libs/lucide-react.mjs";
import { r as useCart } from "./cart-DMBEypUA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-C0kH7Cug.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const cart = useCart();
	const navigate = useNavigate();
	const place = useServerFn(submitOrder);
	const [type, setType] = (0, import_react.useState)("Pickup");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [requestId, setRequestId] = (0, import_react.useState)("");
	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setBusy(true);
		const form = new FormData(event.currentTarget);
		const id = requestId || crypto.randomUUID();
		setRequestId(id);
		try {
			const result = await place({ data: {
				requestId: id,
				name: String(form.get("name")),
				phone: String(form.get("phone")),
				orderType: type,
				address: String(form.get("address") || ""),
				notes: String(form.get("notes") || ""),
				items: cart.lines
			} });
			sessionStorage.setItem("frono-confirmation", JSON.stringify(result));
			cart.clear();
			await navigate({ to: "/confirmation" });
		} catch (e) {
			setError(e instanceof Error ? e.message : "Please try again.");
		} finally {
			setBusy(false);
		}
	}
	if (!cart.count) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-frono py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto mb-5 size-12 text-secondary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "section-title",
				children: "Your cart is empty."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/menu",
					children: ["Explore the menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-frono section-space",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow mb-3 text-muted-foreground",
				children: "Almost at the table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "section-title shadow-heading",
				children: "Let’s make it delicious."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-9 grid gap-12 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-primary",
							children: "Your details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "form-field",
								children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "name",
									autoComplete: "name",
									required: true,
									minLength: 2,
									maxLength: 100,
									placeholder: "Full name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "form-field",
								children: ["Mobile number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "phone",
									type: "tel",
									autoComplete: "tel-national",
									inputMode: "numeric",
									pattern: "[6-9][0-9]{9}",
									title: "Enter a 10-digit Indian mobile number",
									required: true,
									placeholder: "10-digit mobile number"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-bold",
							children: "How would you like your order?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3",
							children: ["Pickup", "Delivery"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "lg",
								variant: type === t ? "pizza" : "outline",
								"aria-pressed": type === t,
								onClick: () => setType(t),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), t]
							}, t))
						})] }),
						type === "Delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "form-field",
							children: ["Delivery address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "address",
								required: true,
								minLength: 10,
								maxLength: 500,
								rows: 3,
								autoComplete: "street-address",
								placeholder: "House / flat number, street, area and landmark"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "form-field",
							children: [
								"Order notes ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "Optional"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									maxLength: 1e3,
									rows: 3,
									placeholder: "Anything we should know about your order?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl bg-accent p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold",
								children: ["Pay on ", type.toLowerCase()]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "No online payment required."
							})] })]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							type: "submit",
							disabled: busy,
							className: "w-full",
							children: [busy ? "Placing your order…" : `Place order · ${rupees(cart.total)}`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit border-y border-border py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-5 text-xl text-primary",
							children: "Your order"
						}),
						cart.lines.map((line) => {
							const item = menuItems.find((i) => i.id === line.id);
							if (!item) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.name,
										className: "size-14 rounded-lg object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-muted-foreground",
											children: ["Quantity: ", line.quantity]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: rupees(item.price * line.quantity)
									})
								]
							}, line.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between border-t border-border pt-5 text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rupees(cart.total) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							onClick: cart.open,
							className: "mt-3",
							children: "Edit cart"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Checkout as component };
