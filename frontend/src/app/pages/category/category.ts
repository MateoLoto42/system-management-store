import { Component } from '@angular/core';
import { ChevronRight, Ellipsis, Eye, LucideAngularModule, Plus, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-angular';
@Component({
  selector: 'app-category',
  imports: [LucideAngularModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
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

    viewCategory(category: any) {
      console.log('Ver', category);
    }

    editCategory(category: any) {
      console.log('Editar', category);
    }

    deleteCategory(category: any) {
      console.log('Eliminar', category);
    }

    categories = [
    {
      id: 1,
      nombre: "Electrónica",
      descripcion: "Productos electrónicos como laptops, monitores y accesorios de tecnología."
    },
    {
      id: 2,
      nombre: "Accesorios",
      descripcion: "Auriculares, mouse, teclados y otros complementos tecnológicos."
    },
    {
      id: 3,
      nombre: "Telefonía",
      descripcion: "Smartphones, celulares y dispositivos móviles."
    },
    {
      id: 4,
      nombre: "Muebles",
      descripcion: "Sillas gamer, escritorios y otros muebles relacionados."
    },
    {
      id: 5,
      nombre: "Oficina",
      descripcion: "Impresoras, artículos y equipos para oficina."
    }
  ];

}
