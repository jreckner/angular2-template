// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// root component
import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

// internal Routes
import { APP_ROUTER } from './app.routes';

// internal components
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTER
  ],
  providers: [
    ENV_PROVIDERS
  ]
})
export class AppModule {}
