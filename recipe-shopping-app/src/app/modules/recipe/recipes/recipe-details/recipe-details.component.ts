import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from '../../../../services/recipe.service';
import { Ingredient } from '../../../../models/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  recipeDetails: Recipe | undefined = undefined;
  isOpen: boolean = false;
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipeItem) => {
      this.recipeDetails = recipeItem;
    });
  }

  onAddNewIngredients(ingredients: Ingredient[]) {
    this.recipeService.addNewIngredientsToShoppingList(ingredients);
  }
}
