import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './shared/header/header.component';
import { RecipeModule } from './modules/recipe/recipe.module';
import { ShoppingModule } from './modules/shopping/shopping.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RecipeModule, ShoppingModule],
})
export class AppModule {}
