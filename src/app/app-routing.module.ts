import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import { TopictableComponent } from './topictable/topictable.component';
import {IntroComponent} from './intro/intro.component';


const routes: Routes = [
  {path:'', redirectTo:'/introduction',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'topics',component:TopictableComponent},
  {path:'introduction',component:IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
