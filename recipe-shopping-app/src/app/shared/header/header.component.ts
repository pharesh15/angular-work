import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen: boolean = false;
  constructor(private dataStorageService: DataStorageService) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  saveData() {
    this.dataStorageService.storeData();
  }

  fetchData() {
    this.dataStorageService.fetchData().subscribe();
  }
}
