import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen: boolean = false;
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
