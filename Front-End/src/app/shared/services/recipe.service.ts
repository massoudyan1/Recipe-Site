import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';
import { from, Observable, of, pipe } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { recipes } from '../mocks/recipes.mock';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  allRecipes!: Observable<Recipe[]>;

  constructor(private http: HttpClient) {}

  // getAllRecipes(): Observable<Recipe[]> {
  //   return this.http
  //     .get<any[]>('/data/recipes.json')
  //     .pipe(map((data) => JSON.parse(JSON.stringify(data))));
  // }
  getAllRecipes(): Observable<Recipe[]> {
    return of(recipes);
  }
  getSingleRecipe(recipeId: number): Observable<Recipe> {
    const r = from(recipes);
    return r.pipe(filter((recipe) => recipe.Id === recipeId));
  }

  getFoodRecipes() {
    const r = from(recipes);
    return r.pipe(filter((recipe) => recipe.Type == 'food'));
  }
  getDesertRecipes() {
    const r = from(recipes);
    return r.pipe(filter((recipe) => recipe.Type == 'desert'));
  }
}
