import { r as __toESM } from "../_runtime.mjs";
import { W as isRedirect, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-BhqelEmK.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Dpbdabj2.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C-GLxI5s.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as stringType, i as objectType, n as enumType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-Cbbs24_E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var orderSchema = objectType({
	requestId: stringType().uuid(),
	name: stringType().trim().min(2).max(100),
	phone: stringType().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
	orderType: enumType(["Pickup", "Delivery"]),
	address: stringType().trim().max(500),
	notes: stringType().trim().max(1e3),
	items: arrayType(objectType({
		id: stringType(),
		quantity: numberType().int().min(1).max(99)
	})).min(1).max(50)
}).refine((v) => v.orderType !== "Delivery" || v.address.length >= 10, {
	message: "Enter your full delivery address",
	path: ["address"]
});
var submitOrder = createServerFn({ method: "POST" }).inputValidator((input) => orderSchema.parse(input)).handler(createSsrRpc("428289e6a95e5fae42a5f252fb057eb6b26d6cb43d7737969ee97f14a7d64be0"));
var listOrders = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("e004c3669ad9314e0f13dd8e45194bd1d7a95f814599b1d8484097691817695f"));
var updateOrderStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	id: stringType().uuid(),
	status: enumType([
		"New",
		"Preparing",
		"Ready",
		"Completed"
	])
}).parse(input)).handler(createSsrRpc("ce3247af923fb83e1b50e04a2d3399abe6b8ac7e9c8330b2019de9668492b17f"));
//#endregion
export { useServerFn as i, submitOrder as n, updateOrderStatus as r, listOrders as t };
