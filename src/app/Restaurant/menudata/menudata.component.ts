import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-menudata',
  templateUrl: './menudata.component.html',
  styleUrls: ['./menudata.component.css']
})
export class MenudataComponent implements OnInit {
  tab1:boolean=false;
  tab2:boolean=true;
  t1:any;
  t2:any;
  res_id:any=10;
  menu:any;
  position:any;
  font:any;
  back:any;
  notice_flag:any;
  constructor(private about:DataserviceService) { }

  ngOnInit(): void {
  }
  openCity(e:any){
    if(e=='aboutUs'){
        this.tab1=false;
        this.tab2=true;
    }
   else{
     if( this.t1=='notices'){
    this.tab1=true;
    this.tab2=false;
     }
   }  
   
}
nexttab(e:any,e1:any){
   if(e=='notices'){
      this.tab1=true;
      this.tab2=false;
      this.t1='notices';
       this.about.Aboutus(e1,this.res_id).subscribe(data=>{
         console.log(data);
       })
    }
    
}
nexttab1(e:any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any){
  if(e=='about'){
    this.tab1=true;
    this.tab2=false;
    this.about.Notice(this.menu,this.position,v1,v3,v5,v6,this.res_id,this.notice_flag).subscribe(data=>{
        console.log(data);
    })
  }
}
pickup_place(event:any){
 this.menu=event;
 console.log(this.menu)
}
getposition(e:any){
 this.position=e;
 console.log(this.position)

}
changecolor(event:any,e:any){
     if(e=='back'){
     this.back=document.getElementById('box');
     this.back.value=event.target.value;
     }
     else if(e=='font'
     ){
      this.back=document.getElementById('box2');
      this.back.value=event.target.value;
     }
     console.log(event.target.value);
}

checknotice(event:any){
  if(event.target.checked){
    this.notice_flag='Y';
  }
  else
  {
    this.notice_flag='N';
  }

}

}
