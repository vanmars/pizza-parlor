// Business Logic

// Objects to Store Costs
let sizeCost = {
  small: 5,
  medium: 8,
  large: 10,
  extraLarge: 12
}

let toppingsCost = {
  cheese: .50,
  peppers: 1,
  mushrooms: 1,
  pineapple: 1.5,
  pepperoni: 1,
  sausage: 1.5,
  ham: 2,
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