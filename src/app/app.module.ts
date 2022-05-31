import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnsComponent } from './ans/ans.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from "@angular/forms"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { environment } from 'src/environments/environment.prod';
import { HomesComponent } from './home/homes/homes.component';
import { HomesListComponent } from './home/homes-list/homes-list.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnswerComponent } from './ans/answer/answer.component';
import { AnswerListComponent } from './ans/answer-list/answer-list.component';
import { PointComponent } from './point/point.component';
import { CompareComponent } from './compare/compare.component';
import { FirstComponent } from './first/first.component';
import { QnComponent } from './qn/qn.component';
import { QnsComponent } from './qn/qns/qns.component';
import { QnsListComponent } from './qn/qns-list/qns-list.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { ManagesComponent } from './manage/manages/manages.component';
import { ManagesListComponent } from './manage/manages-list/manages-list.component';
import { ViewComponent } from './view/view.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { ComparesComponent } from './compare/compares/compares.component';
import { ComparesListComponent } from './compare/compares-list/compares-list.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AnsComponent,
    HomesComponent,
    HomesListComponent,
    HomeComponent,
    AnswerComponent,
    AnswerListComponent,
    PointComponent,
    CompareComponent,
    FirstComponent,
    QnComponent,
    QnsComponent,
    QnsListComponent,
    LoginComponent,
    ManageComponent,
    ManagesComponent,
    ManagesListComponent,
    ViewComponent,
    HistoryComponent,
    RegisterComponent,
    ComparesComponent,
    ComparesListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
