import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  sourceImg: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: CartItem) {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(itemId: number) {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === itemId);
    if (index > -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      this.cartSubject.next(this.cartItems);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
