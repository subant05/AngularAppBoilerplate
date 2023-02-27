import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { VehicleComponent } from '../pages/vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuardService],
    runGuardsAndResolvers: 'always',
    children: [
      {
        // Main / Home Page
        path: '',
        component: DashboardComponent,
      },
      {
        path: ':id',
        component: VehicleComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutes {}
