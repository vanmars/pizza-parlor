// BUGS
// * Small pizza without any topic keeps getting added to pizzaOrder

// BUSINESS LOGIC //
// Shopping Cart Constructor ---------------
function ShoppingCart () {
  this.pizzaOrder = [];
  this.pastaOrder = [];
  this.dessertOrder = [];
  this.totalPrice = 0;
};

// Shopping Cart Prototype: Add a Pizza Order
ShoppingCart.prototype.addPizzaOrder = function(pizza){
  this.pizzaOrder.push(pizza);
};

// Shopping Cart Prototype: Add a Pasta Order
ShoppingCart.prototype.addPastaOrder = function(pasta){
  this.pastaOrder.push(pasta);
};

// Shopping Cart Prototype: Add a Dessert Order
ShoppingCart.prototype.addDessertOrder = function(dessert){
  this.dessertOrder.push(dessert);
};

// Shopping Cart Prototype: Calculate Cart Total
ShoppingCart.prototype.calculateTotal = function(){
  let pizzaTotal = 0;
  let pastaTotal = 0;
  let dessertTotal = 0;
  for (pizza of this.pizzaOrder){
    pizzaTotal += pizza.price
  };
  for (pasta of this.pastaOrder){
    pastaTotal += pasta.price
  };
  for (dessert of this.dessertOrder){
    dessertTotal += dessert.price
  };
  return (pizzaTotal + pastaTotal + dessertTotal);
};

// Pizza Cost Objects
let sizeCost = {
  Small: 5.00,   //Small
  Medium: 8.00,   // Medium
  Large: 10.00,  // Large
  "Extra large": 12.00   // Extra Large
};

let toppingsCost = {
  cheese: 0.50,    
  peppers: 1.00,      
  mushrooms: 1.25,      
  pineapple: 1.50,    
  pepperoni: 1.00,     
  sausage: 1.50,    
  ham : 2.00             
};

// Pizza Constructor ---------------
function Pizza (size, toppings){
  this.size = size,
  this.toppings = toppings
};

// Pizza Prototype: Calculate Cost Method 
Pizza.prototype.calculateCost = function(){
  // Size
  let sizePrice = sizeCost[this.size];
  // Toppings
  let toppingsPrice = 0;
  for (topping of this.toppings) {
    toppingsPrice += toppingsCost[topping]
  };
  let totalPrice = sizePrice + toppingsPrice;
  this.price = totalPrice
  return ((totalPrice).toFixed(2));
};

// Pasta Cost Objects
let noodleCost = {
  Surlice: 6.00, 
  Pljukanci: 6.50,
  Fuzi: 7.00,
  Krafi: 7.50
};

let sauceCost = {
  "white wine": .50,
  tomato: .75,
  petso: 1.00
}

let addOns = {
  cheese: .50,
  mushrooms: .50,
  veggies: .75,
  meat: 1.00,
  shrimp: 1.50
}

// Pasta Constructor ---------------
function Pasta (noodle, sauce, addOns) {
  this.noodle = noodle;
  this.sauce = sauce;
  this.addOns = addOns;
};

// Pasta Prototype: Calculate Cost Method 
Pasta.prototype.calculateCost = function(){
  // Noodles
  let noodlePrice = noodleCost[this.noodle];
  // Sauce
  let saucePrice = sauceCost[this.sauce];
  // Add-Ons
  let addOnsPrice = 0;
  
  for (addOn of this.addOns) {
    addOnsPrice += addOnsCost[addOn]
  };
  let totalPrice = (noodlePrice + saucePricePrice + addOnsPrice).toFixed(2);
  this.price = totalPrice
  return totalPrice;
};

// Desserts Object
let desserts = {
  Fritule: 3.00,
  Makovnjaca: 4.00,
  "Medimurska gibanbica": 5.00
}

// Dessert Constructor
function Dessert (dessert, price) {
  this.dessert = dessert,
  this.price = desserts[this.dessert]
}


// User Interface Logic
$(document).ready(function(){
  // Menu Card Event
  $(".menuCard").click(function() {
    // $(".orderAndMenuCardsDiv").slideUp();
    $("#menuDiv").slideToggle("slow");
  });

  // Order Card Event
  $(".orderCard").click(function(){
    // Show Shopping Cart Div
    $(".orderAndMenuCardsDiv").slideUp();
    $(".customerCart").slideDown();
    // Create new Shopping Cart
    let newCart = new ShoppingCart();

    // Add Pizza Event
    $("#addPizzaButton").click(function(){
      $(".pizzaOrderOptionsDiv").show();
      
      // Listen for Pizza Form Submit
      $("form#pizzaOrderForm").submit(function(event){
        event.preventDefault();
        // Capture Form Content
        const sizeInput = $("#size").val();
        const toppingsInput = [];
        $("input:checkbox[name=topping]:checked").each(function(){
          const topping = $(this).val();
          toppingsInput.push(topping);
        });
        // Create New Pizza Object with User Input
        let newPizza = new Pizza(sizeInput, toppingsInput);
        // Calculate Cost of Pizza 
        let newPrice = newPizza.calculateCost();
        // Add Pizza to newCart and Display to Site
        newCart.addPizzaOrder(newPizza)
        $("#pizzaList").append("<li>" + newPizza.size + " - " + newPizza.toppings.join(", ")  + " - $" + newPizza.price + "</li>");
        // Shopping Cart Total Should Be Calculated and Appended 
        let newCartTotal = newCart.calculateTotal();
        $("#cartTotalReturn").text(newCartTotal);
        // Pizza Order Form Should Close
        $("form#pizzaOrderForm")[0].reset();
        $(".pizzaOrderOptionsDiv").slideUp(); 
      });

    });

  });

});





// For Stretch Goals of Adding Sign-Ins
// // UserBook Constructor ---------------
// function UserBook () {
//   this.users = [];
//   this.currentId = 0;
// };

// // UserBook Prototype: Assign ID
// UserBook.prototype.assignID = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// // UserBook Prototype: Add User
// UserBook.prototype.addUser = function(user){
//   user.id = this.assignId();
//   this.users.push(user);
// };

// // UserBook Prototype: Find User
// UserBook.prototype.findUser = function(id) {
//   for (let i=0; i<this.users.length; i++){
//     if (this.users[i]) {
//       if (this.users[i].id == id) {
//         return this.users[i];
//       };
//     };
//   };
//   return false;
// };

// // UserBook Prototype: Delete User
// UserBook.prototype.deleteUser = function(id) {
//   for (let i=0; i<this.users.length; i++){
//     if (this.users[i]) {
//       if (this.users[i].id == id) {
//         delete this.contacts[i]
//         return true;
//       };
//     };
//   };
//   return false;
// };

// // User Constructor ---------------
// function User (firstName, lastName, phoneNumber, address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
//   this.address = address
//   this.carts = [];
// };
