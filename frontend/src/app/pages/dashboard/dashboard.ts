import { Component } from '@angular/core';
import { Header } from '../../components/layout/header/header';
import { 
  CircleDollarSign,
  LucideAngularModule,
  User,
} from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Header,LucideAngularModule,BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  //Icons
  dollar = CircleDollarSign;
  user = User;


  sales= [
    { id: 1, fecha: '01/09/2025', cliente: 'Juan Pérez', producto: 'Producto A', monto: 25000 },
    { id: 2,fecha: '02/09/2025', cliente: 'María López', producto: 'Producto B', monto: 40000 },
    { id: 3,fecha: '03/09/2025', cliente: 'Carlos Gómez', producto: 'Producto C', monto: 15000 },
    { id: 4,fecha: '04/09/2025', cliente: 'Ana Torres', producto: 'Producto D', monto: 32000 },
    { id: 5,fecha: '05/09/2025', cliente: 'Luis Ramírez', producto: 'Producto E', monto: 28000 },
    { id: 6,fecha: '06/09/2025', cliente: 'Sofía Díaz', producto: 'Producto F', monto: 46000 },
    { id: 7,fecha: '07/09/2025', cliente: 'Pedro Fernández', producto: 'Producto G', monto: 38000 },
    { id: 8,fecha: '08/09/2025', cliente: 'Laura Méndez', producto: 'Producto H', monto: 52000 },
    { id: 9,fecha: '08/09/2025', cliente: 'Laura Méndez', producto: 'Producto H', monto: 52000 },
  ];



  data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue',
      'Rojo',
      'Marron'
    ],
    datasets: [{
      label: 'Stock Minimo',
      data: [11, 16, 7, 3, 14,5,20],
      backgroundColor: '#dbd4cc',
    }]
  };

  barChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ventas ($)',
        data: [32000, 28000, 45000, 38000, 52000, 61000,32000, 18000, 49000, 28000, 23900, 11000],
        backgroundColor: '#dbd4cc',
        borderColor: '#dbd4cc',
      }
    ]
  };
  barChartOptions = {
      responsive: true,
      maintainAspectRatio: false
  }
   /*barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    legend: {
      labels: {
        color: '#dbd4cc', // Color del texto de la leyenda
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#dbd4cc' // Color de los textos en eje X
      },
      grid: {
        color: '#555' // Color de las líneas de la grilla (opcional)
      }
    },
    y: {
      ticks: {
        color: '#dbd4cc' // Color de los textos en eje Y
      }
    }
  }
  };
 */

}
