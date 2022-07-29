import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEduComponent } from './components/education/edit-edu.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExpComponent } from './components/experience/edit-exp.component';
import { NewExpComponent } from './components/experience/new-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditprojectComponent } from './components/projects/editproject.component';
import { NewprojectComponent } from './components/projects/newproject.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newexp', component: NewExpComponent},
  {path:'editexp/:id', component: EditExpComponent},
  {path:'educacion', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEduComponent},
  {path:'newproj', component: NewprojectComponent},
  {path:'editproj/:id', component: EditprojectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
