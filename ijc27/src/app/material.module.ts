import {NgModule} from "@angular/core";
import {
  MatBadgeModule,
 MatButtonModule,
 MatToolbarModule,
 MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule

} from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports:[
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
})

export class MaterialModule{}
