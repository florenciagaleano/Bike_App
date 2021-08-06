import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  color:string;
  marca:string;
  precio:number;
  rodado:number;
  //hardcodeo datos para mostrarlos en la tabla
  constructor() {
    this.color = 'Rosa';
    this.marca = 'Top Mega';
    this.precio = 27500;
    this.rodado = 25;
  }

  ngOnInit(): void {
    
  }

}
