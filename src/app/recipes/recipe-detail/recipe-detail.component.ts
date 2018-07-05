import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list-actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list-reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetails = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeDetails.ingredients));
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
