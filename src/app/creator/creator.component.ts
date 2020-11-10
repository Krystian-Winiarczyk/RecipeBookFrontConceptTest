import { Component, OnInit } from '@angular/core';
import {RecipeGeneratorService} from '../services/recipe-generator.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  counter = 0;

  constructor(public recipeGeneratorService: RecipeGeneratorService) {
  }

  onTaskDrop(event: CdkDragDrop<[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onAddComponent(item) {
    this.counter++;
    this.recipeGeneratorService.addComponent(item);
  }

  xd() {
    console.log(this.recipeGeneratorService.selectedComponents);
  }

  ngOnInit(): void {
  }
}
