import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { LocalisationComponent } from './localisation/localisation.component';

import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularOpenlayersModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
