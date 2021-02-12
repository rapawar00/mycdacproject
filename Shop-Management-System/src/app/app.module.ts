import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddcyclesComponent } from './addcycles/addcycles.component';
import { ExistingcyclesComponent } from './existingcycles/existingcycles.component';
import { SoldcyclesComponent } from './soldcycles/soldcycles.component';
import { AllcyclesComponent } from './allcycles/allcycles.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddcyclesComponent,
    ExistingcyclesComponent,
    SoldcyclesComponent,
    AllcyclesComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


