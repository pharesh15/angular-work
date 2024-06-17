import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../../models/ingredient.model';
import { ShoppingListService } from '../../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  // @ViewChild('nameInput') nameInputRef!: ElementRef;
  // @ViewChild('amountInput') amountInputRef!: ElementRef;
  @ViewChild('addForm') addFormRef?: NgForm;
  editIngredientSubscription?: Subscription;
  isEditMode: boolean = false;
  editIngredientIndex: number | undefined = undefined;
  editIngredientDetails: Ingredient | undefined = undefined;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editIngredientSubscription =
      this.shoppingListService.startedEditing.subscribe((index: number) => {
        this.isEditMode = true;
        this.editIngredientIndex = index;
        this.editIngredientDetails =
          this.shoppingListService.getIngredientByIndex(index);
        this.addFormRef?.setValue({
          name: this.editIngredientDetails?.name,
          amount: this.editIngredientDetails?.amount,
        });
      });
  }

  onSubmit(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    if (
      this.isEditMode &&
      this.editIngredientIndex !== undefined &&
      this.editIngredientDetails !== undefined
    ) {
      this.shoppingListService.editIngredient(
        this.editIngredientIndex,
        form.value
      );
    } else {
      this.shoppingListService.addNewIngredient({
        name: form.value?.name,
        amount: form.value?.amount,
      });
    }
    form.reset();
    this.isEditMode = false;
  }

  onClear() {
    this.addFormRef?.reset();
    this.isEditMode = false;
  }

  onDelete() {
    if (this.isEditMode && this.editIngredientIndex !== undefined) {
      this.shoppingListService.deleteIngredient(this.editIngredientIndex);
    }
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editIngredientSubscription?.unsubscribe();
  }
}
