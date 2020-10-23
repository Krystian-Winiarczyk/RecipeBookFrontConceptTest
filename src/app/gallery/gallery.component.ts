import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {RecipeGeneratorService} from '../services/recipe-generator.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('carouselAnim', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  id;
  currentPos;
  slides: any[] = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" },
    { src: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg" },
    { src: "https://prod-wolt-venue-images-cdn.wolt.com/5e9ed940634ff8fe31e88912/82bf3a34-83d5-11ea-b0a6-0a586469ca09_food_coma8_menu.jpg" }
  ];
  currentSlide = 0;

  constructor(private recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {
  }

  onNextClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onPreviousClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
