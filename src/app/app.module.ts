import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ChatComponent } from './chat/chat.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinanceiroComponent,
    NotificacoesComponent,
    DisciplinasComponent,
    ChatComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
 



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
