import { Injectable } from '@angular/core';
import { BillInfo } from './ResponseData';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebcamImage } from 'ngx-webcam';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = '192.168.11.3:3000/api/bills/'

  private price = 1;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  generateBill(image: WebcamImage): Observable<BillInfo> {
    return this.http.post<BillInfo>(this.url, { image: image.imageAsBase64 }, this.httpOptions)
  }
  generateFakeBill(image: WebcamImage): Observable<BillInfo> {
    this.price++;
    return of(
      {
        id: 1,
        createdAt: 'aa',
        items: [
          {
            id: 1,
            name: 'aa',
            price: this.price,
            quantity: 10
          }
        ],
        totalPrice: 1,
      }
    );
  }
}
