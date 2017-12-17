import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public items: MenuItem[];
  public activeItem: MenuItem;

  title = 'Paises';

  ngOnInit() {

    this.items = [
      {label: 'Listado', icon: 'fa-list', routerLink: ['/']},
      {label: 'Calendario', icon: 'fa-calendar', routerLink: ['/']},
      {label: 'Documentacion', icon: 'fa-book', routerLink: ['/']},
      {label: 'Soporte', icon: 'fa-support', routerLink: ['/']},
      {label: 'Social', icon: 'fa-twitter', routerLink: ['/']}
    ];

    this.activeItem = this.items[0];

  }
}
