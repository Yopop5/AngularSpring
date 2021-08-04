import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:"",redirectTo:"/clientes",pathMatch:"full"},
{path:"clientes",component:ClientesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
