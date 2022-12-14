import { Component, OnInit } from '@angular/core';
import { GetDatoService } from '../../services/get-dato.service';

@Component({
  selector: 'app-qr-generado',
  templateUrl: './qr-generado.page.html',
  styleUrls: ['./qr-generado.page.scss'],
})
export class QrGeneradoPage implements OnInit {

  public getNumeroClase() {
    return GetDatoService.numeroClase;
  };

  public getCodigoClase() {
    return GetDatoService.codigo;
  };

  public getSeccion() {
    return GetDatoService.seccion;
  };

  public getFecha() {
    return GetDatoService.fecha;
  };

  constructor() { }

  ngOnInit() {
  }

}
