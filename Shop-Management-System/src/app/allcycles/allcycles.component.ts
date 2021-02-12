import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allcycles',
  templateUrl: './allcycles.component.html',
  styleUrls: ['./allcycles.component.css']
})
export class AllcyclesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:53987/api/soldcycle");
    resp.subscribe((data)=>console.log(data));
  }

}
