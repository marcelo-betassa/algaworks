import { PanelModule } from "primeng/panel";
import {ChartModule} from "primeng/chart";
import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartModule,
    HttpClientModule,
    PanelModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [
    DecimalPipe
  ]
})
export class DashboardModule { }
