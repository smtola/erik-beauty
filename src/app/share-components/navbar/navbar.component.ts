import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../pages/components/products/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  totalQuantity:number=0;
  subtotal:number=0;

  constructor(private cartService:CartServiceService) { }
  ngOnInit(): void {
      this.cartService.cart$.subscribe(item => {
        this.totalQuantity = this.cartService.getTotalQuantity();
        this.subtotal = this.cartService.getSubtotal();
      })
  }

}
