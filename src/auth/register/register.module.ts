import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

import { RegisterContainer } from './containers/register/register.container';

export const ROUTES: Routes = [
  {
    path: '',
    component: RegisterContainer,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatButtonModule,
  ],
  declarations: [RegisterContainer],
})
export class RegisterModule {}
