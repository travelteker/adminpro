import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Inicio'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'} },
      { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Estadísticas'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración'} },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
