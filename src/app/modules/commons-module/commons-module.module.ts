import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModuleRoutingModule } from './commons-module-routing.module';
import { CommonsLayoutComponent } from './commons-layout/commons-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


@NgModule({
  declarations: [CommonsLayoutComponent, HomeLayoutComponent],
  imports: [
    CommonModule,
    CommonsModuleRoutingModule
  ]
})
export class CommonsModuleModule { }
