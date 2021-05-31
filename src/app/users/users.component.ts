import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { DataServiceService } from '../_services/data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users:any;
user:User;
collection:any=[];
  constructor(private http:HttpClient,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:44367/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  deleteUser(id:number) {
    this.http.delete('https://localhost:44367/users/'+id).subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  updateUser(id:number)
  {
    this.http.put<User>('https://localhost:44367/users/'+id,this.user).subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })

}
}
