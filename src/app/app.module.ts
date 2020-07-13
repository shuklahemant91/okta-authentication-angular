import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.modute";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { UploadComponent } from "./components/upload/upload.component";
import { OktaAuthService } from "@okta/okta-angular";
import { CallbackComponent } from "./components/callback/callback.component";
import { OktaAuthGuard } from "./auth.gaurd";
import { HttpClientModule } from "@angular/common/http";
// import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";

// const oktaConfig = {
//   issuer: "https://dev-611599.okta.com/oauth2/default",
//   clientId: "0oajsmsuf6nHAloQD4x6",
//   redirectUri: "http://localhost:4200/upload",
//   pkce: true,
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    CallbackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [OktaAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
