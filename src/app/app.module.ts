import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularOpenlayersModule } from 'ngx-openlayers';


import { AppComponent } from './app.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalisationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
