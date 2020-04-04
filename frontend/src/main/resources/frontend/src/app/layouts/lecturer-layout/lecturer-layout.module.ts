import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../components/sample/lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';



import { LecturerLayoutRoutes } from './lecturer-layout.routing';
import { HomeComponent } from '../../components/sample/home/home.component';
import { UserComponent } from '../../components/sample/user/user.component';
import { TablesComponent } from '../../components/sample/tables/tables.component';
import { TypographyComponent } from '../../components/sample/typography/typography.component';
import { IconsComponent } from '../../components/sample/icons/icons.component';
import { MapsComponent } from '../../components/sample/maps/maps.component';
import { NotificationsComponent } from '../../components/sample/notifications/notifications.component';
import { UpgradeComponent } from '../../components/sample/upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LecturerLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})
export class LecturerLayoutModule { }
