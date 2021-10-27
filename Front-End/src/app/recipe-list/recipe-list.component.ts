import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  type = this.activatedRoute.snapshot.paramMap.get('type');

  constructor(
    private recipeService: RecipeService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.GetRecipes(this.type!);

    this.router.events.subscribe((event) => {
      this.type = this.activatedRoute.snapshot.paramMap.get('type');
      this.GetRecipes(this.type!);
    });
  }

  GetRecipes(type: string) {
    if (type == 'all') {
      this.recipeService
        .getAllRecipes()
        .subscribe((data) => (this.recipes = data));
    } else if (type == 'food' || type == 'dessert') {
      this.recipeService
        .getRecipesByType(type)
        .subscribe((data) => (this.recipes = data));
    } else {
      this.router.navigate(['404']);
    }
  }

  NavigateToRecipe(recipeId: string) {
    this.router.navigate([`recipe/${recipeId}`]);
  }
  DeleteRecipe(recipeId: string) {
    this.recipeService.deleteRecipe(recipeId);
  }
  UpdateRecipe(recipeId: string) {
    this.router.navigate([`update-recipe/${recipeId}`]);
  }
}
