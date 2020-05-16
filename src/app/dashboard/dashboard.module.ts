import { PanelModule } from "primeng/panel";
import {ChartModule} from "primeng/chart";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartModule,
    PanelModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
