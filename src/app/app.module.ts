import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
