import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { getIdTokenResult } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    if (isBrowser) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('isAdmin');
    }
    return this.auth.signOut();
  }
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // async checkAdminStatus(): Promise<boolean> {
  //   const user: User | null = this.auth.currentUser;
  //   if (user) {
  //     await user.getIdToken(true); // Force refresh the token
  //     const idTokenResult = await getIdTokenResult(user);

  //     console.log('checkAdminStatus: role =', idTokenResult.claims['role']);
  //     return idTokenResult.claims['role'] === 'admin'; // Assuming 'role' is stored in custom claims
  //   }
  //   return false;
  // }

  // isLoggedIn(): boolean {
  //   const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  //   console.log(localStorage.getItem('isLoggedIn')); // Should be 'true'
  //   return isBrowser ? localStorage.getItem('isLoggedIn') === 'true' : false;
  // }

  // isAdmin(): boolean {
  //   const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  //   console.log(localStorage.getItem('isAdmin')); // Should be 'true'
  //   return isBrowser ? localStorage.getItem('isAdmin') === 'true' : false;
  // }
}