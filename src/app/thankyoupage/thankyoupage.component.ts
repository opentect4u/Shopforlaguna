import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css',
    '../../assets/appcss.css']
})
export class ThankyoupageComponent implements OnInit {
  name:any=localStorage.getItem('Restaurant_name');
  constructor() { }

  ngOnInit(): void {
  }

}
