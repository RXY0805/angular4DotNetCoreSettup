import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// fix the bug of [No provider for FormBuilder]
//https://stackoverflow.com/questions/39397326/angular-2-rc-5-original-exception-no-provider-for-formbuilder
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//auth service
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
//routing module
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContractorsComponent } from './contractors/contractors.component';
//rxjs
import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContractorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
