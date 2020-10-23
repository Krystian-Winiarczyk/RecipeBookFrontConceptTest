import {Component, ViewContainerRef} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {RecipeGeneratorService} from './services/recipe-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faceapp';
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

}
