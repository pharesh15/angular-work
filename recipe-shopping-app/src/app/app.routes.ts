import { PreloadAllModules, PreloadingStrategy, Routes } from '@angular/router';
import { RecipesComponent } from './modules/recipe/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './modules/recipe/recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './modules/recipe/recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './modules/recipe/recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './services/recipe-resolver.service';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./modules/recipe/recipe.module').then((m) => m.RecipeModule),
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];
