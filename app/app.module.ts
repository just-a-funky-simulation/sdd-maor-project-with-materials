import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSliderModule,
  MatFormFieldModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  declarations: [AppComponent, LoginComponent, FilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
