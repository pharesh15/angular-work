import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipe = [
    new Recipe('Pizza', 'Large pizza unlimited', 'item1.jpg', [
      new Ingredient('Burger', 10),
      new Ingredient('French Fries', 20),
    ]),
    new Recipe('Big Fat Burger', 'What else you need to say?', 'item2.jpg', [
      new Ingredient('Sandwich', 5),
      new Ingredient('Donut', 15),
    ]),
    new Recipe('A new recipe item', 'This is simply for test!', 'item3.jpg', [
      new Ingredient('Vadapav', 2),
      new Ingredient('Pizza', 30),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getAllRecipes() {
    return this.recipe.slice();
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

  addNewIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredientsToList(ingredients);
  }
}
