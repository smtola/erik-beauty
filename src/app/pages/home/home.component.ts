import { Component } from '@angular/core';
import { CarouselComponent } from '../../share-components/carousel/carousel.component';
import { ProductsComponent } from '../components/products/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
