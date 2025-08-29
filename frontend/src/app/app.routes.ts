import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Product } from './pages/product/product';
import { Report } from './pages/report/report';
import { Sale } from './pages/sale/sale';
import { Security } from './pages/security/security';
import { Config } from './pages/config/config';
import { User } from './pages/user/user';
import { Supplier } from './pages/supplier/supplier';
import { Customer } from './pages/customer/customer';

export const routes: Routes = [ 
{ path: 'dashboard', component: Dashboard },
{ path: 'product', component: Product },
{ path: 'report', component: Report },
{ path: 'sale', component: Sale },
{ path: 'security', component: Security },
{ path: 'config', component: Config },
{ path: 'user', component: User },
{ path: 'customer', component: Customer },
{ path: 'supplier', component: Supplier },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: '**', redirectTo: '/dashboard' }
];

