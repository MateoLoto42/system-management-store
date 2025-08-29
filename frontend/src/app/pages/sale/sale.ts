import { Component } from '@angular/core';
import { Header } from '../../components/layout/header/header';
import { LucideAngularModule, Search, Printer, Check, Trash2, SquarePen } from 'lucide-angular';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [Header,LucideAngularModule],
  templateUrl: './sale.html',
  styleUrl: './sale.css'
})
export class Sale {
  Search = Search;
  Printer = Printer;
  CheckCircle = Check;
  Trash = Trash2;
  Edit = SquarePen;

  products = [
    { id: 1, title: 'Leche', description: 'Leche entera 1L', price: 2.00 },
    { id: 2, title: 'Pan', description: 'Pan francés 1kg', price: 1.50 },
    { id: 3, title: 'Queso', description: 'Queso fresco 500g', price: 2.00 },
    { id: 4, title: 'Arroz', description: 'Arroz blanco 1kg', price: 3.50 },
    { id: 5, title: 'Galletas', description: 'Paquete 250g', price: 1.20 },
    { id: 6, title: 'Mantequilla', description: '200g', price: 1.80 },
    { id: 7, title: 'Huevos', description: 'Cartón de 12 huevos', price: 2.50 },
    { id: 8, title: 'Azúcar', description: 'Azúcar blanca 1kg', price: 1.00 },
    { id: 9, title: 'Sal', description: 'Sal de mesa 500g', price: 0.80 },
    { id: 10, title: 'Aceite', description: 'Aceite vegetal 1L', price: 3.20 },
    { id: 11, title: 'Café', description: 'Café molido 250g', price: 4.50 },
    { id: 12, title: 'Fideos', description: 'Paquete de pasta 500g', price: 1.30 },
    { id: 13, title: 'Harina', description: 'Harina de trigo 1kg', price: 1.10 },
    { id: 14, title: 'Jamón', description: 'Jamón cocido 250g', price: 2.70 },
    { id: 15, title: 'Tomate', description: 'Tomates cherry 250g', price: 2.40 },
    { id: 16, title: 'Lechuga', description: 'Lechuga romana', price: 1.70 },
  ];

}
