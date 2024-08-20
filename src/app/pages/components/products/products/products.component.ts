import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: {
    id: number;
    name: string;
    price: number;
    sourceImg: string;
  }[]=[];
  productQuantities: { [id: number]: number } = {}; 
  qtyExist: boolean=false;
  constructor(
    private productsService: ProductsService,
    private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.Products;
    this.cartService.cart$.subscribe(cartItems => {
      this.productQuantities = cartItems.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {} as { [id: number]: number });
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.qtyExist = true;
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product.id);
  }
}

