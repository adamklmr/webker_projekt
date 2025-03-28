import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },

    { path: 'profile', component: ProfileComponent },
    // Lazy loading
    {
        path: 'orsok',
        loadComponent: () => import('./pages/orsok/orsok.component').then(m => m.OrsokComponent),
    },
    {
        path: 'botok',
        loadComponent: () => import('./pages/botok/botok.component').then(m => m.BotokComponent),
    },

    

    { path: 'signup', component: SignupComponent },

    { path: 'login', component: LoginComponent},

    { path: 'cart', component: CartComponent},

    { path: 'admin', component: AdminComponent},


    { path: '**', component: PageNotFoundComponent },

];