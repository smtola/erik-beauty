import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import { NavbarComponent } from './share-components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,RouterLink],
  template: `
   <app-navbar/>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
