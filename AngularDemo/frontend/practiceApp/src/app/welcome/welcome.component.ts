import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../service/data/message-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:MessageDataService) { }
  

  ngOnInit(): void {
  
  
  }

  ButtonClick(){
      this.service.PrintMessageBean()
  }
  
}
