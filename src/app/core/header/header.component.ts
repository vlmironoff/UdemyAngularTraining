import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(
     public dataStorageService: DataStorageService,
     public recipeService: RecipeService,
     public authService: AuthService,
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
    this.recipeService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
