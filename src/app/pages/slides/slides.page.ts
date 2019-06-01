import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {


  slides: {img: string, titulo: string, desc: string} [] = [
    {
      img: 'assets/slides/nomearquivo.svg',
      titulo: 'Compartilhe fotos',
      desc: 'Olhe e compartilhe fotos de todo o mundo',
    },
    {
      img: 'assets/slides/nomearquivo.svg',
      titulo: 'Escute musica',
      desc: 'Todas suas musicas favoritas estão aqui',
    },
    {
      img: 'assets/slides/nomearquivo.svg',
      titulo: 'Nunca viu nada igual',
      desc: 'O melhor calendario do mundo',
    },
    {
      img: 'assets/slides/nomearquivo.svg',
      titulo: 'Sua residencia',
      desc: 'Sempre saberemos onde esta!',
    }
  ];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }


  onClick() {
    this.navCtrl.navigateBack('/');
  }
}


