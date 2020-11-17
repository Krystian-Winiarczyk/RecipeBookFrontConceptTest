import {Component, OnInit} from '@angular/core';
import {RecipeGeneratorService} from '../../services/recipe-generator.service';
import {components} from '../../shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipe = [];
  components = components;

  constructor(private recipeGeneratorService: RecipeGeneratorService) {
  }

  ngOnInit(): void {
    this.recipeGeneratorService.isRecipeEdited = false;

    this.recipeGeneratorService.getRecipeById()
      .subscribe(res => {
        this.recipe = res.recipe;
        console.log(res.recipe);
      }, err => {
        console.log(err);
      });
  }

  test() {
    console.log(this.recipe);
  }

}
