import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { User } from './User';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usersList=[];
  constructor(private api: ApiService, private appComponent: AppComponent) { }

  // This method sends success if the condition is true
  validate(userCredentials: User){
    if(userCredentials.id==8 && userCredentials.password=="group8"){
      this.appComponent.checkValidation("success");
    }
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.api.getUsers().subscribe(data => this.usersList = data);
  }

}
