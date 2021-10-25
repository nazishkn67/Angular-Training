
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsAddComponent } from './pets-add/pets-add.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsUpdateComponent } from './pets-update/pets-update.component';

const routes: Routes = [
  {path:'pets', component:PetsListComponent},
  {path:'add',component:PetsAddComponent},
  {path:'update/:name',component:PetsUpdateComponent},
  {path:'details/:name',component:PetsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }