import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interface/user';

const BASE_URL = 'https://dummyjson.com/users/';
const FIELDS = '?select=firstName,lastName,email,phone,username,password,phone';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpClient: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(BASE_URL + id+FIELDS);
  }
}
