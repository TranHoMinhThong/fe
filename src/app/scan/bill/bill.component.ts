import { Component, OnInit, Input } from '@angular/core';
import { BillInfo } from '../../ResponseData';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  colDefs = [
    {
      headerName: 'Id', field: 'id', sortable: true, filter: true, width: 70
    },
    {
      headerName: 'Name', field: 'name', sortable: true, filter: true, width: 100
    },
    {
      headerName: 'Price', field: 'price', sortable: true, filter: true, width: 100
    },
    {
      headerName: 'Quantity', field: 'quantity', sortable: true, filter: true, width: 130
    }
  ]

  @Input() billData=null
  
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.billData)
  }

}
