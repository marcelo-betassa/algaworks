import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioLancamentoComponent } from './relatorio-lancamento/relatorio-lancamento.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RelatorioLancamentoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    RelatorioRoutingModule
  ]
})
export class RelatorioModule { }
