import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://www.rednumberone.com/wp-content/uploads/2017/03/WEB_DSC_0318_20170302_170302-2.jpg'),
    new Recipe('Test Recipe', 'This is a test', 'https://www.rednumberone.com/wp-content/uploads/2017/03/WEB_DSC_0318_20170302_170302-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
