import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private httpClient: HttpClient){}

  CallServer(data: {content: string}){  
      return this.httpClient.post('http://localhost:54528/api/WebApi/SendContactData', data);
  }  
}
