import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen: boolean = false;
  isAuthenticated: boolean = false;
  userSubscription?: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((result) => {
      this.isAuthenticated = !!result;
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  saveData() {
    this.dataStorageService.storeData();
  }

  fetchData() {
    this.dataStorageService.fetchData().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
