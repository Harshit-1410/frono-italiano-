import { r as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as rupees, r as menuItems } from "./menu-CuOMq-co.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-wh0Ga7XK.mjs";
import { b as ArrowRight, c as Minus, i as ShoppingBag, o as Plus, r as Trash2, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DMBEypUA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-foreground/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var CartContext = (0, import_react.createContext)(null);
function useCart() {
	const cart = (0, import_react.useContext)(CartContext);
	if (!cart) throw new Error("Cart unavailable");
	return cart;
}
function CartProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [isOpen, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const saved = JSON.parse(localStorage.getItem("frono-cart") || "[]");
			if (Array.isArray(saved)) setLines(saved.filter((v) => v && typeof v.id === "string" && menuItems.some((i) => i.id === v.id) && Number.isInteger(v.quantity) && v.quantity > 0 && v.quantity <= 99));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem("frono-cart", JSON.stringify(lines));
	}, [lines, ready]);
	const quantity = (id) => lines.find((i) => i.id === id)?.quantity || 0;
	const change = (id, delta) => setLines((prev) => {
		const q = Math.min(99, Math.max(0, (prev.find((i) => i.id === id)?.quantity || 0) + delta));
		return [...prev.filter((i) => i.id !== id), ...q ? [{
			id,
			quantity: q
		}] : []];
	});
	const remove = (id) => setLines((prev) => prev.filter((i) => i.id !== id));
	const count = lines.reduce((n, i) => n + i.quantity, 0);
	const total = lines.reduce((n, i) => n + (menuItems.find((m) => m.id === i.id)?.price || 0) * i.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartContext.Provider, {
		value: {
			lines,
			count,
			total,
			quantity,
			change,
			remove,
			clear: () => setLines([]),
			open: () => setOpen(true)
		},
		children: [
			children,
			count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "pizza",
				size: "lg",
				className: "fixed bottom-5 left-1/2 z-40 -translate-x-1/2 shadow-lg md:hidden",
				onClick: () => setOpen(true),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}),
					" View cart · ",
					count,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border-l border-primary/30 pl-3",
						children: rupees(total)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: isOpen,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					className: "cart-drawer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "text-2xl font-extrabold text-primary",
							children: "Your little feast"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: [
							count,
							" ",
							count === 1 ? "item" : "items",
							" in your cart"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex-1 overflow-auto",
							children: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto mb-4 size-12 text-secondary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your cart is waiting for something delicious." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-5",
										onClick: () => setOpen(false),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/menu",
											children: "Explore the menu"
										})
									})
								]
							}) : lines.map((line) => {
								const item = menuItems.find((i) => i.id === line.id);
								if (!item) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 border-b border-border py-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.name,
											className: "size-20 rounded-xl object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-sm",
													children: item.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "my-2 text-sm font-bold text-primary",
													children: rupees(item.price * line.quantity)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityControl, { item })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											"aria-label": `Remove ${item.name}`,
											onClick: () => remove(item.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "text-destructive" })
										})
									]
								}, line.id);
							})
						}),
						count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex justify-between font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rupees(total) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 text-xs text-muted-foreground",
									children: "Pay on pickup or delivery. No online payment."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									className: "w-full",
									asChild: true,
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/checkout",
										children: ["Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})
							]
						})
					]
				})
			})
		]
	});
}
function QuantityControl({ item, label = "Add" }) {
	const cart = useCart();
	const q = cart.quantity(item.id);
	const addItem = () => {
		cart.change(item.id, 1);
		toast.success(`${item.name} added to your cart`);
	};
	return q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex h-9 items-center gap-1 rounded-lg border border-primary/30 bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": `Decrease ${item.name}`,
				onClick: () => cart.change(item.id, -1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-5 text-center text-sm font-bold",
				children: q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": `Increase ${item.name}`,
				disabled: q >= 99,
				onClick: addItem,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		className: "border-primary/30 text-primary",
		"aria-label": `Add ${item.name} to cart`,
		onClick: addItem,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), label]
	});
}
//#endregion
export { QuantityControl as n, useCart as r, CartProvider as t };
