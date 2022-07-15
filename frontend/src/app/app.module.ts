import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingComponent } from './Components/Products/clothing/clothing.component';
import { ElectronicsComponent } from './Components/Products/electronics/electronics.component';
import { GroceryComponent } from './Components/Products/grocery/grocery.component';
import { FurnitureComponent } from './Components/Products/furniture/furniture.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothingComponent,
    ElectronicsComponent,
    GroceryComponent,
    FurnitureComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
