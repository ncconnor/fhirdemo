
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FhirDataComponent } from './fhir-data/fhir-data.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'fhir-data', component: FhirDataComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'fhir-data' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
