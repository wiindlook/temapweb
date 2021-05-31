import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  register(model: any) {
    return this.http.post('https://localhost:44367/' + 'account', model);
}
deleteUser(id:number)
  {
    this.http.delete('https://localhost:44367/users'+'delete-user/'+id)
}
}
