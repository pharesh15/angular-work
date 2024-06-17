import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  isIngredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients = [
    new Ingredient('Apple', 3),
    new Ingredient('Banana', 10),
    new Ingredient('Mango', 4),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.isIngredientsChanged.next(this.ingredients.slice());
  }

  editIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.isIngredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.isIngredientsChanged.next(this.ingredients.slice());
  }

  addNewIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
