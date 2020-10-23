import { Component, OnInit } from '@angular/core';
import {RecipeGeneratorService} from '../services/recipe-generator.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  title: string;
  text: string;
  id;
  currentPos;

  constructor(public recipeGS: RecipeGeneratorService) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Section");
    console.log("Final id: " + this.id);
    console.log("Current Pos: " + this.currentPos);
  }

}
