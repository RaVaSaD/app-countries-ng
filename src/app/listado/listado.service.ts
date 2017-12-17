import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListadoService {
  private data: Object;
  private errorMessage: any = '';

  constructor(private http: HttpClient) { }

  paises = [
    'España', 'Portugal', 'Francia', 'Holanda', 'Italia', 'Argentina', 'Brasil'
  ];

  getServiceName() {
    return 'Cargo el servicio Listado Service';
  }

  getPaisesArray() {
    return this.paises;
  }

  getPaisesAPI(): Observable<any> {
    return this.http.get<any>('https://restcountries.eu/rest/v2/lang/es', {observe: 'response'});
  }

}
