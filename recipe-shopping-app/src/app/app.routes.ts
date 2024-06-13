import { Routes } from '@angular/router';
import { RecipesComponent } from './modules/recipe/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', component: RecipesComponent },
];
