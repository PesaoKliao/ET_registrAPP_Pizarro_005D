import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClases } from '../interfaces/iclases';
import { environment } from 'src/environments/environment';
import { IClase } from '../interfaces/iclase';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }

  listarClases():Observable<IClases>{
    return this.http.get<IClases>(`${environment.apiURL}/clases`)
  }

  crearClase(newClase: IClase):Observable<IClase>{
    return this.http.post<IClase>(`${environment.apiURL}/clases`,newClase)
  }
}
