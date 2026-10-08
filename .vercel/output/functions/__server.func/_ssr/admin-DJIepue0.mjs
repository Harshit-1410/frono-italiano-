import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as useServerFn, r as updateOrderStatus, t as listOrders } from "./orders.functions-Cbbs24_E.mjs";
import { i as rupees } from "./menu-CuOMq-co.mjs";
import { t as Button } from "./button-wh0Ga7XK.mjs";
import { t as supabase } from "./client-Baw3gYCb.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as RefreshCw, d as LogOut, f as LockKeyhole } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DJIepue0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Admin() {
	const getOrders = useServerFn(listOrders);
	const update = useServerFn(updateOrderStatus);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const orders = useQuery({
		queryKey: ["staff-orders"],
		queryFn: () => getOrders(),
		enabled: signedIn,
		retry: false,
		refetchInterval: signedIn ? 3e4 : false
	});
	async function login(e) {
		e.preventDefault();
		setBusy(true);
		setError("");
		const form = new FormData(e.currentTarget);
		const { error } = await supabase.auth.signInWithPassword({
			email: String(form.get("email")),
			password: String(form.get("password"))
		});
		if (error) setError(error.message);
		else setSignedIn(true);
		setBusy(false);
	}
	if (!signedIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-frono section-space",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: login,
			className: "mx-auto max-w-sm space-y-5 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-9 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "section-title",
					children: "Staff sign-in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "form-field",
					children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						required: true,
						autoComplete: "username"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "form-field",
					children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "password",
						type: "password",
						required: true,
						autoComplete: "current-password"
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					disabled: busy,
					children: busy ? "Signing in…" : "Sign in"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-frono section-space",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "section-title",
					children: "Incoming orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						"aria-label": "Refresh orders",
						onClick: () => orders.refetch(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), "Refresh"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: async () => {
							await supabase.auth.signOut();
							setSignedIn(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "Sign out"]
					})]
				})]
			}),
			(error || orders.error) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mb-5 text-destructive",
				children: error || orders.error?.message
			}),
			orders.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loading orders…" }),
			orders.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-12 text-muted-foreground",
				children: "No orders yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: orders.data?.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg text-primary",
							children: order.order_number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: new Date(order.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-3 text-sm",
							children: ["Status", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "admin-select",
								value: order.status,
								"aria-label": `Status for ${order.order_number}`,
								onChange: async (e) => {
									setError("");
									try {
										await update({ data: {
											id: order.id,
											status: e.target.value
										} });
										await orders.refetch();
									} catch (e) {
										setError(e instanceof Error ? e.message : "Could not update order");
									}
								},
								children: [
									"New",
									"Preparing",
									"Ready",
									"Completed"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-5 text-sm md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold",
								children: [
									order.customer_name,
									" · ",
									order.order_type
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${order.phone}`,
								className: "mt-2 inline-block",
								children: order.phone
							}),
							order.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2",
								children: order.address
							}),
							order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-muted-foreground",
								children: ["Notes: ", order.notes]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [Array.isArray(order.items) && order.items.map((raw, n) => {
							if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								String(raw["quantity"]),
								" × ",
								String(raw["name"])
							] }, n);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-extrabold text-primary",
							children: [
								rupees(Number(order.total)),
								" · Pay on ",
								order.order_type.toLowerCase()
							]
						})] })]
					})]
				}, order.id))
			})
		]
	});
}
//#endregion
export { Admin as component };
