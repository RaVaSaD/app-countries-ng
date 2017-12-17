import { Component, OnInit } from '@angular/core';
import { ListadoService} from './listado.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ListadoService]
})
export class ListadoComponent implements OnInit {

  title: string;
  paises: Array<string> = [];
  resultsPaises$: Observable<string>;

  constructor(private _listadoService: ListadoService) { }

  ngOnInit() {

    this.paises = this._listadoService.getPaisesArray();
    this.title = this._listadoService.getServiceName();
    this.resultsPaises$ = this._listadoService.getPaisesAPI();
  }

}
