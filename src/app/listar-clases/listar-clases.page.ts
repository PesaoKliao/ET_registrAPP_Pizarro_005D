import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ClasesService } from '../services/clases.service';
import { GetDatoService } from '../services/get-dato.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-clases',
  templateUrl: './listar-clases.page.html',
  styleUrls: ['./listar-clases.page.scss'],
})
export class ListarClasesPage implements OnInit {

  clases = []
  constructor(private ClasesService: ClasesService,private loadCtrl: LoadingController, private menuController:MenuController) { }

  ngOnInit() {
    this.loadClases()
  }

  async loadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    this.ClasesService.listarClases().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.clases = JSON.parse(listString)
        event?.target.complete();
        console.log(this.clases);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
}

mostrarMenu(){
  this.menuController.open('first');
}

}
