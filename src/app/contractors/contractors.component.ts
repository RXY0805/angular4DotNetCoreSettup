import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContractorsService } from '../_services/contractors.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css'],
  providers: [ContractorsService]
})
export class ContractorsComponent implements OnInit {
  greetings ='';

  constructor(private contractorsService : ContractorsService) { }

  ngOnInit() {
    this.contractorsService.sayHello()
    .subscribe(result => {
      this.greetings = result;
    })
  }
}
