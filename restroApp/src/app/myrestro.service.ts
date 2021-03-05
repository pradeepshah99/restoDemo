import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyrestroService {

  constructor( private http: HttpClient) { }

  loginUser(data){
    return this.http.post("http://localhost:5000/api/login",data);
  }

  getUserProfile(){
    return this.http.get("http://localhost:5000/api/profile");
  }

  userRegister(body:any):Observable<any>{
    return this.http.post('http://localhost:5000/api/register' ,body)
  }

  addProduct(body:any): Observable<any>{
    return this.http.post('http://localhost:5000/api/createProduct', body)
  }

  getProduct(): Observable<any>{
    return this.http.get('http://localhost:5000/api/getAllProducts')
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

  updateUser(id,data){
    return this.http.put("http://localhost:5000/api/updateProfile/"+id ,data);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
  deleteToken(){
    localStorage.removeItem('token')
  }
  
}
