import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse: boolean;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private router: AppRoutingModule) { }

  ngOnInit() {
    this.collapse = false;
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }
  
  
}
