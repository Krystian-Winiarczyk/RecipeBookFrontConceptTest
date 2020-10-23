import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fileUpload} from '../shared/files';
import {FormBuilder} from '@angular/forms';
import {RecipeGeneratorService} from '../services/recipe-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private alignment: string = "vertical";
  images: any[] = [];
  style: {} = {
    'width': '100%',
    'display': "grid",
    'grid-template-rows': 'repeat(auto-fill, 300px)',
    'grid-template-columns': `repeat(3, 1fr)`
  };
  selectedImageId: number = null;

  id;
  currentPos;

  constructor(private recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {}


  onChange(event) {
    this.images = fileUpload(event.target.files);
  }

  onChangeAlignment(event) {
    this.alignment = event.target.value;
    if (event.target.value === "vertical") {
      this.style = { ...this.style, 'grid-template-columns': `repeat(3, 1fr)`};
    } else {
      this.style = { ...this.style, 'grid-template-columns': `1fr`};
    }
  }

  onChangeImagesCount(event) {
    this.style = { ...this.style, 'grid-template-columns': `repeat(${event.target.value}, 1fr)`};
  }

  onSelectImage(index) {
    console.log(index);
    console.log(this.images[index]);
    this.selectedImageId = index;
  }

}
