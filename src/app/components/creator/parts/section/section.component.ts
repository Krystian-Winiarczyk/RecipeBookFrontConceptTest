import { Component, OnInit } from '@angular/core';
import {RecipeGeneratorService} from '../../../../services/recipe-generator.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [
    trigger('editorAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: "translateX(150px)" }),
        animate('300ms', style({ opacity: 1, transform: "translateX(0)" }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0, transform: "translateX(150px)" }))
      ])
    ])
  ]
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
