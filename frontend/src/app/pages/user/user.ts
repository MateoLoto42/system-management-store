import { Component } from '@angular/core';
import { ChevronDown, Ellipsis, Eye, LucideAngularModule, Plus, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-angular';
@Component({
  selector: 'app-user',
  imports: [LucideAngularModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
      plus = Plus;
      filter=SlidersHorizontal;
      delete=Trash2;
      edit=SquarePen;
      view=Eye;
      ellipsis = Ellipsis;
      ChevronDown=ChevronDown;

    openMenuId: number | null = null;
  
    isOpen = false;
    
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }

    toggleMenu(id: number) {
      this.openMenuId = this.openMenuId === id ? null : id;
    }

    viewCustomer(user: any) {
      console.log('Ver', user);
    }

    editCustomer(user: any) {
      console.log('Editar', user);
    }

    deleteCustomer(user: any) {
      console.log('Eliminar', user);
    }
     users = [
    {
      id: 1,
      username: "jlopez",
      nombre: "Juan López",
      mail: "juan.lopez@example.com",
      rol: "Admin",
      estado: true
    },
    {
      id: 2,
      username: "mfernandez",
      nombre: "María Fernández",
      mail: "maria.fernandez@example.com",
      rol: "User",
      estado: true
    },
    {
      id: 3,
      username: "cramirez",
      nombre: "Carlos Ramírez",
      mail: "carlos.ramirez@example.com",
      rol: "User",
      estado: false
    },
    {
      id: 4,
      username: "lgarcia",
      nombre: "Lucía García",
      mail: "lucia.garcia@example.com",
      rol: "Moderator",
      estado: true
    },
    {
      id: 5,
      username: "pperez",
      nombre: "Pedro Pérez",
      mail: "pedro.perez@example.com",
      rol: "User",
      estado: false
    }
  ];


}
