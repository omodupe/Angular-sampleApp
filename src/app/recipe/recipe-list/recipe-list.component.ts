import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe("The list of item", "Items description", "https://images.media-allrecipes.com/userphotos/600x600/1081388.jpg"),
  new Recipe("Test Recipe", "Recipe description", "https://images.media-allrecipes.com/userphotos/720x405/2964964.jpg")
];

  constructor() { }

  ngOnInit() {
  }

}
