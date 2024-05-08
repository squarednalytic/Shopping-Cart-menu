import { ShoppingCartItem } from './ShoppingCartItem';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shopping_cart'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

export class ShoppingCart {
  constructor() {}

  addItem(item: ShoppingCartItem): Promise<void> {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO cart_items SET ?', item, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  updateItemQuantity(itemId: number, quantity: number): Promise<void> {
    return new Promise((resolve, reject) => {
      db.query('UPDATE cart_items SET quantity = ? WHERE id = ?', [quantity, itemId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  removeItem(itemId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM cart_items WHERE id = ?', itemId, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
