import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './pages/dashboard.page';

@NgModule({
    declarations: [DashboardPage],
    imports: [SharedModule, DashboardRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
