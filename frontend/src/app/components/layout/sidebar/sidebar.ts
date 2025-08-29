import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  User,
  LayoutDashboard, 
  LogOut, 
  Package, 
  ShoppingCart, 
  Users, 
  FileStack, 
  ShieldCheck,
  Cog,
  Container, 
  ChevronRight,
  ImageIcon,
  Settings,
  BookUser
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,LucideAngularModule,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  readonly User = User;
  readonly LogOut = LogOut;
  readonly Package = Package;         // Inventario
  readonly ShoppingCart = ShoppingCart; // Ventas
  readonly Users = Users;             // Clientes 
  readonly FileStack = FileStack;     // Reportes
  readonly Cog = Cog;     // Config
  readonly ShieldCheck = ShieldCheck; // Seguridad
  readonly LayoutDashboard = LayoutDashboard;
  readonly Container = Container; // Proveedores
  readonly ChevronRight= ChevronRight;
  readonly Profile= ImageIcon;
  readonly Settings= Settings;
  readonly BookUser=BookUser;


  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
