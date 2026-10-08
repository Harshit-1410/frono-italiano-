//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Dpbdabj2.js
var manifest = {
	"428289e6a95e5fae42a5f252fb057eb6b26d6cb43d7737969ee97f14a7d64be0": {
		functionName: "submitOrder_createServerFn_handler",
		importer: () => import("./_ssr/orders.functions-I-cqy_I9.mjs")
	},
	"ce3247af923fb83e1b50e04a2d3399abe6b8ac7e9c8330b2019de9668492b17f": {
		functionName: "updateOrderStatus_createServerFn_handler",
		importer: () => import("./_ssr/orders.functions-I-cqy_I9.mjs")
	},
	"e004c3669ad9314e0f13dd8e45194bd1d7a95f814599b1d8484097691817695f": {
		functionName: "listOrders_createServerFn_handler",
		importer: () => import("./_ssr/orders.functions-I-cqy_I9.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
