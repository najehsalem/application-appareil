import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ApparielDashboardComponent } from './appariel-dashboard/appariel-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AppareilComponent,
    MenuComponent,
    AuthComponent,
    ApparielDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
