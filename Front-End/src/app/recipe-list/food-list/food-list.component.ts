import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(private recipeService: RecipeService, public router: Router) {}

  ngOnInit(): void {
    this.GetRecipes();
  }

  GetRecipes() {
    this.recipeService.getFoodRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  NavigateToRecipe(recipeId: number) {
    this.router.navigate([`recipes/${recipeId}`]);
  }
}
