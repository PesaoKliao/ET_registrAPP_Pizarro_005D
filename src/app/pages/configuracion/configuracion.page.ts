import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
