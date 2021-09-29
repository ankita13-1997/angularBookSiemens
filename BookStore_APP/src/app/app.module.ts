import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DisplayComponent } from './component/display/display.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserDisplayComponent } from './component/user-display/user-display.component';
import {MatSelectModule} from '@angular/material/select';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { CartComponent } from './component/cart/cart.component';
import { UserSignUpLoginComponent } from './component/user-sign-up-login/user-sign-up-login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { VerifyUser } from './component/verify-user/verify-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    DisplayComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    DialogComponent,
    UserDashboardComponent,
    UserDisplayComponent,
    OrderPlacedComponent,
    CartComponent,
    UserSignUpLoginComponent,
    VerifyUser
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSliderModule,
    MatRadioModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
