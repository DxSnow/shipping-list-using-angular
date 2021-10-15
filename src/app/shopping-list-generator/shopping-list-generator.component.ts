import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-generator',
  templateUrl: './shopping-list-generator.component.html',
  styleUrls: ['./shopping-list-generator.component.css']
})
export class ShoppingListGeneratorComponent implements OnInit {
  item:string = '';
  items:string[] = [];
  onClick(){
    this.items.push(this.item);
    this.item='';
  };

  constructor() { }

  ngOnInit(): void {
  }

}
