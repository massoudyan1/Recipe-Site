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

  getAllRecipes = (): Observable<any[]> =>
    this.afs.collection('recipes').valueChanges({ idField: 'resId' });

  // getSingleRecipe(recipeId: number): Observable<Recipe> {
  //   const r = from(recipes);
  //   return r.pipe(filter((recipe) => recipe.id === recipeId));
  // }

  getSingleRecipe = (resId: string): Observable<any> =>
    this.afs.doc(`recipes/${resId}`).valueChanges({ idField: 'resId' });

  // getFoodRecipes = (): Observable<any[]> =>
  // this.afs.collection('recipes').valueChanges({ idField: 'resId' }).pipe();

  getRecipesByType = (type: string): Observable<any[]> =>
    this.afs
      .collection('recipes', (ref) => ref.where('type', '==', type))
      .valueChanges({ idField: 'resId' });

  addRecipe(data: Recipe) {
    this.afs.collection('recipes').add(data);
  }

  deleteRecipe = (resId: string) => this.afs.doc(`recipes/${resId}`).delete();
  updateRecipe = (resId: string, data: Recipe) => {
    console.log('service:  ', resId, '  ', data);
    this.afs.doc(`recipes/${resId}`).update(data);
  };
}
