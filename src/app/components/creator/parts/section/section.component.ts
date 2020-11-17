import { Component, OnInit } from '@angular/core';
import {RecipeGeneratorService} from '../../../../services/recipe-generator.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  data: { content: string } = {
    content: ""
  };
  id;
  currentPos;

  constructor(public recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {
  }

  isRecipeEdited(): boolean {
    return this.recipeGS.isRecipeEdited;
  }

}
