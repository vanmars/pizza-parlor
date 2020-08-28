// BUSINESS LOGIC //

// Objects to Store Costs
let sizeCost = {
  1: 5.00,   //Small
  2: 8.00,   // Medium
  3: 10.00,  // Large
  4: 12.00   // Extra Large
};

let toppingsCost = {
  1: 0.50,    // cheese
  2: 1.00,      // peppers
  3: 1.25,      // mushrooms
  4: 1.50,    // pineapple
  5: 1.00,      // pepperoni
  6: 1.50,    // sausage
  7: 2.00       // hame       
};

// Pizza Constructor
function Pizza (size, toppings){
  this.size = size,
  this.toppings = toppings
};

// Pizza Calculate Cost Method 
Pizza.prototype.calculateCost = function(){
  // // Size
  // let sizePrice = toppingsCost[this.size];
  // // Toppings
  // let toppingsPrice = 0;
  // for (topping of this.toppings) {
  //   toppingsPrice += toppingsCost[topping]
  // };
  // return toppingsPrice + sizePrice;
  return (sizeCost[this.size]+ toppingsCost[this.toppings]).toFixed(2)
};


// User Interface Logic
$(document).ready(function(){
  // Form Submit Event Handler
  $("form#orderForm").submit(function(event){
    event.preventDefault();

    // Capture Form Content
    const sizeInput = $("#size").val();
    const toppingsInput = $("#toppings").val(); 

    // Create New Pizza Object with User Input
    let newPizza = new Pizza(sizeInput, toppingsInput);

    // Calculate Cost of Pizza and Displa(y to Screen
    let newPrice = newPizza.calculateCost();
    $("#returnSpan").text(newPrice);
    $("#returnPar").show();
  });
});