import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Lauren';
  newName: string;
  avatar: string = 'assets/images/lauren.jpg';

  constructor() { }

  ngOnInit() {
  }
  
  makeMeHero(){
    this.name = this. newName;
    this.avatar = 'assets/images/moana.jpg'
  }

}
