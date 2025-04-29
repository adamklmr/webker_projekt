import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { EventsComponent } from './pages/events/events.component';
import { initializeAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    RouterLink,
    MenuComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'goldfish';
  isLoggedIn = false;
  isAdmin= false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  

  ngOnInit(): void {
    this.updateAuthStatus();
    if (typeof window !== 'undefined') {
      const app = initializeApp(environment.firebaseConfig);
      const analytics = initializeAnalytics(app);
    }
  }
  
  updateAuthStatus(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      this.isLoggedIn = loggedIn;
      this.isAdmin = loggedIn && (localStorage.getItem('isAdmin') === 'true');
    } else {
      this.isLoggedIn = false;
      this.isAdmin = false;
    }
    
  }
  
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isAdmin', 'false');
    this.isLoggedIn = false;
    this.isAdmin = false;
    window.location.href = '/home';
  }
  

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}
