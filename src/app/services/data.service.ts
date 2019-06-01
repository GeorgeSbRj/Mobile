import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { threadId } from 'worker_threads';
import { Componente } from '../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json');
  }

}
