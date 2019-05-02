import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccommodationComponent} from "./accommodation/accommodation.component";
import {CelebrationsComponent} from "./celebrations/celebrations.component";
import {FoodAndBeverageComponent} from "./food-and-beverage/food-and-beverage.component";
import {JugglerListComponent} from "./juggler-list/juggler-list.component";
import {ResponsibilitesComponent} from "./responsibilites/responsibilites.component";
import {SupportComponent} from "./support/support.component";
import {LifestyleComponent} from "./lifestyle/lifestyle.component";
import {WeddingsComponent} from "./celebrations/weddings/weddings.component";
import {AuthComponent} from "./auth/auth.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'accomodation', component: AccommodationComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'food-and-beverage', component: FoodAndBeverageComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'weddings', component: WeddingsComponent },
  //TODO create Offers
  //{path: 'offers', component: CelebrationsComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  //
  // //IJC27 Site
  {path: 'juggler-list', component: JugglerListComponent},
  {path: 'responsibilities', component: ResponsibilitesComponent},
  {path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
