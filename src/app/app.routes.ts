import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: "Home", loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
    { path: "login",loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)},
    {path: 'admin', loadChildren: () => import('./admin/home.route').then(mod => mod.homeRoutes)},
] ;

