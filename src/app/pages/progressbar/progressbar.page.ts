import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {

  porcentagem = 0.05;

  constructor() { }

  ngOnInit() {
  }
trocaRapida( event ) {
console.log(event);

this.porcentagem = event.detail.value / 100 ;
}
}
