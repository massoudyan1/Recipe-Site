import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  type = this.activatedRoute.snapshot.paramMap.get('type');
  own = this.activatedRoute.snapshot.paramMap.get('own');

  imgPlaceholder =
    'https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png';
  constructor(
    private recipeService: RecipeService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.GetRecipes(this.type!);

    this.router.events.subscribe((event) => {
      this.type = this.activatedRoute.snapshot.paramMap.get('type');
      this.GetRecipes(this.type!);
    });
  }

  GetRecipes(type: string) {
    if (!this.router.url.includes('own')) {
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
    } else if (this.router.url.includes('own')) {
      this.recipeService
        .getOwnRecipesByType(type, this.authService.getUserId)
        .subscribe((data) => (this.recipes = data));
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
