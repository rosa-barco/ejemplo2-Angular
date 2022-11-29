import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.Interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Input() alumnosUtl:AlumnosUtl[]=[]; //<--- De hijo a padre
  //@Output() onNuevoAlumno: EventEmitter<AlumnosUtl> = new EventEmitter(); //<--- De padre a hijo
  
  @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad: 0,
    correo: ""
  }

  constructor(private alumnosutl:UtlService){}

  agregar(){
    //console.log(this.regAlumno);

    //this.alumnosUtl.push(this.regAlumno); //<--- con Input

    //this.onNuevoAlumno.emit(this.regAlumno); //<--- con Output

    this.alumnosutl.agregarNuevoAlumno(this.regAlumno);
    
    this.regAlumno = {
      nombre: '',
      edad: 0,
      correo: ''
    }
  }

}
