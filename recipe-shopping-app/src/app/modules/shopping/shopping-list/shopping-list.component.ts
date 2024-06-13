import { Component } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredientsData: Ingredient[] = [
    new Ingredient(1, 'Apple', 3),
    new Ingredient(1, 'Banana', 10),
    new Ingredient(1, 'Banana', 4),
  ];
}
