import { Component, inject } from '@angular/core';
import { AuthService } from '../../guard/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService = inject(AuthService);
  // interval: any;
  dailyOrders: number = 0;

  // ngOnInit(): void {
  // this.interval = setInterval(() => {
  //   this.dailyOrders++;
  //   console.log('Orders in header : ' + this.dailyOrders);
  // }, 1000);
  // }

  onLogout() {
    this.authService.logout();
  }
}
