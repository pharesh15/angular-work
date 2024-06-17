import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../../../models/recipe.model';
import { RecipeService } from '../../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) recipeItem!: Recipe;

  constructor(private recipeService: RecipeService) {}

  // selectRecipeItem() {
  //   this.recipeService.selectedRecipe.emit(this.recipeItem);
  // }
}
