import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicationListComponent } from './features/medication/medication-list/medication-list.component';
import { MedicationEntryFormComponent } from './features/medication/medication-entry-form/medication-entry-form.component';

const routes: Routes = [
  {path: "", component: MedicationListComponent},
  {path: "new-entry", component: MedicationEntryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
