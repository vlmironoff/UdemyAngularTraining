import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: Http) { }

  storeRecipes(recipes: Recipe[]) {
    return this.http.put('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json').pipe(
      map(
        (response: Response) => {
          const recipes = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
    ));
  }

}
