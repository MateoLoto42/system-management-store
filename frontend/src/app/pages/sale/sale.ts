import { Component } from '@angular/core';
import { LucideAngularModule, Search, Printer, Check, Trash2, SquarePen,Plus,ChevronDown,Calendar,Filter } from 'lucide-angular';


@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './sale.html',
  styleUrl: './sale.css'
})
export class Sale {
  Search = Search;
  Printer = Printer;
  CheckCircle = Check;
  Trash = Trash2;
  Edit = SquarePen;
  plus = Plus;
  ChevronDown=ChevronDown;
calendar=Calendar;
filter=Filter;

  products = [
    { id: 1, title: 'Leche', description: 'Leche entera 1L', price: 20000 },
    { id: 2, title: 'Pan', description: 'Pan francés 1kg', price: 1500 },
    { id: 3, title: 'Queso', description: 'Queso fresco 500g', price: 20340 },
    { id: 4, title: 'Arroz', description: 'Arroz blanco 1kg', price: 5000 },
    { id: 5, title: 'Galletas', description: 'Paquete 250g', price: 1200 },
    { id: 6, title: 'Mantequilla', description: '200g', price: 1800 },
    { id: 7, title: 'Huevos', description: 'Cartón de 12 huevos', price: 2500 },
    { id: 8, title: 'Azúcar', description: 'Azúcar blanca 1kg', price: 1000 },
    { id: 9, title: 'Sal', description: 'Sal de mesa 500g', price: 900 },
    { id: 10, title: 'Aceite', description: 'Aceite vegetal 1L', price: 5420 },
    { id: 11, title: 'Café', description: 'Café molido 250g', price: 4340 },
    { id: 12, title: 'Fideos', description: 'Paquete de pasta 500g', price: 1230 },
    { id: 13, title: 'Harina', description: 'Harina de trigo 1kg', price: 110 },
    { id: 14, title: 'Jamón', description: 'Jamón cocido 250g', price: 22370 },
    { id: 15, title: 'Tomate', description: 'Tomates cherry 250g', price: 2240 },
    { id: 16, title: 'Lechuga', description: 'Lechuga romana', price: 1970 },
  ];

activeTab: 'carrito' | 'historial' = 'carrito';

historial = [
  { id: 1001, fecha: '2025-09-30', cliente: 'Juan Pérez', total: 1200, metodoPago: 'Tarjeta', estado: 'Pagado' },
  { id: 1002, fecha: '2025-09-30', cliente: 'María Gómez', total: 800, metodoPago: 'Efectivo', estado: 'Anulado' },
  { id: 1003, fecha: '2025-09-29', cliente: 'Carlos Ruiz', total: 1500, metodoPago: 'Transferencia', estado: 'Pagado' }
];
 

}
