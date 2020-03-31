import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(private http:HttpClient) { }

  PrintMessageBean(){
    console.log(this.http.get("http://localhost:8080/hello-worldB"))
  }
}
