import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Supermarket'; // Title of the webpage
  login:string="not success"; // variable login will be used for after checking validation

  ngOnInit() {
    this.checkValidation(this.login) // Loading the checkValidation method on compiling
  }

  // This method sets the returned string to the login variable declared globally.
  checkValidation(result:string){
    this.login=result;
  }
}
