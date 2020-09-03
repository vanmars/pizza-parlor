// BUSINESS LOGIC //

// Shopping Cart  --------------- --------------- ---------------
// Shopping Cart Constructor
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
    Number(pizzaTotal += pizza.price)
  };
  for (pasta of this.pastaOrder){
    Number(pastaTotal += pasta.price)
  };
  for (dessert of this.dessertOrder){
    Number(dessertTotal += dessert.price)
  };
  let cartTotal = (pizzaTotal + pastaTotal + dessertTotal);
  console.log("Cart Total Type:", typeof(cartTotal));
  return cartTotal
};

// Pizza  --------------- --------------- ---------------
// Pizza Constructor
function Pizza (size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.sizeCost = {
      Small: 5.00,   
      Medium: 8.00,   
      Large: 10.00,  
      "Extra large": 12.00   
    },
  this.toppingsCost = {
    cheese: 0.50,    
    peppers: 1.00,      
    mushrooms: 1.25,      
    pineapple: 1.50,    
    pepperoni: 1.00,     
    sausage: 1.50,    
    ham : 2.00             
  }
};

// Pizza Prototype: Calculate Cost Method 
Pizza.prototype.calculateCost = function(){
  // Size
  let sizePrice = this.sizeCost[this.size];
  // Toppings
  let toppingsPrice = 0;
  for (topping of this.toppings) {
    toppingsPrice += this.toppingsCost[topping]
  };
  let totalPrice = sizePrice + toppingsPrice;
  console.log("Pizza total type:", typeof(totalPrice));
  this.price = totalPrice
  return ((totalPrice).toFixed(2));
};

// Pasta  --------------- --------------- ---------------
// Pasta Constructor
function Pasta (noodle, sauce, addOns) {
  this.noodle = noodle;
  this.sauce = sauce;
  this.addOns = addOns;
  this.noodleCost = {
    Surlice: 6.00, 
    Pljukanci: 6.50,
    Fuzi: 7.00,
    Krafi: 7.50
  },
  this.sauceCost = {
    "white wine": .50,
    tomato: .75,
    pesto: 1.00
  },
  this.addOnsCost = {
    cheese: .50,
    mushrooms: .50,
    veggies: .75,
    meat: 1.00,
    shrimp: 1.50
  };
};

// Pasta Prototype: Calculate Cost Method 
Pasta.prototype.calculateCost = function(){
  // Noodles
  let noodlePrice = this.noodleCost[this.noodle];
  // Sauce
  let saucePrice = this.sauceCost[this.sauce];
  // Add-Ons
  let addOnsPrice = 0;
  for (addOn of this.addOns) {
    addOnsPrice += this.addOnsCost[addOn]
  };
  let totalPrice = (noodlePrice + saucePrice + addOnsPrice);
  console.log("Pasta total type:", typeof(totalPrice));
  this.price = totalPrice
  return ((totalPrice).toFixed(2));
};

// Desserts  --------------- --------------- ---------------
// Dessert Constructor
function Dessert (dessert) {
  this.dessert = dessert,
  this.desserts = {
    Fritule: 3.00,
    Makovnjaca: 4.00,
    "Medimurska gibanbica": 5.00
  },
  this.price = this.desserts[this.dessert]
};

// USER INTERFACE LOGIC
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
     // Listen for Pizza Form Submit
     $("form#pizzaOrderForm").submit(function(event){
      event.preventDefault();
      console.log("Add pizza clicked")
      // Capture Form Content
      const sizeInput = $("#size").val();
      let toppingsInput = [];
      $("input:checkbox[name=topping]:checked").each(function(){
        const topping = $(this).val();
        toppingsInput.push(topping);
      });
      console.log("Size Input", sizeInput)
      console.log("Toppings Input", toppingsInput)
      // Create New Pizza Object with User Input
      let newPizza = new Pizza(sizeInput, toppingsInput);
      // Calculate Cost of Pizza 
      let newPrice = newPizza.calculateCost();
      // Add Pizza to newCart and Display to Site
      newCart.addPizzaOrder(newPizza)
      $("#pizzaList").append("<li>" + newPizza.size + " - " + newPizza.toppings.join(", ")  + " - $" + newPrice + "</li>");
      // Shopping Cart Total Should Be Calculated and Appended 
      let newCartTotal = newCart.calculateTotal();
      $("#cartTotalReturn").text(newCartTotal.toFixed(2));
      $("form#pizzaOrderForm")[0].reset();
      // Pizza Order Form Should Close
      // $(".pizzaOrderOptionsDiv").slideUp(); 
    });
    // Listen for Pasta Form Submit
    $("form#pastaOrderForm").submit(function(event){
      console.log("Pasta Submitted!")
      event.preventDefault();
      // Capture Form Content
      const noodleInput = $("#noodle").val();
      const sauceInput = $("#sauce").val();
      let addOnsInput = [];
      $("input:checkbox[name=addOns]:checked").each(function(){
        const addOn = $(this).val();
        addOnsInput.push(addOn);
      });
      // Create New Pasta Object with User Input
      let newPasta = new Pasta(noodleInput, sauceInput, addOnsInput);
      // Calculate Cost of Pasta 
      let newPrice = newPasta.calculateCost();
      // Add Pasta to newCart and Display to Site
      newCart.addPastaOrder(newPasta);
      $("#pastaList").append("<li>" + newPasta.noodle + " - " +  newPasta.sauce + " - " + newPasta.addOns.join(", ")  + " - $" + newPrice + "</li>");
      // Shopping Cart Total Should Be Calculated and Appended 
      let newCartTotal = newCart.calculateTotal();
      $("#cartTotalReturn").text(newCartTotal.toFixed(2));
      // Pasta Order Form Should Reset
      $("form#pastaOrderForm")[0].reset();
    });
    // Listen for Desert Form Submit
    $("form#dessertOrderForm").submit(function(event){
      console.log("Dessert Submitted!")
      event.preventDefault();
      // Capture Form Content
      const dessertInput = $("#dessert").val();
      // Create New Dessert Object with User Input
      let newDessert = new Dessert(dessertInput);
      console.log("Desert: ", newDessert.dessert, "Price: ", newDessert.price);
      // Add Dessert to newCart and Display to Site
      newCart.addDessertOrder(newDessert);
      $("#dessertList").append("<li>"+ dessertInput + " -  $" + (newDessert.price.toFixed(2)) + "</li>");
      // Shopping Cart Total Should Be Calculated and Appended
      let newCartTotal = newCart.calculateTotal();
      $("#cartTotalReturn").text(newCartTotal.toFixed(2));
      // Dessert Order Form Should Reset
      $("form#dessertOrderForm")[0].reset();
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
