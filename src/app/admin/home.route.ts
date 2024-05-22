import { Routes } from '@angular/router';

export const homeRoutes:Routes = [
    {path: 'link1', loadComponent: () => import('../admin/link1/link1.component').then(mod => mod.Link1Component)},
    {path: 'link2', loadComponent: () => import('../admin/link2/link2.component').then(mod => mod.Link2Component)},
    {path: 'link3', loadComponent: () => import('../admin/link3/link3.component').then(mod => mod.Link3Component)},
    {path: 'link4', loadComponent: () => import('../admin/link4/link4.component').then(mod => mod.Link4Component)},
    {path: 'link5', loadComponent: () => import('../admin/link5/link5.component').then(mod => mod.Link5Component)},
]