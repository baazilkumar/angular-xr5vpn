import { Routes, RouterModule } from '@angular/router';

import { AstronautListComponent } from './astronaut-list/astronaut-list.component';

const appRoutes: Routes = [
  { path: '', component: AstronautListComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);