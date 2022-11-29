import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.Interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Gustavo',
      edad:20,
      correo: 'gustavo@correo.com'
    },
    {
      nombre:'Juan Carlos',
      edad: 22,
      correo: 'charly@correo.com'
    },
    {
      nombre: 'Rosa',
      edad: 24,
      correo: 'rosa@correo.com'
    }
  ]

  constructor(private http:HttpClient) { }

  get alumnos():AlumnosUtl[]{
    return[...this._alumnosUtl];
    //separa los elementos del arreglo en elementos individuales
  }

  public getAlumnos():Observable<AlumnosUtl[]>{
    return this.http.get<AlumnosUtl[]>('https://localhost:7107/api/Gestores');
  }

  agregarNuevoAlumno(datos:AlumnosUtl){
    this._alumnosUtl.push(datos);
  }
}
