
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: environment.auth0.authorizationParams,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
