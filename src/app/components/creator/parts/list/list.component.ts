import {Component, Input, OnInit} from '@angular/core';
import {RecipeGeneratorService} from '../../../../services/recipe-generator.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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
