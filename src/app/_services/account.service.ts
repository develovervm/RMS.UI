import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/login';

import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl="https://localhost:7145/api/";

  private currentUserSource=new BehaviorSubject<User|null>(null);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(this.baseUrl+'Account/Register',user);
  }

  login(login:Login){
    return this.http.post(this.baseUrl+'Account/Login',login);
  }
  
  getUserById(id:number){
    console.log(id);
    return this.http.get<User>(this.baseUrl+'Account/GetUserById/?id='+id).pipe(
      map((response:User)=>{
        const user=response;
        if(user){
          console.log(user);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  
}
