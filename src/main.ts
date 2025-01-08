import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, A11yModule)]
})
  .catch(err => console.error(err));
