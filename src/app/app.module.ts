import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilenameComponent } from './filename/filename.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FilenameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
