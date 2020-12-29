import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { TransactionsDisplayComponent } from './transactions-display/transactions-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [TransactionsDisplayComponent],
  imports: [
    CommonModule,
    Module2RoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule
  ]
})
export class Module2Module { }
