import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class akash {

  constructor(private http: HttpClient) { }

 getData(){
  return this.http.get("https://api.zippopotam.us/us/33162");
 }

 getSecondData(){
  return this.http.get("https://api.zippopotam.us/us/54517");
 }
 
 getImage(){
  return this.http.get("https://dog.ceo/api/breeds/image/random");

}

}