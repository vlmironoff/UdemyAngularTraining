import { Injectable } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient) { }

  storeRecipes(recipes: Recipe[]) {

    /*return this.httpClient.put('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json', recipes, {
      observe: 'events',
      params: new HttpParams().set('auth', token)
    });*/
  }

  fetchRecipes() {
    // const token = this.authService.getToken();

  }

}
