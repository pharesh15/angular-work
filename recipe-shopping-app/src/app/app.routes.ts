import { Routes } from '@angular/router';
import { RecipesComponent } from './modules/recipe/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './modules/recipe/recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './modules/recipe/recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './modules/recipe/recipes/recipe-edit/recipe-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];
