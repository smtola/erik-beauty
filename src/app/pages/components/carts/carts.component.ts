import { Component } from '@angular/core';
import { CartServiceService } from '../products/cart-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  cartItems: { id: number, name: string, price: number,sourceImg:string, quantity: number,amount?: number }[] = [];
  totalAmount: number = 0;
  isCheckout: boolean = true;
  customer = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  constructor(
    private cartService: CartServiceService,
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart;
      this.totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  checkout() {
    // Navigate to the customer form component
    this.isCheckout = true;
  }

  onSubmit() {
    // Handle form submission logic
    console.log('Customer Information:', this.customer);
    console.log('Cart Items:', this.cartItems);
    // Clear cart items from localStorage or a service
    this.isCheckout = false;
  }
  onCancel(){
    this.isCheckout = false;
  }
}
