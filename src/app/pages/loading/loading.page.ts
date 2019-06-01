import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor( private loadingCrtl: LoadingController) { }

  ngOnInit() {

    this.presentLoading( 'espere!!!');
    setTimeout(() => {
      this.loadingCrtl.dismiss();
    }, 1500 );
  }

  async presentLoading( message: string) {
    const loading = await this.loadingCrtl.create({
      message,
      // duration: 2000
    });
    await loading.present();
  }
}
