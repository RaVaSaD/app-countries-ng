import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListadoService {

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

  getPaisesAPI() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });
  }

}
