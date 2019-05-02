import {NgModule} from "@angular/core";
import {
  MatBadgeModule,
 MatButtonModule,
 MatToolbarModule,
 MatSidenavModule,
  MatIconModule,
  MatListModule

} from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
})

export class MaterialModule{}
