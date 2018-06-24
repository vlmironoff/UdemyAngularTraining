import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private authService: AuthService) { }

  storeRecipes(recipes: Recipe[]) {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json?auth=' + token).pipe(
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
