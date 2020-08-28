# _Mamma Marija's Croatian Pizza Parlor_

_28 August 2020_

#### _A restaurant website to practice object-oriented programming (for Epicodus)_

#### By _**Vanessa Stewart**_

## Description

_This is a website for a fictional Croatian restaurant called Mamma Marija's. This webpage allows users to add to a shopping cart of order items. They can order pizzas with different toppings and sizes and see their shopping cart fill up with each item along with a price, based on size and toppings. Strech Goals: 1) Add in options to add pasta and desert items. 2) Add in ability to sign in and save multiple shopping carts. 3) Add in deals that reduce the price._

## Specifications
| Test | Behavior | Input| Output |
| -------- | -------- | -------- | -------- |
| 1 | The program takes user inputs of topping and size and calculates a pizza price, which is displayed to the user. | Size: "Small" Toppings: "Cheese"  | "The cost of your pizza is $5.50." |
| 2 | The program takes user inputs of MULTIPLE toppings and size and calculates a pizza price, which is displayed to the user. | Size: "Small" Toppings: "Cheese, Peppers"  | "The cost of your pizza is $6.50." |
| 3 | The program allows users to add multiple pizzas to shopping cart, where the size, toppings, and prices are all listed. |  Size: "Small" Toppings: "Cheese, Peppers" Size: "Extra Large" Toppings: "Ham, Pineapple" Size: "Medium" Toppings: "Mushrooms"  | * Small - cheese, peppers - $6.50 * Extra large - pineapple, ham - $ 15.50 * Medium - mushrooms - $9.25 |

## Setup/Installation Requirements

To View Project:
* Open a web browser of your choice and navigate to the following page: https://vanmars.github.io/pizza-parlor/.

To Extend This Project:
* Clone this project using the 'git clone' command in terminal.
* Open the cloned repo in a text editor of your choice.

## Known Bugs

**Home Page**
* Add functionality for adding pasta and desert dishes
* Nav bar should stretch across the page without causing a horizontal scroll bar to appear
* Add click event to menu card, that takes the user to the menu cards below
* Add content to menus, which can be accessed from menu cards 
* Figure out why pizza form does not reset and does not hide when add pizza to cart is submitted

**About Page**
* Fix image sizing on main card; white space on bottom needs to be eliminated


## Support and contact details

_Connect with me at vamariestewart@gmail.com with ideas to improve this project._

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery

### License

Copyright (c) 2020 **_Vanessa Stewart_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
