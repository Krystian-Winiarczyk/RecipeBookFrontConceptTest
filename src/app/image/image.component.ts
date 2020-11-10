import {Component, OnInit} from '@angular/core';
import {fileUpload} from '../shared/files';
import {RecipeGeneratorService} from '../services/recipe-generator.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
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
export class ImageComponent implements OnInit {
  data: {} = {
    alignment: "vertical",
    images: [],
    style: {
      'width': '100%',
      'height': "auto",
      'display': "grid",
      'grid-template-rows': 'repeat(auto-fill, 300px)',
      'grid-template-columns': `repeat(3, 1fr)`
    }
  };

  selectedVerticalImagePosition = "start";
  selectedHorizontalImagePosition = "start";
  selectedImageId: number = null;
  id;
  currentPos;

  constructor(private recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {}


  onChange(event) {
    this.data.images = fileUpload(event.target.files) as [];
  }

  onChangeAlignment(event) {
    this.selectedImageId = null;
    this.data.alignment = event.target.value;

    if (event.target.value === "vertical") {
      this.data.style = { ...this.data.style, 'grid-template-columns': `repeat(3, 1fr)`};
    } else {
      this.data.style = {
        ...this.data.style, 'grid-template-columns': `1fr`, 'grid-template-rows': null, 'grid-auto-flow': "row"
      };
    }
  }

  onChangeImagesCount(event) {
    this.data.style = { ...this.data.style, 'grid-template-columns': `repeat(${event.target.value}, 1fr)`};
  }

  onSelectImage(index) {
    const image = this.data.images[index]["imageStyle"];
    console.log(image);

    if (this.data.alignment === "vertical") {
      if (image && image["justify-self"])
        this.selectedVerticalImagePosition = image["justify-self"];
      else
        this.selectedVerticalImagePosition = "start";

      if (image && image["align-self"])
        this.selectedHorizontalImagePosition = image["align-self"];
      else
        this.selectedHorizontalImagePosition = "start";
    }

    this.selectedImageId = index;

  }

  onSizeChange(event, size, unit) {
    this.checkImageStyle();

    this.data.images[this.selectedImageId]["imageStyle"][size] = event.target.value.concat(unit);
  }

  onChangeImagePosition(event, isVertical) {
    this.checkImageStyle();

    if (isVertical)
      this.data.images[this.selectedImageId]["imageStyle"]["justify-self"] = event.target.value;
    else
      this.data.images[this.selectedImageId]["imageStyle"]["align-self"] = event.target.value;
  }

  onChangeImagePlace(event) {
    const currentIndex = this.selectedImageId;
    const newIndex = event.target.value - 1;
    this.selectedImageId = newIndex;

    this.moveArrayItem(this.data.images, currentIndex, newIndex);
  }

  test() {
    console.log(this.imgDetails);
  }

  private checkImageStyle() {
    const isStyled = this.data.images[this.selectedImageId]["imageStyle"];
    if (!isStyled)
      this.data.images[this.selectedImageId]["imageStyle"] = {};
  }

  private moveArrayItem(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
      let k = newIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  };

}
