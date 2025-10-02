import { Component } from '@angular/core';
import { ChevronDown, Ellipsis, Eye, LucideAngularModule, Plus, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-angular';
@Component({
  selector: 'app-supplier',
  imports: [LucideAngularModule],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css'
})
export class Supplier {
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

    viewCustomer(supplier: any) {
      console.log('Ver', supplier);
    }

    editCustomer(supplier: any) {
      console.log('Editar', supplier);
    }

    deleteCustomer(supplier: any) {
      console.log('Eliminar', supplier);
    }
     suppliers = [
  {
    id: 1,
    nombre: "Tech Solutions S.A.",
    telefono: "+54 11 4000-1234",
    email: "contacto@techsolutions.com",
    direccion: "Av. Córdoba 2345, CABA",
    estado: true
  },
  {
    id: 2,
    nombre: "Distribuidora Andina",
    telefono: "+54 261 455-7890",
    email: "ventas@andina.com.ar",
    direccion: "San Martín 890, Mendoza",
    estado: true
  },
  {
    id: 3,
    nombre: "Global Office Supplies",
    telefono: "+54 11 4333-5678",
    email: "info@globaloffice.com",
    direccion: "Rivadavia 1230, Buenos Aires",
    estado: false
  },
  {
    id: 4,
    nombre: "Muebles Express",
    telefono: "+54 351 478-9999",
    email: "atencion@mueblesexpress.com",
    direccion: "Colón 456, Córdoba",
    estado: true
  },
  {
    id: 5,
    nombre: "Importadora del Sur",
    telefono: "+54 299 443-1212",
    email: "import@delsur.com.ar",
    direccion: "Av. Argentina 789, Neuquén",
    estado: false
  }
];


}
