import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss'],
})
export class SingleRecipeComponent implements OnInit {
  recipe?: Recipe;
  recipeId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    public router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.GetRecipe(this.recipeId!);
  }

  GetRecipe(resId: string) {
    this.recipeService.getSingleRecipe(resId).subscribe((data) => {
      console.log('single res doc:  ', data);
      this.recipe = data;
    });
  }

  Back() {
    this.location.back();
  }
}
