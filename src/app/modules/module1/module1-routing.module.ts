import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routes} from './routes';
import { CommonsModuleModule } from '../commons-module/commons-module.module';
import { TransactionSubmitComponent } from './transaction-submit/transaction-submit.component';
import { CommonsLayoutComponent } from '../commons-module/commons-layout/commons-layout.component';

const config: Routes = [
  {
    path: routes.index.route,
    component: CommonsLayoutComponent,
    children: [
      {
        path: routes.home.route,
        component: TransactionSubmitComponent,
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(config)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
