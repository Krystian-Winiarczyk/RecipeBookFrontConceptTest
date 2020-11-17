import {Component, Input, OnInit} from '@angular/core';
import {RecipeGeneratorService} from '../../../../services/recipe-generator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: {
    item: string,
    items: string[]
  } = {
    item: "Type item",
    items: []
  };
  id;
  currentPos;

  constructor(private recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.data.items.push(this.data.item);
  }

  isRecipeEdited(): boolean {
    return this.recipeGS.isRecipeEdited;
  }

}
