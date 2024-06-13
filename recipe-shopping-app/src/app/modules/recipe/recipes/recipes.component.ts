import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeData: Recipe[] = [
    new Recipe(1, 'A new recipe', 'This is simply a test!', 'recipe.jpg'),
    new Recipe(2, 'A new recipe', 'This is simply a test!', 'recipe.jpg'),
    new Recipe(3, 'A new recipe', 'This is simply a test!', 'recipe.jpg'),
  ];
}
