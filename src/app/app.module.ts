import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpConfigInterceptor } from './interceptor/http-config.interceptor';
import { AppCanActivate } from './guards/app-can-activate.guard';
import { AppCanLoad } from './guards/app-can-load.guard';
import { AppCanDeactivate } from './guards/app-can-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    AppCanLoad,
    AppCanActivate,
    AppCanDeactivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() { console.info('AppModule loaded') } }
