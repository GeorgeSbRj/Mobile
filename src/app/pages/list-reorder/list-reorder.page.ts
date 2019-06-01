import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personagens = ['Aquaman', 'Superman', 'Batman', 'Flash', 'George'];

  reorder( event ) {
     console.log( event );

     const itemMover = this.personagens.splice( event.detail.from, 1)[0];
     this.personagens.splice( event.detail.to, 0, itemMover);
     event.detail.complete();
  }
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log (this.personagens);
  }

}
