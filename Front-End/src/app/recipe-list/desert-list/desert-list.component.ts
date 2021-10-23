import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-desert-list',
  templateUrl: './desert-list.component.html',
  styleUrls: ['./desert-list.component.scss'],
})
export class DesertListComponent implements OnInit {
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
