import { Component, OnInit } from '@angular/core';
import {RecipeGeneratorService} from '../services/recipe-generator.service';
import {ImageComponent} from '../image/image.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {ListComponent} from '../list/list.component';
import {SectionComponent} from '../section/section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipe = {};

  constructor(private recipeGeneratorService: RecipeGeneratorService) { }

  ngOnInit(): void {
    const components = {
      "ImageComponent": ImageComponent,
      "GalleryComponent": GalleryComponent,
      "ListComponent": ListComponent,
      "SectionComponent": SectionComponent
    };

    this.recipeGeneratorService.getRecipeById()
      .subscribe(res => {
        this.recipe = res.recipe;
        console.log(res.recipe);
      }, err => {
        console.log(err);
      })
  }

  test() {
    console.log(this.recipe);
  }

}
