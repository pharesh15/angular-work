import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../../../services/recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  index: number | undefined = undefined;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.editMode = params['id'] != null;
      this.recipeSelectForm();
    });
  }

  recipeSelectForm() {
    if (this.editMode && this.index != undefined) {
      const recipe = this.recipeService.getRecipeByIndex(this.index);

      let recipeIngredients = new FormArray<FormGroup>([]);

      if (recipe?.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        name: new FormControl(recipe?.name, Validators.required),
        imagePath: new FormControl(recipe?.imagePath, Validators.required),
        description: new FormControl(recipe?.description, Validators.required),
        ingredients: recipeIngredients,
      });
    }
  }

  get controls() {
    if (this.recipeForm) {
      return (<FormArray>this.recipeForm?.get('ingredients')).controls;
    } else {
      return null;
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  recipeOnSave() {
    if (this.editMode && this.index != undefined) {
      this.recipeService.editRecipe(this.index, this.recipeForm.value);
    } else {
      this.recipeService.addNewRecipe(this.recipeForm.value);
    }
  }
}
