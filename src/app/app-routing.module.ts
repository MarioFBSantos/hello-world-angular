import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaffleComponent } from './raffle/raffle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'raffle',
    component: RaffleComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
