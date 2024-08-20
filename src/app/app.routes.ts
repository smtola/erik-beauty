import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartsComponent } from './pages/components/carts/carts.component';
export const routes: Routes = [
    { path:'', pathMatch: 'full', component: HomeComponent},
    { path:'cart', component: CartsComponent },
    { path:'**', component: HomeComponent}
];
