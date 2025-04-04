import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  // isLoading: boolean = false;src/app/pages/login/login.component.ts
  loginError: string = '';
  showLoginForm: boolean = true;
  isAdmin: boolean = false;

  constructor() {}

  login() {
    this.loginError = '';
  
    const email = this.email.value;
    const password = this.password.value;
  
    if (email === 'test@gmail.com' && password === 'teszt123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false'); // Nem admin user
      this.showLoginForm = false;
      window.location.href = '/home';
  
    } else if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
      this.showLoginForm = false;
      window.location.href = '/home';
  
    } else {
      this.loginError = 'Invalid email or password!';
    }
  }
  
}