import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelectedEvent = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe('Vegan Recipe', 'This is a delicious vegan dish.',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1386/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2874-1-530x380-c.jpg'),
    new Recipe('A Bread Recipe', 'This is a cruncy and moist bread.',
      'https://miro.medium.com/v2/resize:fit:1358/0*hu2iaQBmXjE8Skp3.jpg'),
  ];
  constructor() { }

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeSelectedEvent.emit(recipe);
  }
}
