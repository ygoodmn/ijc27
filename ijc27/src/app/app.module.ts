import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { ResponsibilitesComponent } from './responsibilites/responsibilites.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { SupportComponent } from './support/support.component';
import { JugglerListComponent } from './juggler-list/juggler-list.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    ResponsibilitesComponent,
    BathroomComponent,
    SupportComponent,
    JugglerListComponent,
    VolunteersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
