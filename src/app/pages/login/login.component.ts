import { Component,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Validators,FormBuilder, FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
// import { AdminGuard } from '../../shared/guards/admin.guard';



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
loginError: string = '';
showLoginForm: boolean = true;

constructor(private router: Router, private authService: AuthService ) {}

login(): void {
  const email = this.email.value ?? '';
  const password = this.password.value ?? '';

  this.authService.login(email, password)
    .then(async (userCredential) => {
      // Successful login
      const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
      if (isBrowser) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/home';
      }
      
      this.showLoginForm = false;
    })
    .catch((error) => {
      // Handle login error
      this.loginError = 'Invalid email or password!';
    });
    
}

  //elso merfoldko
  // login() {
  //   this.loginError = '';

  // const email = this.email.value;
  // const password = this.password.value;

  // const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  // if (email === 'test@gmail.com' && password === 'teszt123') {
  //   if (isBrowser) {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     localStorage.setItem('isAdmin', 'false');
  //     window.location.href = '/home';
  //   }
  //   this.showLoginForm = false;

  // } else if (email === 'admin@gmail.com' && password === 'admin') {
  //   if (isBrowser) {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     localStorage.setItem('isAdmin', 'true');
  //     window.location.href = '/home';
  //   }
  //   this.showLoginForm = false;

  // } else {
  //   this.loginError = 'Invalid email or password!';
  // }
  // }
}