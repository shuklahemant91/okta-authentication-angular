import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { OktaAuthService } from "../../services/auth.service";
import * as OktaAuth from "@okta/okta-auth-js";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  error: string = "";
  constructor(
    private changeDetector: ChangeDetectorRef,
    private httpclient: HttpClient,
    private okctAuth: OktaAuthService
  ) {}

  ngOnInit() {}

  login() {
    this.okctAuth.login("");
    // this.okctAuth.oktaAuth
    //   .signIn({
    //     username: "hemant.shukla1@publicissapient.com",
    //     password: "Okta123$$",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === "SUCCESS") {
    //       this.okctAuth.oktaAuth.token.getWithRedirect({
    //         sessionToken: res.sessionToken,
    //         responseType: "id_token",
    //       });
    //     }
    //   });
    // const formBody = new FormData();
    // formBody.set("username", "hemant.shukla@publicissapient.com");
    // formBody.set("password", "Okta123$$");
    // this.httpclient
    //   .post(
    //     "https://dev-611599.okta.com/api/v1/authn",
    //     {
    //       username: "hemant.shukla1@publicissapient.com",
    //       password: "Okta123$$",
    //     },
    //     {
    //       observe: "response",
    //       headers: new HttpHeaders({
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       }),
    //     }
    //   )
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
  }
}
