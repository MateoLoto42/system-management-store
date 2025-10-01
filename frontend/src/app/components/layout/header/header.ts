import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule,Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menu = Menu;
 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
