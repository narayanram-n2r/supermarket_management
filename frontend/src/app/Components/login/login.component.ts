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
    if(userCredentials.id==this.usersList
      .find(x => x.id == userCredentials.id).id
        && userCredentials.password==this.usersList
      .find(x => x.id == userCredentials.id).password){
      this.appComponent.checkValidation("success");
    }
    else{window.alert("Invalid credentials!!")}
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.api.getUsers().subscribe(data => {
      this.usersList = data;
      this.storeUsers(data);
    });
  }

  storeUsers(arr:User[]){
    this.usersList=arr;
  }

}
