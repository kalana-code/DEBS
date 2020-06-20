import { Routes } from '@angular/router';

import { HomeComponent } from '../../components/sample/home/home.component';
import { SettingComponent } from '../../components/sample/setting/setting.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'setting',      component: SettingComponent },
    
];
