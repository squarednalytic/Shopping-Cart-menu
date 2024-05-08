# Shopping Cart System with TypeScript and Vue.js

This project implements a basic shopping cart system using TypeScript with Vue.js. It includes functionality to add items to the cart, remove items from the cart, and display the total price of the items in the cart.

## Features

- Add items to the shopping cart
- Remove items from the shopping cart
- Display total price of items in the shopping cart
- Integrates with MySQL database for storing shopping cart items

## Installation

1. Clone the repository:
git clone https://github.com/squarednalytic/shopping-cart-menu.git

2. Navigate to the project directory:
cd shopping-cart-menu

3. Install dependencies:
npm install

4. Set up MySQL database:
   - Create a MySQL database named `shopping_cart`.
   - Run the SQL script `create_database.sql` to create the `cart_items` table.

5. Configure MySQL connection:
   - Open `ShoppingCart.ts` file.
   - Update MySQL connection settings (host, user, password) to match your MySQL setup.

6. Run the application:
   npm run serve


7. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Open the application in your browser.
- Browse through available items and click "Add to Cart" to add items to your shopping cart.
- You can view the items in your shopping cart on the shopping cart page.
- You can remove items from the shopping cart by clicking the "Remove" button next to each item.
- The total price of the items in the shopping cart is displayed at the bottom of the page.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

