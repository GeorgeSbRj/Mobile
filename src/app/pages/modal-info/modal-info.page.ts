import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { NOMEM } from 'dns';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nome;
  @Input() pais;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

sairSemArgumentos() {
   this.modalCtrl.dismiss();
  }

sairComArgumentos() {
 this.modalCtrl.dismiss({
  nome: 'George',
  pais: 'Brasil'
 });
}

}
