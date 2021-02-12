import { Injectable } from '@angular/core';
import { Adminlogin } from '../login/adminlogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminloginserviceService {
 
  private readonly mockedUser = new Adminlogin('admin@gmail.com','admin');
  isAuthenticated = false;

   constructor(private router: Router) { }

  authenticate(adminlogin : Adminlogin) : boolean{
    if(this.checkCredentials(adminlogin)){
      this.isAuthenticated = true;
      this.router.navigate(['']);
      return true;
    }
    this.isAuthenticated = false;
      return false;
  }

  private checkCredentials(adminlogin:Adminlogin): boolean{
    return this.checkEmail(adminlogin.getEmail()) && this.checkPassword(adminlogin.getPassword());
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  logout() {
     this.isAuthenticated = false;
     this.router.navigate(['login']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
