import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  items: string[] = ["Paneer Biryani", "Veg Pulav","Aloo"];
  constructor() { }

  ngOnInit() {
  }

}
