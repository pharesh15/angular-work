import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
import { AnimationComponent } from './components/animation/animation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'private', component: PrivateComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'animation', component: AnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class appRoutes {}
