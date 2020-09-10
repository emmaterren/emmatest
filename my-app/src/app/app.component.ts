import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  squares = [
    {id: 0, selected: true},
    {id: 1, selected: false},
    {id: 2, selected: false},
    {id: 3, selected: false},
  ];

  lastSelected = null;

  constructor() {  }

  selectSquare(selected) {

    this.squares.forEach((square, index) => {
      if (square.selected) {
        square.selected = false;
        this.lastSelected = index;
      }
    });

     this.squares[selected].selected = true;
  }
}
