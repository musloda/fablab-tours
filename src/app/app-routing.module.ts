import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
