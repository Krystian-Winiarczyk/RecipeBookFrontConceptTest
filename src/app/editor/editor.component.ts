import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
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
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
