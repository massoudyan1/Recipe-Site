import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './recipe-list/food-list/food-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './recipe-list/single-recipe/single-recipe.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: 'recipes/:id',
    component: SingleRecipeComponent,
  },
  {
    path: 'food',
    component: FoodListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
