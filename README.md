# _Mamma Marija's Croatian Pizza Parlor_

28 August 2020

#### _A restaurant website to practice object-oriented programming (for Epicodus)_

#### By _**Vanessa Stewart**_

## Description

This is a website for a fictional Croatian restaurant called Mamma Marija's Croatian Pizza Parlor. This webpage allows users to order pizza, pasta, and dessert. The pizza and pasta orders can be customized with different selections for toppings, size, noodle, or sauce. Each customization affects the price, which is reflected in price displayed to the user. All items added to the cart contribute to a total cart price, which is also displayed to the suer.

 _Future Goals: 1) Add in options to delete items from cart. 2) Add in checkout button with options for take-out or delivery. 3) Add in ability to sign in and save multiple shopping carts and contact info. 4) Add in deals that reduce the price._

## Specifications
| Test | Behavior | Input| Output |
| -------- | -------- | -------- | -------- |
| 1 | The program takes user inputs of topping and size and calculates a pizza price, which is displayed to the user. | Size: "Small" Toppings: "Cheese"  | "The cost of your pizza is $5.50." |
| 2 | The program takes user inputs of multiple toppings with a single size and calculates a pizza price, which is displayed to the user. | Size: "Small" Toppings: "Cheese, Peppers"  | "The cost of your pizza is $6.50." |
| 3 | The program allows users to add multiple pizzas to shopping cart, where the size, toppings, and prices are all listed. |  Size: "Small" Toppings: "Cheese, Peppers" Size: "Extra Large" Toppings: "Ham, Pineapple" Size: "Medium" Toppings: "Mushrooms"  | * Small - cheese, peppers - $6.50 * Extra large - pineapple, ham - $ 15.50 * Medium - mushrooms - $9.25 |
| 4 | The program allows users to see a shopping cart total as they add items to the cart. |  Size: "Small" Toppings: "Cheese, Peppers" Size: "Extra Large" Toppings: "Ham, Pineapple" Size: "Medium" Toppings: "Mushrooms"  | Cart Total: $31.25 |
| 5 | The program allows users to add pasta and dessert items to the cart as well. | Pizza: Small, peppers; Pasta: Surlice, white wine, cheese; Dessert: Fritule | Pizza: * Small - peppers - $6.00; Pasta: *Surlice - white wine - cheese - $7.00; Dessert: * Fritule - $3.00; Cart Total: $16.00 |  

## Setup/Installation Requirements

To View Project:
* Open a web browser of your choice and navigate to the following page: https://vanmars.github.io/pizza-parlor/.

To Extend This Project:
* Clone this project using the 'git clone' command in terminal/command line.
* Open the cloned folder in a text editor of your choice.
* Right click on index.html and select 'Reveal in Finder' to view in browser.
* Contribute to the 'index.html' page to make changes to the homepage.
* Contribute to the 'about.html' page to make changes to the about page.
* Navigate to the 'scripts.js' file in the 'js' directory to change business and user interface logic.

## Known Bugs

**Home Page Bugs**
* Add hover effect to order and menu cards
* Add content to menus, which can be accessed from menu cards 
* Reconfigure the white text overlay on the menu cards to be responsive with other viewports
* Figure out why the background image takes a while to load after page refresh

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
