import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent {

  resultadoPeticion:any;
  api_url:string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  get() {
    this.http.get(this.api_url + '/posts').subscribe(data => { this.resultadoPeticion = data; });
  }

  post() {
    this.http.post(this.api_url + '/posts',
      {
        title: 'Prevision Martes.',
        body: 'Parcialmente soleado.',
        userId: 1
      })
      .subscribe(data => { this.resultadoPeticion = data; });
  }

  get_param(){
    const params = new HttpParams().set('userId', '9');
    this.http.get(this.api_url + '/posts',
    {params}).subscribe(data => { this.resultadoPeticion = data; });
  }

  put() {
    this.http.put(this.api_url + '/posts/1000',
      {
        title: 'Prevision Lunes.',
        body: 'Lluvias.',
        userId: 2
      })
      .subscribe(
        data => { this.resultadoPeticion = data; },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Error cliente o red:', err.error.message);
          } else {
            console.log('Error servidor remoto. ${err.status} # ${err.message}' );
          }
        }        
      );
  }

}
