import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { RegisterComponent } from './component/register/register.component';


const router: Routes =[
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'dashbord',component:DashbordComponent},
  {path: 'register',component:RegisterComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
