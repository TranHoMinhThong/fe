import { Component, OnInit } from '@angular/core';
import { BillComponent } from './bill/bill.component';
import { CameraComponent } from './camera/camera.component';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  billData = [
    {
      id: 1,
      name: 'a',
      price: 1,
      quantity: 1
    },
    {
      id: 1,
      name: 'a',
      price: 1,
      quantity: 1
    },
    {
      id: 1,
      name: 'a',
      price: 1,
      quantity: 1
    },
    {
      id: 1,
      name: 'a',
      price: 1,
      quantity: 1
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.billData[0].price += 1;
    console.log(this.billData[0])
  }

  onGenerateBill(e) {
    this.billData = e
    console.log(e)
  }

}
