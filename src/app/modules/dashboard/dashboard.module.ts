import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardTableComponent } from './components/card-table/card-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    CardTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
