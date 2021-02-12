import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solddata } from '../addcycles/models/solddata.model';
import { SoldcycleService } from '../addcycles/service/soldcycle.service';

export class Soldcycles{
  constructor(
    public Id: string,  
    public Brand: string,
    public Cyclename: string,
    public Date: string,
    public Price: string,
    public Type: string
  ){

  }
}

@Component({
  selector: 'app-soldcycles',
  templateUrl: './soldcycles.component.html',
  styleUrls: ['./soldcycles.component.css']
})
export class SoldcyclesComponent implements OnInit {

  soldcycles: Soldcycles[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    this.http.get<any>('http://localhost:53987/api/soldcycle').subscribe(
    Response=>{
      console.log(Response);
      this.soldcycles = Response;
    }
    )
  }
  
  printPage() {
    window.print();
  }

}

