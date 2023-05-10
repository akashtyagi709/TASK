import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { akash } from './akash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task';
  Firsttask=true;
  secondDiv=false;
  country:any;
  postcode:any;
  DATA:any=[];
 placeArray:any=[];
 countryabbreviation:any;
  country2: any;
  countryabbreviation2: any;
  postcode2: any;
  placeArray2:any=[];
  image_U_R_L:any;
  constructor(private http :akash){ }
  ngOnInit(): void{
  this.http.getData().subscribe((res:any)=>{
     this.country=res.country;
     this.countryabbreviation=res['country abbreviation'];
     this.postcode=res['post code'];
     this.placeArray=res.places;
    }) 

    this.http.getSecondData().subscribe((res2:any)=>{
      this.country2=res2.country;
      this.countryabbreviation2=res2['country abbreviation'];
      this.postcode2=res2['post code'];
      this.placeArray2=res2.places;
    })

    this.http.getImage().subscribe((res:any)=>{
      this.image_U_R_L=res.message;
      
    })

 }

 onImageChnage(){
  this.http.getImage().subscribe((res:any)=>{
    this.image_U_R_L=res.message;
  })
 }
}


  

