import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {

  items: string[] = ["Chicken Biryani","Chicken FriedRice","Chicken Noodles","Chicken Nuggets","Egg FriedRice","Egg Biryani","Egg Noodles"];
  constructor() { }

  ngOnInit() {
  }

}
