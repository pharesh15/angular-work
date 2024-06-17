import { Component } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredientsData: Ingredient[] | undefined = undefined;
  ingredientSubject?: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientsData = this.shoppingListService.getAllIngredients();

    // when ingredients data get updated
    this.ingredientSubject =
      this.shoppingListService.isIngredientsChanged.subscribe((ingredients) => {
        this.ingredientsData = ingredients;
      });
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.shoppingListService.addNewIngredient(ingredient);
  }

  editEngredient(editIndex: number) {
    this.shoppingListService.startedEditing.next(editIndex);
  }

  ngOnDestroy(): void {
    this.ingredientSubject?.unsubscribe();
  }
}
