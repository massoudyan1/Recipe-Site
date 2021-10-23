import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

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
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.GetSingleResipe(parseInt(this.recipeId!));
  }

  GetSingleResipe(id: number) {
    this.recipeService.getSingleRecipe(id).subscribe((data) => {
      this.recipe = data;
      console.log(data);
    });
  }
}
