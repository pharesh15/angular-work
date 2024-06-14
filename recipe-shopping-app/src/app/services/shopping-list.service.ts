import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  isIngredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients = [
    new Ingredient('Apple', 3),
    new Ingredient('Banana', 10),
    new Ingredient('Mango', 4),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.isIngredientsChanged.emit(this.ingredients.slice());
  }

  addNewIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
