import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuUserProfileViewComponent} from './user-view/bmu-user-profile-view/bmu-user-profile-view.component';

const auth = new AuthoritiesConstants();

export const bmuCrudRoute: Routes = [
  {
    path: 'bmu-crud/user-profile/:id',
    component: BmuUserProfileViewComponent,
    data: {
      authorities: auth.superAdmin()
    },
    canActivate: [RouterActivateInterceptor]
  }
];
