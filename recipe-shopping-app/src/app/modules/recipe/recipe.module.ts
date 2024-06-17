import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
  exports: [RecipesComponent],
})
export class RecipeModule {}
