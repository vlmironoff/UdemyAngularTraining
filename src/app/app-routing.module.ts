import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
