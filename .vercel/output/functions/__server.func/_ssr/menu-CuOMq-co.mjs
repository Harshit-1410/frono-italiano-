//#region node_modules/.nitro/vite/services/ssr/assets/menu-CuOMq-co.js
var dishImage = (name) => `/images/dishes/${name}.jpg`;
var categories = [
	"Starters",
	"Pizza",
	"Pasta",
	"Mains",
	"Desserts",
	"Drinks"
];
var item = (id, name, description, price, category, veg, image, badge) => ({
	id,
	name,
	description,
	price,
	category,
	veg,
	image,
	...badge ? { badge } : {}
});
var menuItems = [
	item("garlic-bread", "Cheesy Garlic Bread", "Golden toasted bread, garlic butter & melted cheese.", 149, "Starters", true, dishImage("cheesy-garlic-bread"), "A little indulgence"),
	item("bruschetta", "Tomato Bruschetta", "Crisp bread topped with fresh tomatoes & basil.", 169, "Starters", true, dishImage("bruschetta")),
	item("fries", "Loaded Fries", "Crispy fries, creamy cheese sauce & jalapeños.", 179, "Starters", true, dishImage("loaded-fries")),
	item("margherita", "Classic Margherita", "Fresh mozzarella, rich tomato sauce & basil.", 249, "Pizza", true, dishImage("margherita"), "The Italian classic"),
	item("farmhouse", "Farmhouse Pizza", "Bell peppers, mushrooms, onion & mozzarella.", 329, "Pizza", true, dishImage("farmhouse-pizza")),
	item("pepperoni", "Pepperoni Pizza", "Pepperoni, mozzarella & our signature tomato sauce.", 399, "Pizza", false, dishImage("pepperoni-pizza")),
	item("arrabbiata", "Penne Arrabbiata", "Penne tossed in a fiery tomato & garlic sauce.", 269, "Pasta", true, dishImage("arrabbiata")),
	item("alfredo", "Creamy Alfredo Pasta", "Penne in a silky white sauce with Italian herbs.", 289, "Pasta", true, dishImage("alfredo"), "Comfort in every bite"),
	item("pesto", "Basil Pesto Pasta", "Fresh basil pesto, parmesan & a little olive oil.", 299, "Pasta", true, dishImage("pesto")),
	item("risotto", "Mushroom Risotto", "Creamy rice, sautéed mushrooms & parmesan.", 349, "Mains", true, dishImage("mushroom-risotto")),
	item("chicken", "Grilled Herb Chicken", "Italian herb chicken with vegetables & garlic bread.", 399, "Mains", false, dishImage("grilled-chicken")),
	item("sizzler", "Vegetable Sizzler", "Grilled vegetables, rice & a rich pepper sauce.", 329, "Mains", true, dishImage("vegetable-sizzler-v2")),
	item("tiramisu", "Classic Tiramisu", "Coffee-soaked layers & a soft mascarpone cream.", 219, "Desserts", true, dishImage("tiramisu")),
	item("brownie", "Chocolate Brownie", "Rich chocolate brownie with a molten center.", 179, "Desserts", true, dishImage("brownie")),
	item("panna", "Vanilla Panna Cotta", "Silky vanilla cream with a berry compote.", 199, "Desserts", true, dishImage("panna-cotta")),
	item("cold-coffee", "Cold Coffee", "Creamy chilled coffee, blended to perfection.", 149, "Drinks", true, dishImage("cold-coffee")),
	item("mojito", "Virgin Mojito", "Fresh mint, lime & sparkling refreshment.", 139, "Drinks", true, dishImage("mojito")),
	item("lemonade", "Fresh Lime Soda", "A refreshing squeeze of lime, sweet or salted.", 99, "Drinks", true, dishImage("lemonade"))
];
var featuredItems = [
	"margherita",
	"alfredo",
	"garlic-bread",
	"tiramisu"
].map((id) => menuItems.find((i) => i.id === id)).filter((i) => Boolean(i));
var rupees = (value) => `₹${value.toLocaleString("en-IN")}`;
//#endregion
export { rupees as i, featuredItems as n, menuItems as r, categories as t };
