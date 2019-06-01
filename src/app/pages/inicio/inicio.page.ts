import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/intefaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [];

  // usando o construtor eo controlador menuCtrl para fazer o menu hamburguer //
  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }


  // aqui faz o menu icone//
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
