import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routes} from './routes';
import { TransactionsDisplayComponent } from './transactions-display/transactions-display.component';
import { CommonsLayoutComponent } from '../commons-module/commons-layout/commons-layout.component';

const config: Routes = [
  {
    path: routes.index.route,
    component: CommonsLayoutComponent,
    children: [
      {
        path: routes.home.route,
        component: TransactionsDisplayComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(config)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
