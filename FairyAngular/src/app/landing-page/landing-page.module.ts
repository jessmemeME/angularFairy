import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {path:'', component: LandingPageComponent}
]

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButton,
    MatToolbarModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingPageModule { }
