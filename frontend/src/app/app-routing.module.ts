import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ClothingComponent } from './Components/Products/clothing/clothing.component';
import { ElectronicsComponent } from './Components/Products/electronics/electronics.component';
import { FurnitureComponent } from './Components/Products/furniture/furniture.component'; 
import { GroceryComponent } from './Components/Products/grocery/grocery.component';
import { CartComponent } from './Components/cart/cart.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'homepage', component: HomepageComponent},
  {path:'clothings', component: ClothingComponent},
  {path:'electronics', component: ElectronicsComponent},
  {path:'furniture', component: FurnitureComponent},
  {path:'grocery', component: GroceryComponent},
  {path:'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
