import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routes} from './routes';
import { CommonsLayoutComponent } from '../commons-module/commons-layout/commons-layout.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from '../commons-module/home-layout/home-layout.component';

const config: Routes = [
  {
    path: routes.index.route,
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(config)],
  exports: [RouterModule]
})
export class Module0RoutingModule { }
