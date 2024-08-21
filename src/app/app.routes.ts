import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartsComponent } from './pages/components/carts/carts.component';
import { ProductDetailComponent } from './pages/components/products/product-detail/product-detail.component';
import { ErrorComponent } from './pages/error/error.component';
export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'cart', component: CartsComponent },
    { path:'product/detail/:id', component: ProductDetailComponent},
    { path: '**', component: ErrorComponent}
];
