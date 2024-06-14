import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipeData: Recipe[] | undefined = undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeData = this.recipeService.getAllRecipes();
  }
}
