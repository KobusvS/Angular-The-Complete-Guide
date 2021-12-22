import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://i2.wp.com/foxeslovelemons.com/wp-content/uploads/2021/05/Dry-Rub-for-Ribs-4-660x965.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
