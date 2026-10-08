import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-BhqelEmK.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C-GLxI5s.mjs";
import { a as stringType, i as objectType, n as enumType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
import { r as menuItems } from "./menu-CuOMq-co.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-I-cqy_I9.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitOrder_createServerFn_handler = createServerRpc({
	id: "428289e6a95e5fae42a5f252fb057eb6b26d6cb43d7737969ee97f14a7d64be0",
	name: "submitOrder",
	filename: "src/lib/orders.functions.ts"
}, (opts) => submitOrder.__executeServer(opts));
var submitOrder = createServerFn({ method: "POST" }).inputValidator((input) => orderSchema.parse(input)).handler(submitOrder_createServerFn_handler, async ({ data }) => {
	const ids = /* @__PURE__ */ new Set();
	const items = data.items.map((line) => {
		const item = menuItems.find((i) => i.id === line.id);
		if (!item || ids.has(line.id)) throw new Error("Please refresh your cart and try again.");
		ids.add(line.id);
		return {
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: line.quantity
		};
	});
	const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
	const orderNumber = `FR-${data.requestId.replaceAll("-", "").slice(0, 12).toUpperCase()}`;
	const { supabaseAdmin } = await import("./client.server-CBjviNVA.mjs");
	const { error } = await supabaseAdmin.from("orders").insert({
		id: data.requestId,
		order_number: orderNumber,
		customer_name: data.name,
		phone: data.phone,
		order_type: data.orderType,
		address: data.orderType === "Delivery" ? data.address : null,
		notes: data.notes,
		items,
		total
	});
	if (error && error.code !== "23505") throw new Error("Your order could not be saved. Please try again.");
	return {
		orderNumber,
		total,
		items,
		name: data.name,
		orderType: data.orderType
	};
});
var listOrders_createServerFn_handler = createServerRpc({
	id: "e004c3669ad9314e0f13dd8e45194bd1d7a95f814599b1d8484097691817695f",
	name: "listOrders",
	filename: "src/lib/orders.functions.ts"
}, (opts) => listOrders.__executeServer(opts));
var listOrders = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(listOrders_createServerFn_handler, async ({ context }) => {
	const { data: admin, error: roleError } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (roleError || !admin) throw new Error("This account does not have staff access.");
	const { data, error } = await context.supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(100);
	if (error) throw new Error(error.message);
	return data;
});
var updateOrderStatus_createServerFn_handler = createServerRpc({
	id: "ce3247af923fb83e1b50e04a2d3399abe6b8ac7e9c8330b2019de9668492b17f",
	name: "updateOrderStatus",
	filename: "src/lib/orders.functions.ts"
}, (opts) => updateOrderStatus.__executeServer(opts));
var updateOrderStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	id: stringType().uuid(),
	status: enumType([
		"New",
		"Preparing",
		"Ready",
		"Completed"
	])
}).parse(input)).handler(updateOrderStatus_createServerFn_handler, async ({ data, context }) => {
	const { data: admin } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!admin) throw new Error("Staff access required.");
	const { error } = await context.supabase.from("orders").update({ status: data.status }).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { success: true };
});
//#endregion
export { listOrders_createServerFn_handler, submitOrder_createServerFn_handler, updateOrderStatus_createServerFn_handler };
