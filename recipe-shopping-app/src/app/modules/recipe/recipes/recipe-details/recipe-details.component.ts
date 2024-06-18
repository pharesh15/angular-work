import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from '../../../../services/recipe.service';
import { Ingredient } from '../../../../models/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  recipeDetails: Recipe | undefined = undefined;
  isOpen: boolean = false;
  index: number | undefined = undefined;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.recipeDetails = this.recipeService.getRecipeByIndex(this.index);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    if (this.index !== undefined) {
      this.recipeService.deleteRecipe(this.index);
      this.router.navigate(['/recipes']);
    }
  }

  onAddNewIngredients(ingredients: Ingredient[]) {
    this.recipeService.addNewIngredientsToShoppingList(ingredients);
  }
}
