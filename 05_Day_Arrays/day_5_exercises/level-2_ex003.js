// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add "Meat" in the beggining of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
// add "Sugar" at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
// remove "Honey" if you are allergic to honey
shoppingCart.splice(4, 1); // I'm not allergic to honey, but here's the code
// modify "Tea" to "Green Tea"
shoppingCart.splice(3, 1, "Green Tea");

console.log(shoppingCart);