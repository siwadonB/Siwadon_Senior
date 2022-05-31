import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnsComponent } from './ans/ans.component';
import { PointComponent } from './point/point.component';
import { CompareComponent } from './compare/compare.component';
import { FirstComponent } from './first/first.component';
import { QnComponent } from './qn/qn.component';
import { LoginComponent } from './login/login.component'
import { ManageComponent } from './manage/manage.component'
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: 'regis',
    component: RegisterComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'ans',
    component:AnsComponent
  },
  {
    path: 'point',
    component:PointComponent
  },
  {
    path: 'com',
    component:CompareComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'qn',
    component:QnComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ HomeComponent,AnsComponent,PointComponent,CompareComponent,FirstComponent,QnComponent,LoginComponent,ManageComponent,HistoryComponent,RegisterComponent ]
