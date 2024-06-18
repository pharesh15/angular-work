import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipe: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  getAllRecipes() {
    return this.recipe.slice();
  }

  saveRecipes(recipe: Recipe[]) {
    this.recipe = recipe;
    this.recipeChanged.next(this.recipe.slice());
  }

  getRecipeByIndex(index: number) {
    return this.recipe[index];
  }

  addNewRecipe(recipeData: Recipe) {
    // const data: Recipe = {
    //   name: recipeData.name,
    //   imagePath: recipeData.imagePath,
    //   description: recipeData.description,
    //   ingredients: recipeData.ingredients,
    // };
    this.recipe.push(recipeData);
    this.recipeChanged.next(this.recipe.slice());
  }

  editRecipe(index: number, recipeData: Recipe) {
    // this.recipe = this.recipe.map((recipeItem) =>
    //   recipeItem.id === id ? recipeData : recipeItem
    // );
    this.recipe[index] = recipeData;
    this.recipeChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number) {
    this.recipe.splice(index, 1);
    this.recipeChanged.next(this.recipe.slice());
  }

  addNewIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredientsToList(ingredients);
  }
}
