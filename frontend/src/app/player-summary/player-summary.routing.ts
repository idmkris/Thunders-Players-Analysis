import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerSummaryComponent } from './player-summary.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerSummaryComponent,
    data: { title: 'Player Summary' },
  },
  { path: 'player-profile/:playerId', component: PlayerProfileComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes);
