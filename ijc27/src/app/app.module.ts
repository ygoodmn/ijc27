import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { ResponsibilitesComponent } from './responsibilites/responsibilites.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { SupportComponent } from './support/support.component';
import { JugglerListComponent } from './juggler-list/juggler-list.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import {BarsComponent} from "./food-and-beverage/bars/bars.component";
import {RestaurantComponent} from "./food-and-beverage/restaurant/restaurant.component";
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { WeddingsComponent } from './celebrations/weddings/weddings.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,

    AccommodationComponent,
    RoomsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    FoodAndBeverageComponent,
    BarsComponent,
    RestaurantComponent,
    CelebrationsComponent,
    WeddingsComponent,

    //Auth and Route
    AuthComponent,
    SigninComponent,
    SignupComponent,
    BathroomComponent,

    //IJC27
    SupportComponent,
    JugglerListComponent,
    VolunteersComponent,
    ResponsibilitesComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
