import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.Interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  regAlumno:AlumnosUtl={
    nombre: 'Pablo',
    edad: 24
  }
  
}
