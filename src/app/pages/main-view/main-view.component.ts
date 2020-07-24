import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Board } from '../../models/board.model'

@Component({
  selector: 'edm-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = {
    name: 'My task Board',
    columns: [
      { 
        name: 'To do',
        tasks: [
          'Get to work',
          'Pick up groceries',
          'Go home',
          'Fall asleep'
        ]
      },
      { 
        name: 'Error',
        tasks: [
          'Get to work',
          'Pick up groceries',
          'Go home',
          'Fall asleep'
        ]
      },
      { 
        name: 'test',
        tasks: [
          'Get to work',
          'Pick up groceries',
          'Go home',
          'Fall asleep'
        ]
      },
      { 
        name: 'Done',
        tasks: [
          'Get to work',
          'Pick up groceries',
          'Go home',
          'Fall asleep'
        ]
      }
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

}
