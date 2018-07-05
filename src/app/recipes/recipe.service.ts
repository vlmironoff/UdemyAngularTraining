import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = []; /*= [
    new Recipe(
      'Baked Apples',
      'Baked apples recipe wording here',
      'https://www.simplyrecipes.com/wp-content/uploads/2014/11/baked-apples-horiz-a-1800.jpg',
      [
        new Ingredient('Apples', 6),
        new Ingredient('Cinnamon', 10)
      ]
    ),
    new Recipe(
      'Salmon Wellington',
      'Salmon Wellington recipe wording here',
      'http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2016/09/Salmon-Wellington-by-Yummy-Addiction-410x274.jpg',
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Dough', 3)
      ]
    )
  ]*/

  constructor(private slService: ShoppingListService, private dataService: DataStorageService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  pushRecipes() {
    return this.dataService.storeRecipes(this.recipes);
  }

  fetchRecipes() {
    this.dataService.fetchRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
    );
  }

}
