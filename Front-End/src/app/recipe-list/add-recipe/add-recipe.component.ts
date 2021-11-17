import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
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
    private recipeService: RecipeService,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  async onSubmit(
    name: string,
    type: string,
    timeMinutes: string,
    ingredients: string,
    steps: string,
    img: string
  ) {
    const data = {
      resId: 'dasda2',
      name: name,
      type: type,
      timeMinutes: Number(timeMinutes),
      ingredients: ingredients,
      steps: steps,
      img: img,
      uid: this.authService.getUserId,
      displayName: this.authService.getUserDisplayName,
      authorPhotoURL: this.authService.getUserPhotoURL,
    };
    console.log(data);

    this.recipeService.addRecipe(data);
    this.router.navigate(['recipes/all']);
  }
  Back() {
    this.location.back();
  }
}
