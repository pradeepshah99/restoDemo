import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyrestroService {

  constructor( private http: HttpClient) { }

  loginUser(data){
    return this.http.post("http://localhost:5000/api/login",data);
  }

  setToken(token){
    localStorage.setItem('token',token);
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if(userPayload)
    return userPayload.exp > Date.now()/1000;
    else
    return false;
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
