import { Component } from "@angular/core";
import { OktaAuthService } from "./services/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "okta-app";
  isAuthenticated: boolean;
  constructor(private abc: OktaAuthService) {}

  ngOnInit() {
    this.abc.$isAuthenticated.subscribe((val) => (this.isAuthenticated = val));
  }

  logout() {
    this.abc.logout();
  }
}
