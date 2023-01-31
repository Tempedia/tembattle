import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { SharedTeamPageComponent } from './page/shared-team-page/shared-team-page.component';

const routes: Routes = [
  {
    path: 'shared/team/:id',
    component: SharedTeamPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
