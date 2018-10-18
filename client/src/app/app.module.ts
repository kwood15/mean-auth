import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { SaleRoutingModule } from './sale/sale.routing.module';

import { AuthenticationService } from './authentication.service';
import { AuthenticationGuardService } from './authentication-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewInComponent } from './new-in/new-in.component';
import { PetiteClothingComponent } from './petite-clothing/petite-clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SaleComponent } from './sale/sale.component';
import { SaleTopsComponent } from './sale/tops/sale-tops.component';

import {
  MatFormFieldModule,
  MatTabsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-in', component: NewInComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'petite-clothing', component: PetiteClothingComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClothingComponent,
    SearchResultsComponent,
    NewInComponent,
    PetiteClothingComponent,
    ShoesComponent,
    AccessoriesComponent,
    SaleComponent,
    SaleTopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    SaleRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
