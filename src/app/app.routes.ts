import { Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { CreateTeamComponent } from './create-team/create-team.component';

export const routes: Routes = [
  { path: 'teamList', component: TeamListComponent },
  { path: 'add', component: CreateTeamComponent },
];
