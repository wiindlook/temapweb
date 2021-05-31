import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../_services/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model:any={};
  constructor(private http:HttpClient,private dataService:DataServiceService) { }

  ngOnInit():void {

  }
  register() {
    this.dataService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();

    }, error => {
      console.log(error);
    })
  }

      cancel() {
        this.cancelRegister.emit(false);
      }
    }




