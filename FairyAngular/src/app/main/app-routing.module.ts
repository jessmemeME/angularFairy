// app-routing.module.ts - Configuración de enrutamiento de la aplicación Angular

// Importaciones necesarias para el módulo de enrutamiento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../UI/not-found/not-found.component';

// Definición de las rutas de la aplicación
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },  // Redirige la raíz a 'landing'
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la ruta vacía al módulo de login
  { path: 'login', loadChildren: () => import('../login/login.module').then((m) => m.LoginModule) }, // Carga perezosa del módulo de login
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule) }, // Carga perezosa del módulo de autenticación
  //{ path: 'clients', loadChildren: () => import('../clients/clients.module').then((m) => m.ClientsModule) }, // Carga perezosa del módulo de clientes
  { path: 'settings', loadChildren: () => import('../settings/basic-info/basic-info.module').then((m) => m.BasicInfoModule) }, // Carga perezosa del módulo de configuración
  { path: 'payment', loadChildren: () => import('../payment/payment.module').then((m) => m.PaymentModule) }, // Carga perezosa del módulo de pagos
  { path: 'account', loadChildren: () => import('../accounts/account.module').then((m) => m.AccountModule) }, // Carga perezosa del módulo de cuentas
  { path: 'events', loadChildren: () => import('../event-creation/event-creation.module').then(m => m.EventCreationModule) },
  { path: 'clients', loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'landing', loadChildren: () => import('../landing-page/landing-page.module').then(m => m.LandingPageModule) }, // Nueva ruta para la landing page
  { path: 'agenda', loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaModule) },
  //{ path: 'pagos', loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaModule) },
  //{ path: '', redirectTo: 'crear-evento', pathMatch: 'full' },  // Ruta por defecto que redirige a crear evento
  {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', component: NotFoundComponent }, // Ruta comodín para manejar páginas no encontradas
];

// Decorador NgModule que declara las importaciones y exportaciones del módulo de enrutamiento
@NgModule({
  imports: [
    // Configura el enrutador con las rutas definidas
    RouterModule.forRoot(routes, { useHash: false })
  ],
  // Exporta el módulo de enrutamiento para que esté disponible en toda la aplicación
  exports: [RouterModule]
})
export class AppRoutingModule { }
