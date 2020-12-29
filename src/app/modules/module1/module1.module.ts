import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { TransactionSubmitComponent } from './transaction-submit/transaction-submit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [TransactionSubmitComponent],
  imports: [
    CommonModule,
    Module1RoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzSwitchModule,
    NzButtonModule,    
    NzIconModule
  ]
})
export class Module1Module { }
