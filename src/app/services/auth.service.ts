import { Observable, Observer } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as OktaAuth from "@okta/okta-auth-js";

@Injectable({
  providedIn: "root", // <- ADD THIS
})
export class OktaAuthService {
  // IMPORTANT!
  // Replace {clientId} with your actual Client ID
  // Replace {yourOktaDomain} with your actual Okta domain
  // If using a custom authorization server, ISSUER should be 'https://{yourOktaDomain}/oauth2/${authServerId}'

  CLIENT_ID = "0oajsmsuf6nHAloQD4x6";
  ISSUER = "https://dev-611599.okta.com";
  LOGIN_REDIRECT_URI = "http://localhost:4200/callback";
  LOGOUT_REDIRECT_URI = "http://localhost:4200/";

  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true,
  });

  $isAuthenticated: Observable<boolean>;
  private observer: Observer<boolean>;
  constructor(private router: Router) {
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then((val) => {
        observer.next(val);
      });
    });
  }

  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get("accessToken"));
  }

  login(originalUrl) {
    // Save current URL before redirect
    sessionStorage.setItem("okta-app-url", originalUrl || this.router.url);

    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ["openid"],
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    console.log(tokens);

    const tokensObj = tokens.tokens;
    if (tokensObj.idToken) {
      this.oktaAuth.tokenManager.add("idToken", tokensObj["idToken"]);
    }
    if (tokensObj.accessToken) {
      this.oktaAuth.tokenManager.add("accessToken", tokensObj["accessToken"]);
    }

    if (await this.isAuthenticated()) {
      this.observer.next(true);
    }

    // Retrieve the saved URL and navigate back
    const url = sessionStorage.getItem("okta-app-url");
    this.router.navigateByUrl(url);
  }

  async logout() {
    await this.oktaAuth.signOut({
      postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI,
    });
  }
}
