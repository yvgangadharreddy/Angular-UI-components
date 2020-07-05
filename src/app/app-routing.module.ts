import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareButtonComponent} from './share-button/share-button.component';
import {LandingComponent} from './landing/landing.component';
import {RatingComponent} from './rating/rating.component';
import {DragMenuComponent} from './drag-menu/drag-menu.component';
import {DayNightToggleComponent} from './day-night-toggle/day-night-toggle.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'social-share', component: ShareButtonComponent, data: {name: "Social share buttons"}},
  {path: 'rating', component: RatingComponent, data: {name: "Ratings screen"}},
  {path: 'drag-menu', component: DragMenuComponent, data: {name: "Drag Menu"}},
  {path: 'day-night-toggle', component: DayNightToggleComponent, data: {name: "Day and Night toggle Button"}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
