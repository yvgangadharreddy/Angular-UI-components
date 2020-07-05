import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {DragMenuComponent} from './drag-menu/drag-menu.component';
import {RatingComponent} from './rating/rating.component';
import {ShareButtonComponent} from './share-button/share-button.component';
import { LandingComponent } from './landing/landing.component';
import { DayNightToggleComponent } from './day-night-toggle/day-night-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DragMenuComponent,
    RatingComponent,
    ShareButtonComponent,
    LandingComponent,
    DayNightToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
