import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: '<h1>Oi, eu sou o goku</h1>',
  styles: ['h1 {color: tomato}']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
