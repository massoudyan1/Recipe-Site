import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(private recipeService: RecipeService, public router: Router) {}

  ngOnInit(): void {
    this.GetRecipes();
  }

  GetRecipes() {
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log(data);
    });
  }

  NavigateToRecipe(recipeId: number) {
    this.router.navigate([`recipes/${recipeId}`]);
  }
}
