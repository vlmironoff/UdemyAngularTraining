import {Actions, Effect, ofType} from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import {switchMap} from 'rxjs/operators';
import {Recipe} from '../recipe.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeEffects {

  @Effect()
  recipeFetch = this.actions$
    .pipe(
      ofType(
        RecipeActions.FETCH_RECIPES),
      switchMap ((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ad2a1.firebaseio.com/recipes.json');
      }),
      map(
        (recipes) => {
          console.log(recipes);
          recipes = recipes || [];
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          };
        }
      )
);

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

}
