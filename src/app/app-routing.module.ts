import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ChatComponent } from './chat/chat.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceiroComponent } from './financeiro/financeiro.component';

const routes: Routes = [

  {path: 'financeiro', component:FinanceiroComponent},
  {path: 'home', component:HomeComponent},
  {path:'notificacoes',component: NotificacoesComponent},
  {path:'chat', component: ChatComponent},
  {path:'disciplinas', component: DisciplinasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
