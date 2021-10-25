
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsAddComponent } from './pets-add/pets-add.component';
import { PetsUpdateComponent } from './pets-update/pets-update.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetsService } from './pets.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetsAddComponent,
    PetsUpdateComponent,
    PetsListComponent,
    PetsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }