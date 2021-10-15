import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-generator',
  templateUrl: './shopping-list-generator.component.html',
  styleUrls: ['./shopping-list-generator.component.css']
})
export class ShoppingListGeneratorComponent implements OnInit {
//string version. works great.
  // item:string = '';
  // items:string[] = [];
  // onClick(){
  //   this.items.push(this.item);
  //   this.item='';
  // };
// object version:
  item:string = '';
  items:any[] = [];//it don't say any[], the default [] is never type.
  onClick(){
    this.items.push({"name":this.item});
    this.item='';
  };


  constructor() {

  }

  ngOnInit(): void {
  }

}
