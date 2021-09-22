import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css',
'../../../assets/dynemicmenu/css/font-awesome.css',
'../../../assets/dynemicmenu/css/apps.css',
'../../../assets/dynemicmenu/css/apps_inner.css',
'../../../assets/dynemicmenu/css/res.css',



]
})
export class UserMenuComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  rest_name:any;
  rest_id:any;
  modalopen:any;
  ngOnInit(): void {
    this.rest_name=this.activatedRoute.snapshot.params['rname'];
    this.rest_id=this.activatedRoute.snapshot.params['rid'];
  }
  open_modal(){
    this.modalopen=document.getElementById('id01')
    this.modalopen.style.display='block'
  }
  modalclose(){
    this.modalopen.style.display='none'
  }

}
