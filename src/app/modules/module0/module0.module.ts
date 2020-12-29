import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module0RoutingModule } from './module0-routing.module';
import { HomeComponent } from './home/home.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    Module0RoutingModule,
    NzIconModule
  ]
})
export class Module0Module { }
