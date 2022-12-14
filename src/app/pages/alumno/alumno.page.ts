import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { GetDatoService} from '../../services/get-dato.service';
import { ToastController } from '@ionic/angular';
import {ServiceLoginService} from '../../services/service-login.service';
import { WeatherService } from '../../services/weather.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { IClase } from 'src/app/interfaces/iclase';
import { ClasesService } from 'src/app/services/clases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  code:any;
  temperatura;
  weather;

  newClase: IClase = {
    codigo: ""
  }

  constructor(private alertController: AlertController,
    private menuController:MenuController,
    private serviceLoginService: ServiceLoginService,
    private toastController: ToastController,
    private weatherService: WeatherService,
    private barcodeScanner: BarcodeScanner,
    private ClaseService: ClasesService,
    private router: Router) { }

  ngOnInit() {
    
    this.weatherService.getWeather('santiago', 'cl')
    .subscribe(
      res=>{
        console.log(res);
        this.weather=res;
        this.temperatura=this.weather.main.temp;
      }

    )
  }

  crearClase(){
    this.ClaseService.crearClase(this.newClase).subscribe();
    this.router.navigateByUrl("/listar-clases")
  }

  public getName() {
    return GetDatoService.nombre;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  escanear(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
      this.ClaseService.crearClase(this.newClase).subscribe();
      this.router.navigateByUrl("/listar-clases")
     }).catch(err => {
         console.log('Error', err);
     });
  }

 /* async escanearqr(){
    const alert = await this.alertController.create({
    message: '<img src="assets/escanearqr.png" alt="g-maps" style="border-radius: 2px">',
    buttons: ['Confirmar']
});
await alert.present();
}*/
}