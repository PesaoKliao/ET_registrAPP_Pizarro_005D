import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDatoService {
  public static numeroClase: string;
  public static codigo: string;
  public static seccion: string;
  public static fecha: string;
  public static correo: string;
  public static nombre: string;
  public static email: string;
  constructor() { }
}
