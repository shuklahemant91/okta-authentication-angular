import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { LoginComponent } from "./components/login/login.component";
import { UploadComponent } from "./components/upload/upload.component";
import { OktaAuthGuard } from "./auth.gaurd";
import { OktaLoginRedirectComponent } from "@okta/okta-angular";
import { CallbackComponent } from "./components/callback/callback.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "upload", component: UploadComponent, canActivate: [OktaAuthGuard] },
  {
    path: "callback",
    component: CallbackComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
