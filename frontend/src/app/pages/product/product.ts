import { Component } from '@angular/core';
import { ChevronRight, Ellipsis, Eye, LucideAngularModule, Plus, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-product',
  imports: [LucideAngularModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
  export class Product {
    plus = Plus;
    filter=SlidersHorizontal;
    delete=Trash2;
    edit=SquarePen;
    view=Eye;
    ellipsis = Ellipsis;
    ChevronRight=ChevronRight;

    openMenuId: number | null = null;

    isOpen = false;

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }

    toggleMenu(id: number) {
      this.openMenuId = this.openMenuId === id ? null : id;
    }

    viewProduct(product: any) {
      console.log('Ver', product);
    }

    editProduct(product: any) {
      console.log('Editar', product);
    }

    deleteProduct(product: any) {
      console.log('Eliminar', product);
    }

    products= [
    {
      id: 1,
      codigo: "P001",
      nombre: "Laptop Lenovo IdeaPad 3",
      descripcion: "Laptop de 15.6'' con procesador AMD Ryzen 5, 8GB RAM y SSD 512GB.",
      precio_compra: 450,
      precio_venta: 600,
      stock: 0,
      stock_minimo: 5,
      categoria: "Electrónica",
      proveedor: "Tech Supplier SA",
      activo: false,
    },
    {
      id: 2,
      codigo: "P002",
      nombre: "Auriculares Bluetooth Sony WH-CH510",
      descripcion: "Auriculares inalámbricos con batería de 35 horas y micrófono integrado.",
      precio_compra: 30,
      precio_venta: 50,
      stock: 40,
      stock_minimo: 10,
      categoria: "Accesorios",
      proveedor: "Music World",
      activo: true,
    },
    {
      id: 3,
      codigo: "P003",
      nombre: "Smartphone Samsung Galaxy A14",
      descripcion: "Celular de 6.6'' con cámara triple y 128GB de almacenamiento.",
      precio_compra: 150,
      precio_venta: 220,
      stock: 15,
      stock_minimo: 3,
      categoria: "Telefonía",
      proveedor: "Mobile Hub",
      activo: true,
    },
    {
      id: 4,
      codigo: "P004",
      nombre: "Silla Gamer Redragon Pegasus",
      descripcion: "Silla ergonómica con respaldo reclinable y apoyabrazos ajustables.",
      precio_compra: 100,
      precio_venta: 160,
      stock: 3,
      stock_minimo: 2,
      categoria: "Muebles",
      proveedor: "Gaming Store SRL",
      activo: false,
    },
    {
      id: 5,
      codigo: "P005",
      nombre: "Monitor LG UltraWide 29''",
      descripcion: "Monitor IPS ultrawide con resolución Full HD y tecnología FreeSync.",
      precio_compra: 180,
      precio_venta: 250,
      stock: 8,
      stock_minimo: 2,
      categoria: "Electrónica",
      proveedor: "Vision Tech",
      activo: true,
    },
    {
      id: 6,
      codigo: "P006",
      nombre: "Impresora HP DeskJet 2720",
      descripcion: "Impresora multifunción con WiFi y compatibilidad con app móvil.",
      precio_compra: 60,
      precio_venta: 95,
      stock: 5,
      stock_minimo: 4,
      categoria: "Oficina",
      proveedor: "Print Solutions",
      activo: true,
    },
  ];

}
