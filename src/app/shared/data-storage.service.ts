import { Injectable } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  storeRecipes(recipes: Recipe[]) {

    /*return this.httpClient.put('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json', recipes, {
      observe: 'events',
      params: new HttpParams().set('auth', token)
    });*/

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json', recipes, {reportProgress: true});
    return this.httpClient.request(req);
  }

  fetchRecipes() {
    // const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json')
    .pipe(
      map(
        (recipes) => {
          console.log(recipes);
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
