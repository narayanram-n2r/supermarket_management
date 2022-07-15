import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Supermarket';
  login:string="not success";

  ngOnInit() {
    this.checkValidation(this.login)
  }

  checkValidation(result:string){
    this.login=result;
  }
}
