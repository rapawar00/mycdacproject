import { Component, OnInit } from '@angular/core';
import { AdminloginserviceService } from '../login/adminloginservice.service';
/*import { BehaviourSubjects, Observable} from 'rxjs';*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	/*LoginStatus$ = new BehaviourSubjects<boolean>(null);
	Username$ : Observable<string>;
*/
constructor(public adminloginserviceService: AdminloginserviceService) { }

  logout() {
    this.adminloginserviceService.logout();
  }

  ngOnInit(): void {
  }

}
