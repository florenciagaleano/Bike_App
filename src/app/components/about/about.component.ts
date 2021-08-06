import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'gmaps';
  position ={
    lat:-34.72472846347764, 
    lng:-58.35826971095577
  };

  label={
    color:'red',
    text:'marcador'
  }

}
