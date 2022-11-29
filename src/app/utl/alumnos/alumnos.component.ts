import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.Interface';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  dataSource:any=[];

  //@Input() alumnosUtl:AlumnosUtl[] = [];

  get alumnos(){
    return this.alumnosUtl.alumnos;
  }

  constructor(private alumnosUtl: UtlService){
  }

  ngOnInit(): void {
    this.alumnosUtl.getAlumnos().subscribe(response=>{
      this.dataSource=response;
      console.log(this.dataSource);
    }, error=>console.log(error));
  }

  

}
