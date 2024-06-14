import { Component } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredientsData: Ingredient[] | undefined = undefined;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientsData = this.shoppingListService.getAllIngredients();

    // when ingredients data got update
    this.shoppingListService.isIngredientsChanged.subscribe((ingredients) => {
      this.ingredientsData = ingredients;
    });
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.shoppingListService.addNewIngredient(ingredient);
  }
}
