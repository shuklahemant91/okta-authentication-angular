import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from "../../services/auth.service";

@Component({ template: `` })
export class CallbackComponent implements OnInit {
  constructor(private okta: OktaAuthService) {}

  ngOnInit() {
    // Handles the response from Okta and parses tokens
    this.okta.handleAuthentication();
  }
}
