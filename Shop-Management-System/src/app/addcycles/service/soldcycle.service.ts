import { Injectable } from '@angular/core';
import { Solddata } from '../models/solddata.model';

@Injectable({
  providedIn: 'root'
})
export class SoldcycleService {

  solddata : Solddata[] = [
    {
      Brand: "atlas",
      Cycle_Name: "MyCycleName",
      Date: "2021-01-18",
      Price: 50000,
      Type: "mans"
    }
  ];
  
  constructor() { }

  onGet(){
    return this.solddata;
  }

  onAdd(solddata:Solddata){
    this.solddata.push(solddata);
  }
}
