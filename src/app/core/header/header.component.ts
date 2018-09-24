import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../recipes/recipe.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from 'rxjs/Observable';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(
     public dataStorageService: DataStorageService,
     public recipeService: RecipeService,
     public store: Store<fromApp.AppState>) {}

     ngOnInit() {
        this.authState = this.store.select('auth');
     }

  onSaveData() {
    this.recipeService.pushRecipes().subscribe(
      (response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
