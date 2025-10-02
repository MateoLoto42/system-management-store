import { Component } from '@angular/core';
import { ChevronDown, Ellipsis, Eye, LucideAngularModule, Plus, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-angular';
@Component({
  selector: 'app-customer',
  imports: [LucideAngularModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
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

    viewCustomer(customer: any) {
      console.log('Ver', customer);
    }

    editCustomer(customer: any) {
      console.log('Editar', customer);
    }

    deleteCustomer(customer: any) {
      console.log('Eliminar', customer);
    }
  customers = [
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "+54 11 4567-8901",
    direccion: "Av. Corrientes 1234, CABA",
    email: "juan.perez@example.com",
    tipoDocumento: "DNI",
    numeroDocumento: "30123456"
  },
  {
    id: 2,
    nombre: "María González",
    telefono: "+54 11 5678-1234",
    direccion: "Calle San Martín 567, Rosario",
    email: "maria.gonzalez@example.com",
    tipoDocumento: "DNI",
    numeroDocumento: "28987654"
  },
  {
    id: 3,
    nombre: "Carlos López",
    telefono: "+54 11 6789-2345",
    direccion: "Belgrano 890, Córdoba",
    email: "carlos.lopez@example.com",
    tipoDocumento: "CUIT",
    numeroDocumento: "20-30123456-7"
  },
  {
    id: 4,
    nombre: "Lucía Fernández",
    telefono: "+54 11 7890-3456",
    direccion: "Mitre 234, Mendoza",
    email: "lucia.fernandez@example.com",
    tipoDocumento: "DNI",
    numeroDocumento: "31234567"
  },
  {
    id: 5,
    nombre: "Pedro Ramírez",
    telefono: "+54 11 8901-4567",
    direccion: "Rivadavia 678, La Plata",
    email: "pedro.ramirez@example.com",
    tipoDocumento: "Pasaporte",
    numeroDocumento: "AB123456"
  }
];

}
