import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {



  titulo: string;

  constructor(public alertCtrl: AlertController) { }


  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Aqui fica o  Input',
      subHeader: 'Informe seu nome :',
      inputs: [
        {
        name: 'txtName',
        type: 'text',
        placeholder: 'Nome'
        }
      ],
       buttons: [
         {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar Cancelamento');
          }
         }, {
           text: 'ok',
           handler: (data) => {
             console.log('Confirma ok', data);
             this.titulo = data.txtName;
           }
         }
      ]
    });
    await input.present();
  }


  async presentAlert() {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
                   }
      },
        {
           text: 'OK',
           handler: (blah) => {
             console.log('Botao ok');
           }
              }
      ]
    });
    await alert.present();
  }


}
