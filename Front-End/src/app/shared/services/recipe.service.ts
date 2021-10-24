import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, flatMap, map } from 'rxjs/operators';
import { from, Observable, of, pipe } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { recipes } from '../mocks/recipes.mock';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // let recipesCollection!: AngularFirestoreCollection<Recipe>;
  // let recipes!: Observable<Recipe[]>;
  // let recipe!: Observable<Recipe>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  ngOnInit() {}

  getAllRecipes() {
    let recipesCollection!: AngularFirestoreCollection<Recipe>;

    recipesCollection = this.afs.collection('Recipes', (ref) => {
      return ref;
    });
    console.log(recipesCollection.valueChanges());
    return recipesCollection.valueChanges();
    // return of(recipes);
  }

  getSingleRecipe(recipeId: number): Observable<Recipe> {
    const r = from(recipes);
    return r.pipe(filter((recipe) => recipe.id === recipeId));
  }

  getFoodRecipes = (): Observable<Recipe[]> =>
    of(recipes).pipe(
      map((data) => data.filter((data) => data.type === 'food'))
    );
}
