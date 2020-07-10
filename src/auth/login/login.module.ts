import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

import { LoginContainer } from './containers/login/login.container';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginContainer,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatButtonModule,
  ],
  declarations: [LoginContainer],
})
export class LoginModule {}
