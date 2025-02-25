import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  // 🔹 Evitamos que login se cargue antes de tiempo
  { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule), canMatch: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('../landing-page/landing-page.module').then(m => m.LandingPageModule), canMatch: [AuthGuard] },

  // 🔹 Rutas protegidas (requieren autenticación)
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), canMatch: [AuthGuard] },
  { path: 'settings', loadChildren: () => import('../settings/basic-info/basic-info.module').then(m => m.BasicInfoModule), canMatch: [AuthGuard] },
  { path: 'events', loadChildren: () => import('../event-creation/event-creation.module').then(m => m.EventCreationModule), canMatch: [AuthGuard] },
  { path: 'clients', loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesModule), canMatch: [AuthGuard] },
  { path: 'agenda', loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaModule), canMatch: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })], // 🔥 Desactivamos la precarga
  exports: [RouterModule]
})
export class AppRoutingModule {}
