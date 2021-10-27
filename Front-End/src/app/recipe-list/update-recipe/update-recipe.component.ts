import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.scss'],
})
export class UpdateRecipeComponent implements OnInit {
  recipe?: Recipe;
  recipeId = this.activatedRoute.snapshot.paramMap.get('id');
  data!: Recipe;

  addRecipeForm = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    timeMinutes: new FormControl(),
    ingredients: new FormControl(),
    steps: new FormControl(),
    img: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    public router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.GetRecipe(this.recipeId!);
  }

  async onSubmit(
    name: string,
    type: string,
    timeMinutes: string,
    ingredients: string,
    steps: string,
    img: string
  ) {
    const data = {
      resId: String(this.recipeId),
      name: name,
      type: type,
      timeMinutes: Number(timeMinutes),
      ingredients: ingredients,
      steps: steps,
      img: img,
    };
    console.log(data);

    if (this.recipeId) {
      this.recipeService.updateRecipe(this.recipeId, data);
      this.location.back();
    }
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
