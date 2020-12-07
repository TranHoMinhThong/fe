import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { BillInfo, Item } from '../../ResponseData';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Output() generateBill = new EventEmitter<any>()
  price=0

  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  
  public constructor(private apiService: ApiServiceService){}

  ngOnInit() {
    this.triggerSnapshot();
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
   /*  this.apiService.generateBill(webcamImage).subscribe(
      res => {
        this.generateBill.emit(res)
      }
    ) */
    this.apiService.generateBill(webcamImage).subscribe(
      res => {
        this.generateBill.emit(res)
      }
    )
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
