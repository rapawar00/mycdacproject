import { Component, OnInit } from '@angular/core';
import { Adminlogin } from './adminlogin';
import { AdminloginserviceService } from './adminloginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInValid = true;
  areCredentialsInvalid = false;

  constructor(public adminloginserviceService: AdminloginserviceService) { }

  ngOnInit(): void {

  }

  getLoginValues(value) {
    console.warn(value);
    const adminlogin = new Adminlogin(value.email, value.password);
    this.adminloginserviceService.authenticate(adminlogin);

    if (!value.valid) {
      this.isFormInValid = false;
      this.areCredentialsInvalid = true;
      return;
    }
    this.checkCredentials(value);
  }

  private checkCredentials(value) {
    const adminlogin = new Adminlogin(value.email, value.password);
    if (!this.adminloginserviceService.authenticate(adminlogin)) {
      this.isFormInValid = true;
      this.areCredentialsInvalid = false;
    }
  }

}
