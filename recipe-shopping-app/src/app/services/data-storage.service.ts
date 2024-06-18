import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private recipeService: RecipeService, private http: HttpClient) {}

  storeData() {
    const data = this.recipeService.getAllRecipes();
    this.http
      .put(
        'https://angular-recipe-project-2add2-default-rtdb.firebaseio.com/recipes.json',
        data
      )
      .subscribe((result: any) => {
        console.log(result);
      });
  }

  fetchData() {
    return this.http
      .get<Recipe[]>(
        'https://angular-recipe-project-2add2-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((results) => {
          this.recipeService.saveRecipes(results);
        })
      );
  }
}
