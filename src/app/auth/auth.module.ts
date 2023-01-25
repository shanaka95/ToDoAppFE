import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module'


import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Import Material Modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule }  from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AuthModule { }
