// Business Logic

// Objects to Store Costs
let sizeCost = {
  1: 5,   //Small
  2: 8,   // Medium
  3: 10,  // Large
  4: 12   // Extra Large
}

let toppingsCost = {
  1 : .50,    // cheese
  2 : 1,      // peppers
  3 : 1,      // mushrooms
  4: 1.5,     // pineapple
  5: 1,       // pepperoni
  6: 1.5,     // sausage
  7: 2        // hame       
}

// Pizza Constructor and Prototypes
function Pizza (toppings, size){
  this.toppings = toppings,
  this.size = size
};

Pizza.prototype.calculateCost = function(){
  // Toppings
  let toppingsPrice = 0;
  for (topping of this.toppings) {
    toppingsPrice += toppingsCost[topping]
  };
  // Size
  let sizePrice = toppingsCost[this.size];
  return toppingsPrice + sizePrice;
};


// User Interface Logic