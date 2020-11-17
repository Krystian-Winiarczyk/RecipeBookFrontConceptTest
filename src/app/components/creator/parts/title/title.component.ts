import {Component, OnInit} from '@angular/core';
import {RecipeGeneratorService} from '../../../../services/recipe-generator.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  data: { title: string } = {
    title: ''
  };
  id;
  currentPos;

  constructor(public recipeGS: RecipeGeneratorService) {
  }

  ngOnInit(): void {
  }

  isRecipeEdited(): boolean {
    return this.recipeGS.isRecipeEdited;
  }
}
