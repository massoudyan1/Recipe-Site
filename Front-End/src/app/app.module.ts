import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './recipe-list/single-recipe/single-recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodListComponent } from './recipe-list/food-list/food-list.component';
import { DesertListComponent } from './recipe-list/desert-list/desert-list.component';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, SingleRecipeComponent, NavbarComponent, FoodListComponent, DesertListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
