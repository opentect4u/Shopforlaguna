import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
// import { AnySoaRecord } from 'dns';

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

  constructor(private activatedRoute:ActivatedRoute,private admin_data:LagunaserviceService) { }
  rest_name:any;
  rest_id:any;
  modalopen:any;
  start:any;
  end:any;
  rid:any;
  myArr:any=[];
  menuData:any=[];
  sec_array:any=[];
  item_array:any=[];
  item_array1=[];
  c=1;
  ngOnInit(): void {
    this.rest_name=this.activatedRoute.snapshot.params['rname'];
    this.rest_id=this.activatedRoute.snapshot.params['rid'];
    // this.start=this.activatedRoute.snapshot.params['t1'];
    // this.end=this.activatedRoute.snapshot.params['t2'];
    // this.start=atob(this.start);
    // this.end=atob(this.end);
    
    // console.log(this.start+" "+this.end)
    this.rest_id=atob(this.rest_id);
    this.myArr=this.rest_id.split('/');
    this.rid=this.myArr[0];
    this.start=this.myArr[1];
    this.end=this.myArr[2];
    console.log(this.rid+" "+this.start+" "+this.end)
    var dt={
      "id":this.rid,
      "st_time":this.start,
      "end_time":this.end
    }
    this.admin_data.get_menu_by_time(dt).subscribe(data=>{console.log(data)
    this.menuData=data;
    this.menuData=this.menuData.res;
    console.log(this.menuData)
        
    })
  }
  open_modal(){
    this.modalopen=document.getElementById('id01')
    this.modalopen.style.display='block'
  }
  modalclose(){
    this.modalopen.style.display='none'
  }

}
