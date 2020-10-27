import {ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {fileUpload} from '../shared/files';
import {RecipeGeneratorService} from '../services/recipe-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @ViewChild('imagesContainer') imagesContainer : ElementRef;
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

  imgDetails: {} = {
    'height': 250,
    'width': 100,
    'justify-self': 'start'
  };

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
    if (this.data.alignment != "vertical") {
      let style = this.data.images[index].imageStyle;

      if (style) {
        this.imgDetails = {
          'height': style.height ? style.height : 250,
          'width': style.width ? style.width : 100,
          'justify-self': style['justify-self'] ? style['justify-self'] : 'start'
        };
      }

      this.selectedImageId = index;
    }
  }

  onSizeChange(event, size, unit) {
    this.checkImageStyle();

    this.data.images[this.selectedImageId]["imageStyle"][size] = event.target.value.concat(unit);
    console.log(this.data.images);
  }

  onChangeImagePosition(event) {
    this.checkImageStyle();

    this.data.images[this.selectedImageId]["imageStyle"]["justify-self"] = event.target.value;

    console.log(this.data.images[this.selectedImageId]);
  }

  test() {
    console.log(this.imgDetails);
  }

  private checkImageStyle() {
    if (!this.data.images[this.selectedImageId]["imageStyle"])
      this.data.images[this.selectedImageId]["imageStyle"] = {};
  }

}
