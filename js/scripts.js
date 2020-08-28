// BUSINESS LOGIC //

// Objects to Store Costs
let sizeCost = {
  1: 5.00,   //Small
  2: 8.00,   // Medium
  3: 10.00,  // Large
  4: 12.00   // Extra Large
};

let toppingsCost = {
  cheese: 0.50,    
  peppers: 1.00,      
  mushroom: 1.25,      
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

// Pizza Calculate Cost Method 
Pizza.prototype.calculateCost = function(){
  // Size
  let sizePrice = sizeCost[this.size];
  // Toppings
  let toppingsPrice = 0;
  for (topping of this.toppings) {
    toppingsPrice += toppingsCost[topping]
  };
  return (sizePrice + toppingsPrice).toFixed(2);
};

// User Interface Logic
$(document).ready(function(){
  // Order Button Event Handler
  $(".orderButtonDiv").click(function(){
    $(".orderButtonDiv").slideUp();
    $(".formDiv").slideDown();
  });

  // Form Submit Event Handler
  $("form#orderForm").submit(function(event){
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
    // Calculate Cost of Pizza and Display to Screen
    let newPrice = newPizza.calculateCost();
    $("#returnSpan").text(newPrice);
    $("#returnPar").show();

  });
});