import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
