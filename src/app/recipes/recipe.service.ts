import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Baked Apples',
      'Baked apples recipe wording here',
      'https://www.simplyrecipes.com/wp-content/uploads/2014/11/baked-apples-horiz-a-1800.jpg',
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Dough', 3)
      ]
    ),
    new Recipe(
      'Salmon Wellington',
      'Salmon Wellington recipe wording here',
      'http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2016/09/Salmon-Wellington-by-Yummy-Addiction-410x274.jpg',
      [
        new Ingredient('Apples', 6),
        new Ingredient('Cinnamon', 10)
      ]
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
