import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipe = [
    new Recipe(1, 'Pizza', 'Large pizza unlimited', 'item1.jpg', [
      new Ingredient('Burger', 10),
      new Ingredient('French Fries', 20),
    ]),
    new Recipe(2, 'Big Fat Burger', 'What else you need to say?', 'item2.jpg', [
      new Ingredient('Sandwich', 5),
      new Ingredient('Donut', 15),
    ]),
    new Recipe(
      3,
      'A new recipe item',
      'This is simply for test!',
      'item3.jpg',
      [new Ingredient('Vadapav', 2), new Ingredient('Pizza', 30)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getAllRecipes() {
    return this.recipe.slice();
  }

  getRecipeById(id: number) {
    return this.recipe.find((item: Recipe) => item.id === id);
  }

  addNewIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredientsToList(ingredients);
  }
}
