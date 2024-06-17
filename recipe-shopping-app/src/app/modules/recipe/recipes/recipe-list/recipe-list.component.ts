import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from '../../../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipeData: Recipe[] | undefined = undefined;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeData = this.recipeService.getAllRecipes();

    this.recipeService.recipeChanged.subscribe((recipeData: Recipe[]) => {
      this.recipeData = recipeData;
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
