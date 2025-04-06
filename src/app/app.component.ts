import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EsemenyekComponent } from './pages/esemenyek/esemenyek.component';
import { TermekekComponent } from './pages/termekek/termekek.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    RouterLink,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'goldfish';
  isLoggedIn = false;
  isAdmin= false;

  constructor() {}

  ngOnInit(): void {
    this.updateAuthStatus();
  }
  
  updateAuthStatus(): void {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedIn = loggedIn;
    this.isAdmin = loggedIn && (localStorage.getItem('isAdmin') === 'true');
  }
  
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    window.location.href = '/home';
  }
  

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}
