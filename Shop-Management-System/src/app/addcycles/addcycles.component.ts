import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Solddata } from './models/solddata.model';
import { SoldcycleService } from './service/soldcycle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcycles',
  templateUrl: './addcycles.component.html',
  styleUrls: ['./addcycles.component.css']
})
export class AddcyclesComponent implements OnInit {

  alert: boolean=false
  soldForm: any;

  constructor(private router: Router, private soldcycleService: SoldcycleService, private http: HttpClient) { }

  ngOnInit(): void {
   
  }

  getSoldValues(form: NgForm){
     console.warn(form);
    
    this.http.post('http://localhost:53987/api/soldcycle',form)
    .subscribe((result)=>{
      console.warn('result=> ',result)
    })
    this.alert=true
  }

  CloseAlert(){
    this.alert = false
  }
}
