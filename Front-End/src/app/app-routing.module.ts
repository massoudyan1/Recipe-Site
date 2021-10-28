import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddRecipeComponent } from './recipe-list/add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './recipe-list/single-recipe/single-recipe.component';
import { UpdateRecipeComponent } from './recipe-list/update-recipe/update-recipe.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: SingleRecipeComponent,
  },
  {
    path: 'recipes/:type',
    component: RecipeListComponent,
  },
  {
    path: 'own/recipes/:type',
    component: RecipeListComponent,
  },
  {
    path: 'recipes',
    redirectTo: 'recipes/all',
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  {
    path: 'update-recipe/:id',
    component: UpdateRecipeComponent,
  },
  {
    path: 'login',
    component: SignUpComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'recipes/all',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'recipes/all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
