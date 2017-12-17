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
  paises: any;
  resultsPaises: Array<any>;
  private errorMessage: any = '';

  constructor(private _listadoService: ListadoService) { }

  ngOnInit() {

    this.paises = this._listadoService.getPaisesArray();
    this.title = this._listadoService.getServiceName();

    this._listadoService.getPaisesAPI().subscribe(
      data => {
        this.resultsPaises = data.body;
        console.log(data);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(error);
      }
    );

  }

}
