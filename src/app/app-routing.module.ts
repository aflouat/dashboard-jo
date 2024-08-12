import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {CountryDetailsComponent} from "./pages/country-details/country-details.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'countries/:id',
    component: CountryDetailsComponent },
  {
    path: '**', // wildcard
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
