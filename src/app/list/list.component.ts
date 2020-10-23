import {Component, Input, OnInit} from '@angular/core';
import {RecipeGeneratorService} from '../services/recipe-generator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item: string = "Type item";
  items: string[] = [];
  id;
  currentPos;

  constructor(private recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.items.push(this.item);
  }

}
