import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './shared/header/header.component';
import { RecipeModule } from './modules/recipe/recipe.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  provideRouter,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { routes } from './app.routes';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DropdownDirective],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RecipeModule,
    ShoppingModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterLink,
    RouterModule.forRoot(routes),
    RouterOutlet,
  ],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
