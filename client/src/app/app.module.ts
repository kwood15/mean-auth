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
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewInComponent } from './new-in/new-in.component';
import { PetiteClothingComponent } from './petite-clothing/petite-clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ProfileComponent } from './profile/profile.component';
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
  MatGridListModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: ''
    }
  },
  {
    path: 'new-in',
    component: NewInComponent,
    data: {
      breadcrumb: 'New in'
    }
  },
  {
    path: 'clothing',
    component: ClothingComponent,
    data: {
      breadcrumb: 'Clothing'
    }
  },
  {
    path: 'petite-clothing',
    component: PetiteClothingComponent,
    data: {
      breadcrumb: 'Petite Clothing'
    }
  },
  {
    path: 'shoes',
    component: ShoesComponent,
    data: {
      breadcrumb: 'Shoes'
    }
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
    data: {
      breadcrumb: 'Accessories'
    }
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
    data: {
      breadcrumb: 'Search Results'
    }
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    data: {
      breadcrumb: 'product-detail'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      breadcrumb: 'Register'
    }
  },
  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuardService],
    data: {
      breadcrumb: 'Your profile'
    }
  }
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
    SaleTopsComponent,
    ProductDetailComponent,
    ModalComponent,
    ModalLoginComponent,
    BreadcrumbComponent
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
    MatPaginatorModule,
    SaleRoutingModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalLoginComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
