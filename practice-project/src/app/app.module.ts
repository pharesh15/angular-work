import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BasicColorDirective } from './directives/basic-color.directive';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { appRoutes } from './app.routes';
import { RouterLink } from '@angular/router';
import { AuthService } from './guard/auth.services';
import { CommonModule } from '@angular/common';
import { AddressPipe } from './pipes/address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BasicColorDirective,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PrivateComponent,
    AddressPipe,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, appRoutes, RouterLink, CommonModule],
  providers: [AuthService],
})
export class AppModule {}
