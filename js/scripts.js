// BUGS
// 1. Figure out why pizza form does not reset and does not hide when add pizza to cart is submitted.

// BUSINESS LOGIC //

// UserBook Constructor ---------------
function UserBook () {
  this.users = [];
  this.currentId = 0;
};

// UserBook Prototype: Assign ID
UserBook.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
};

// UserBook Prototype: Add User
UserBook.prototype.addUser = function(user){
  user.id = this.assignId();
  this.users.push(user);
};

// UserBook Prototype: Find User
UserBook.prototype.findUser = function(id) {
  for (let i=0; i<this.users.length; i++){
    if (this.users[i]) {
      if (this.users[i].id == id) {
        return this.users[i];
      };
    };
  };
  return false;
};

// UserBook Prototype: Delete User
UserBook.prototype.deleteUser = function(id) {
  for (let i=0; i<this.users.length; i++){
    if (this.users[i]) {
      if (this.users[i].id == id) {
        delete this.contacts[i]
        return true;
      };
    };
  };
  return false;
};

// User Constructor ---------------
function User (firstName, lastName, phoneNumber, address){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address
  this.carts = [];
};

// Shopping Cart Constructor ---------------
function ShoppingCart () {
  this.pizzaOrder = [];
  this.pastaOrder = [];
  this.dessertOrder = [];
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

// Pizza Objects to Store Costs
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

// Pizza Constructor
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
  let totalPrice = (sizePrice + toppingsPrice).toFixed(2);
  this.price = totalPrice
  return totalPrice;
};

// Add Price

// User Interface Logic
$(document).ready(function(){
  // Order Card Event Handler
  $(".orderCard").click(function(){
    // Show Shopping Cart Div
    $(".orderAndMenuCardsDiv").slideUp();
    $(".customerCart").slideDown();

    // Create new Shopping Cart
    let newCart = new ShoppingCart();

    // Shopping Cart Event Handlers
    // Add Pizza
    $("#addPizzaButton").click(function(){
      $(".pizzaOrderOptionsDiv").show();

      // Store Pizza Form Input
      $("form#pizzaOrderForm").submit(function(event){
        event.preventDefault();
        // Capture Form Content
        const sizeInput = $("#size").val();
        const toppingsInput = [];
        $("input:checkbox:checked").each(function(){
          const topping = $(this).val();
          toppingsInput.push(topping)
        });

        // Create New Pizza Object with User Input
        let newPizza = new Pizza(sizeInput, toppingsInput);

        // Calculate Cost of Pizza 
        let newPrice = newPizza.calculateCost();

        // Add Pizza to Cart
        newCart.addPizzaOrder(newPizza)
        
        // New item should show up in pizza shopping cart
        $("#pizzaList").append("<li>" + newPizza.size + " - " + newPizza.toppings.join(", ")  + " - $" + newPizza.price + "</li>");
        
        // Pizza Order Form Should Close
        $("form#pizzaOrderForm").reset();
        $(".pizzaOrderOptionsDiv").slideUp(); 
      });
    });
  });
});