import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  isIngredientsChanged = new Subject<Ingredient[]>();

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
    this.isIngredientsChanged.next(this.ingredients.slice());
  }

  addNewIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
