import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { VatavaranComponent } from './vatavaran/vatavaran.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'vatavaran', component: VatavaranComponent },
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
