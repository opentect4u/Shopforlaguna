import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.css',
'../../../../assets/appcss.css']
})
export class MenuSetupComponent implements OnInit {
  breakfast_end:any='';
  breakfast_start:any='';
  launch_end:any='';
  launch_start:any='';
  dinner_end:any='';
   dinner_start:any='';
 Brunch_end:any='';
  Brunch_start:any='';
  stor:any=[];
  comma:any;
  com:any=[];

  londondefault:any;
  lagunadefault:any;
   tokyodefault:any;
   parisdefault:any;
   break_menu:any;
   launch_menu:any;
   dinner_menu:any;
  brunch_menu:any;

    arr_brak_check:any=[];
  check_break:any;
  check_launch:any;
  check_dinner:any;
  check_brunch:any;

   name:any;
   menu_sec:any
   launch_sec:any;
   dinner_sec:any;
   brunch_sec:any;
   break_cover:any;
   launch_cover:any;

   dinner_cover:any;
   brunch_cover:any;
   break_top:any;
   launch_top:any;

   dinner_top:any;
   brunch_top:any;



   break_sec:any=[];
   cove_top:any=[];
  //For checking null in breakfast
  b_url:boolean=true;
  bc_url:boolean=true;
  bt_url:boolean=true;
  bm_url:boolean=true;
  bs_url:boolean=true;
  bstart_url:boolean=true;
  bend_url:boolean=true;
  //For checking null in breakfast
  lcc_url:boolean=true;
  lc_url:boolean=true;
  lt_url:boolean=true;
  lm_url:boolean=true;
  ls_url:boolean=true;
  lstart_url:boolean=true;
  lend_url:boolean=true;
  //For checking null in breakfast
  d_url:boolean=true;
  dc_url:boolean=true;
  dt_url:boolean=true;
  dm_url:boolean=true;
  ds_url:boolean=true;
  dstart_url:boolean=true;
  dend_url:boolean=true;
  //For checking null in breakfast
  br_url:boolean=true;
  brc_url:boolean=true;
  brt_url:boolean=true;
  brm_url:boolean=true;
  brs_url:boolean=true;
  brstart_url:boolean=true;
  brend_url:boolean=true;
  coc:any;


  l_url:boolean=true;

  PACK: any;
  BIRTH: any;
  ENTER: any;
  WALL: any;
  WIND: any;
  Packages: any = false;
  birth: any = true;
  entertainmen: any = true;
  wall: any = true;
  window: any = true;

  launch_url=true;


  london: any;
  paris: any;
  Tokyo: any;
  Laguna: any;
  tab1: any = false;
  tab2: any = true;
  tab3: any = true;
  tab4: any = true;
  tab5: any = true;
  t1: any = '';
  t2: any = '';
  t3: any = '';
  t4: any = '';
  t5: any = '';
  resid:any=localStorage.getItem('Restaurant_id');
  break_check:any;
  launch_check:any;
  brunch_check:any
  dinner_check:any
  storevalue: any = [];
  success:any;
  x:any;
  bkmenu:any;
  // For London
  mon:any=0;;
  tue:any=0;
  wed:any=0;
  thu:any=0;
  fri:any=0;
  sat:any=0;
  sun:any=0;
  every:any;
  error_msg:any="Please Update your package";
  //For Paris
  mon_launch:any=0;;
  tue_launch:any=0;
  wed_launch:any=0;
  thu_launch:any=0;
  fri_launch:any=0;
  sat_launch:any=0;
  sun_launch:any=0;
  
  // For Tokyo
  mon_dinner:any=0;;
  tue_dinner:any=0;
  wed_dinner:any=0;
  thu_dinner:any=0;
  fri_dinner:any=0;
  sat_dinner:any=0;
  sun_dinner:any=0;
  
  // For Laguna
  mon_brunch:any=0;;
  tue_brunch:any=0;
  wed_brunch:any=0;
  thu_brunch:any=0;
  fri_brunch:any=0;
  sat_brunch:any=0;
  sun_brunch:any=0;

  mon_check:any;
  tue_check:any;
  wed_check:any;
  thu_check:any;
  fri_check:any;
  sat_check:any;
  sun_check:any;
  // mon_check:any;

   brunch_start:any;
   brunch_end:any;
  
  breakfastcoverimage: any;
  breakfasttopimage: any;
  breakfastmenuimage: any;
  breakfastsectionimage:any; 

  v:any=0;

  launchcoverimage: any;
  launchtopimage: any;
  launchmenuimage: any;
  launchsectionimage:any;


  branchsectionimage:any;
  branchcoverimage:any;
  branchtopimage:any
  branchmenuimage:any;

  dinnersectionimage:any;
  dinnercoverimage:any;
 dinnertopimage:any
  dinnermenuimage:any;
  multipleImages:any=[];

  constructor(private _data: DataserviceService,private lagunaserve:LagunaserviceService,private http: HttpClient) { }

  ngOnInit(): void {
  
    if("value" in localStorage){
      this.v=localStorage.getItem('value');
  } else {
    
   }
   this.arr_brak_check.length=0;
    this.brunch_start='';
    this.brunch_end='';
    this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
      this.cove_top.length=0;
      console.log(data);
      this.cove_top=data;
      if(this.cove_top.length!=0){

      
      for(let i=0;i<this.cove_top.msg.length;i++){
        console.log(this.cove_top.msg[i].menu_id)
           if(this.cove_top.msg[i].menu_id==1){
                
            console.log("sadasda1");
             
                 this.break_cover=this.cove_top.msg[i].cover_page_url;
                 this.break_top=this.cove_top.msg[i].top_img_url;
                 this.break_menu=this.cove_top.msg[i].menu_url;
                 console.log(this.break_menu);
                
             
               if(this.cove_top.msg[i].active_flag=='Y'){
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=true;
                  this.break_check='Y';
               }
               else {
                this.check_break=document.getElementById('bkmenu');
                this.check_break.checked=false;
                this.break_check='N';
               }
            }
            else if(this.cove_top.msg[i].menu_id==2){

              console.log("sadasda3");
             
                this.launch_cover=this.cove_top.msg[i].cover_page_url;
                this.launch_top=this.cove_top.msg[i].top_img_url;
                this.launch_menu=this.cove_top.msg[i].menu_url;
                console.log(this.launch_top,this.launch_cover);

            
              if(this.cove_top.msg[i].active_flag=='Y'){
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=true;
                this.launch_check='Y'
             }
             else {
              this.check_launch=document.getElementById('paris');
              this.check_launch.checked=false;
              this.launch_check='N';
             }
           }
           else if(this.cove_top.msg[i].menu_id==3){
            console.log("sadasda2");
              this.dinner_cover=this.cove_top.msg[i].cover_page_url;
              this.dinner_top=this.cove_top.msg[i].top_img_url;
              this.dinner_menu=this.cove_top.msg[i].menu_url;
            if(this.cove_top.msg[i].active_flag=='Y'){
              this.check_dinner=document.getElementById('tokyo');
              this.check_dinner.checked=true;
              this.brunch_check='Y';
           }
           else {
            this.check_dinner=document.getElementById('tokyo');
            this.check_dinner.checked=false;
            this.brunch_check='N';
           }
           }
           else if(this.cove_top.msg[i].menu_id==4){

            console.log("sadasda4");
            // if(this.cove_top.msg[i].cover_page_url!=''){
              this.brunch_cover=this.cove_top.msg[i].cover_page_url;
              this.brunch_top=this.cove_top.msg[i].top_img_url;
              this.brunch_menu=this.cove_top.msg[i].menu_url;

            // }
            // else{
            //  this.brunch_cover="";
            //  this.brunch_top=""
            // }
            if(this.cove_top.msg[i].active_flag=='Y'){
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=true;
              this.dinner_check='Y';
           }
           else {
            this.check_brunch=document.getElementById('laguna');
            this.check_brunch.checked=false;
            this.dinner_check='N';
           }
         }

      }
    }
    })
    this.lagunaserve.get_sec_url('1',this.resid).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      for(let i=0;i<this.break_sec.msg.length;i++)
      {
        if(this.break_sec.msg[i].menu_id==1){
          this.menu_sec=this.break_sec.msg[i].sec_url
         }
      }
      

    })
    console.log("asdasdasdasdasd");
     this.name=localStorage.getItem('Restaurant_name');
     var breakfast=localStorage.getItem('breakfast');
     var launch=localStorage.getItem('launch');
     var dinner=localStorage.getItem('dinner');
     var brunch=localStorage.getItem('brunch');
     if(breakfast!='' && launch!='' && dinner!='' && brunch!=''){
      this.lagunaserve.get_set_time('1',this.resid).subscribe(data=>{
        console.log(data);
      })
      this.PACK = document.getElementById('defaultOpen');
    this.PACK.className = 'active';
    this.PACK.style.background = '#00477e;';
    this.PACK.style.color = 'white';
     }
   
     if(localStorage.getItem('No_of_menu')=='O'){
       //If Select only breakfast
      if(breakfast==''){
        this.lagunaserve.get_set_time('1',this.resid).subscribe((data:any)=>{
          this.arr_brak_check=data;
          console.log(data);
        if(this.arr_brak_check.msg.length!=0){

        
          this.breakfast_start=this.arr_brak_check.msg[0].start_time;
          this.breakfast_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start= this.breakfast_start;
          this.breakfast_end=this.breakfast_end;

          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle2');
              this.mon_check.checked=true;
              this.mon=2;
             
            }
            if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle3');
              this.tue_check.checked=true;
              this.tue=3;
             
            }
           if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle4');
              this.wed_check.checked=true;
              this.wed=4;
             
            }
           if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle5');
              this.thu_check.checked=true;
              this.thu=5;
              
            }
             if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle6');
              this.fri_check.checked=true;
              this.fri=6;
              
            }
          if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle7');
              this.sat_check.checked=true;
              this.sat=7;
              
            }
             if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle8');
              this.sun_check.checked=true;
              this.sun=8;
            }
            if(this.arr_brak_check.msg.length==7){
              this.every=document.getElementById('vehicle1');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle2');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle3');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle4');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle5');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle6');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle7');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle8');
              this.sun_check.checked=true;
              this.mon=2;
              this.tue=3;
              this.wed=4;
              this.thu=5;
              this.fri=6;
              this.sat=7;
              this.sun=8;
             }
        }
      }
        })
        this.londondefault=false;
        this.lagunadefault=true;
        this.tokyodefault=true;
        this.parisdefault=true;
        this.coc=document.getElementById('defaultOpen');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.tab1=false;
        this.tab2=true;

        this.tab3=true;

        this.tab4=true;

        
      }
       //If Select only launch

      else if(launch==''){
        this.lagunaserve.get_set_time('2',this.resid).subscribe(data=>{
          this.arr_brak_check=data;
          if(this.arr_brak_check.msg.length!=0){
          this.launch_start=this.arr_brak_check.msg[0].start_time;
          this.launch_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start=this.launch_start;
          this.brunch_end=this.launch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.mon_launch=2;
             
            }
            if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.tue_launch=3;
             
            }
            if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.wed_launch=4;
             
            }
           if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.thu_launch=5;
              
            }
            if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.fri_launch=6;
              
            }
          if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sat_launch=7;
              
            }
           if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.sun_launch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle12');
              this.every.checked=true
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.mon_launch=2;
              this.tue_launch=3;
              this.wed_launch=4;
              this.thu_launch=5;
              this.fri_launch=6;
              this.sat_launch=7;
              this.sun_launch=8;
             }
      }
    }
        })
        this.coc=document.getElementById('defaultOpen1');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.londondefault=true;
        this.lagunadefault=true;
  
        this.tokyodefault=true;
  
        this.parisdefault=false;
        this.tab1=true;
        this.tab2=false;

        this.tab3=true;

        this.tab4=true;

      }
       //If Select only dinner

      else if(dinner==''){
        this.lagunaserve.get_set_time('3',this.resid).subscribe(data=>{
          this.arr_brak_check=data;
          if(this.arr_brak_check.msg.length!=0){
          this.dinner_start=this.arr_brak_check.msg[0].start_time;
          this.dinner_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start=this.dinner_start;
          this.brunch_end=this.dinner_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle23');
              this.mon_check.checked=true;
              this.mon_dinner=2;
             
            }
          if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle33');
              this.tue_check.checked=true;
              this.tue_dinner=3;
             
            }
          if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle43');
              this.wed_check.checked=true;
              this.wed_dinner=4;
             
            }
           if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle53');
              this.thu_check.checked=true;
              this.thu_dinner=5;
              
            }
         if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle63');
              this.fri_check.checked=true;
              this.fri_dinner=6;
              
            }
            if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle73');
              this.sat_check.checked=true;
              this.sat_dinner=7;
              
            }
         if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle83');
              this.sun_check.checked=true;
              this.sun_dinner=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle13');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle23');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle33');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle43');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle53');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle63');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle73');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle83');
              this.sun_check.checked=true;
              this.mon_dinner=2;
              this.tue_dinner=3;
              this.wed_dinner=4;
              this.thu_dinner=5;
              this.fri_dinner=6;
              this.sat_dinner=7;
              this.sun_dinner=8;
             }
      }
    }
        })
        this.coc=document.getElementById('defaultOpen2');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.londondefault=true;
        this.lagunadefault=true;
        this.tokyodefault=false;
       this.parisdefault=true;
       this.tab1=true;
        this.tab2=true;

        this.tab3=false;

        this.tab4=true;
      }
       //If Select only brunch

      else if(brunch==''){
        this.lagunaserve.get_set_time('4',this.resid).subscribe(data=>{
          this.arr_brak_check=data;
          if(this.arr_brak_check.msg.length!=0){
          this.Brunch_start=this.arr_brak_check.msg[0].start_time;
          this.Brunch_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start=this.Brunch_start;
        this.brunch_end=this.Brunch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.mon_brunch=2;
             
            }
             if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.tue_brunch=3;
             
            }
             if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.wed_brunch=4;
             
            }
           if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.thu_brunch=5;
              
            }
             if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.fri_brunch=6;
              
            }
            if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sat_brunch=7;
              
            }
           if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.sun_brunch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle14');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.mon_brunch=2;
              this.tue_brunch=3;
              this.wed_brunch=4;
              this.thu_brunch=5;
              this.fri_brunch=6;
              this.sat_brunch=7;
              this.sun_brunch=8;
             }
      }
    }
        })
        this.coc=document.getElementById('defaultOpen3');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.londondefault=true;
        this.lagunadefault=false;
        this.tokyodefault=true;
       this.parisdefault=true;
       this.tab1=true;
        this.tab2=true;

        this.tab3=true;

        this.tab4=false;
      }
     }
    if(localStorage.getItem('No_of_menu')=='T'){

      //IF select breakfast && launch
    if(breakfast=='' && launch==''){
 
    this.coc=document.getElementById('defaultOpen');
    this.coc.className='active';
    this.coc.style.background = '#00477e;';
    this.coc.style.color = 'white';
      this.londondefault=false;
      this.lagunadefault=true;
      this.tokyodefault=true;
      this.parisdefault=false;
        this.tab1=false;
      this.tab2=true;

      this.tab3=true;

      this.tab4=true;
    this.lagunaserve.get_set_time('1',this.resid).subscribe((data:any)=>{
   
      this.arr_brak_check=data;
      this.breakfast_start=this.arr_brak_check.msg[0].start_time;
      this.breakfast_end=this.arr_brak_check.msg[0].end_time;
      this.brunch_start= this.breakfast_start;
          this.brunch_end=this.breakfast_end;

      
      
      for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.mon=2;
           
          }
           if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.tue=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.wed=4;
           
          }
         if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.thu=5;
            
          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.fri=6;
            
          }
         if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sat=7;
            
          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.sun=8;
          }
           if(this.arr_brak_check.msg.length==7){
            this.every=document.getElementById('vehicle1');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.mon=2;
            this.tue=3;
            this.wed=4;
            this.thu=5;
            this.fri=6;
            this.sat=7;
            this.sun=8;
           }
      }
    })
    

    }
      //IF select breakfast && dinner

    else if(breakfast=='' && dinner==''){
  
      this.lagunaserve.get_set_time('1',this.resid).subscribe(data=>{
        console.log(data);
        this.arr_brak_check=data;
        if(this.arr_brak_check.msg.length!=0){

       
        this.breakfast_start=this.arr_brak_check.msg[0].start_time;
        this.breakfast_end=this.arr_brak_check.msg[0].end_time;
        this.brunch_start= this.breakfast_start;
          this.brunch_end=this.breakfast_end;

        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.mon=2;
           
          }
          if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.tue=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.wed=4;
           
          }
          if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.thu=5;
            
          }
        if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.fri=6;
            
          }
          if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sat=7;
            
          }
          if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.sun=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle1');
            this.every.checked=true
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.mon=2;
            this.tue=3;
            this.wed=4;
            this.thu=5;
            this.fri=6;
            this.sat=7;
            this.sun=8;
           }
        }
      }
      })
      this.coc=document.getElementById('defaultOpen');
      this.coc.className='active';
      this.coc.style.background = '#00477e;';
      this.coc.style.color = 'white';
      this.londondefault=false;
      this.lagunadefault=true;
      this.tokyodefault=false;
      this.parisdefault=true;
    
      this.tab1=false;
      this.tab2=true;

      this.tab3=true;

      this.tab4=true;

     

        this.tab4=true;
    }
      //IF select breakfast && brunch

    else if(breakfast=='' && brunch==''){

      this.lagunaserve.get_set_time('1',this.resid).subscribe(data=>{
         
        this.arr_brak_check=data;
        this.breakfast_start=this.arr_brak_check.msg[0].start_time;
          this.breakfast_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start= this.breakfast_start;
          this.brunch_end=this.breakfast_end;
      
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.mon=2;
           
          }
          else if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.tue=3;
           
          }
          else if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.wed=4;
           
          }
          else if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.thu=5;
            
          }
          else if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.fri=6;
            
          }
          else if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sat=7;
            
          }
          else if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.sun=8;
          }
          else {
            this.every=document.getElementById('vehicle1');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle2');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle3');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle4');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle5');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle6');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle7');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle8');
            this.sun_check.checked=true;
            this.mon=2;
            this.tue=3;
            this.wed=4;
            this.thu=5;
            this.fri=6;
            this.sat=7;
            this.sun=8;
           }
    }
      })
      this.coc=document.getElementById('defaultOpen');
      this.coc.className='active';
      this.coc.style.background = '#00477e;';
      this.coc.style.color = 'white';
      this.londondefault=false;
      this.lagunadefault=false;
      this.tokyodefault=true;
      this.parisdefault=true;
      this.tab1=false;
      this.tab2=true;

      this.tab3=true;

      this.tab4=true;
      
        

        
    }
      //IF select launch && brunch

    else if(launch=='' && brunch==''){

      this.lagunaserve.get_set_time('2',this.resid).subscribe(data=>{
        this.arr_brak_check=data;
        console.log(data)
        this.launch_start=this.arr_brak_check.msg[0].start_time;
        this.launch_end=this.arr_brak_check.msg[0].end_time;
        this.brunch_start=this.launch_start;
        this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;
           
          }
        if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;
           
          }
           if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;
            
          }
           if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;
            
          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;
            
          }
          if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
      })
      this.coc=document.getElementById('defaultOpen1');
      this.coc.className='active';
      this.coc.style.background = '#00477e;';
      this.coc.style.color = 'white';
      this.londondefault=true;
      this.lagunadefault=false;
      this.tokyodefault=true;
      this.parisdefault=false;
      this.tab1=true;
      this.tab2=false;

      this.tab3=true;

      this.tab4=true;

   
    }
      //IF select dinner && launch

    else if(launch=='' && dinner==''){
 
      this.coc=document.getElementById('defaultOpen1');
      this.coc.className='active';
      this.coc.style.background = '#00477e;';
      this.coc.style.color = 'white';
      this.londondefault=true;
      this.lagunadefault=true;
      this.tokyodefault=false;
      this.parisdefault=false;
     
      this.tab1=true;
      this.tab2=false;

      this.tab3=true;

      this.tab4=true;
      this.lagunaserve.get_set_time('2',this.resid).subscribe(data=>{
        this.arr_brak_check=data;
        this.launch_start=this.arr_brak_check.msg[0].start_time;
        this.launch_end=this.arr_brak_check.msg[0].end_time;
        this.brunch_start=this.launch_start;
        this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;
           
          }
          if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;
           
          }
           if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;
            
          }
           if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;
            
          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;
            
          }
           if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;

            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
      })
     
    }
      //IF select dinner && brunch

    else if(dinner=='' && brunch==''){

      this.lagunaserve.get_set_time('3',this.resid).subscribe(data=>{
        this.arr_brak_check=data;
        this.dinner_start=this.arr_brak_check.msg[0].start_time;
        this.dinner_end=this.arr_brak_check.msg[0].end_time;
        this.brunch_start=this.dinner_start;
        this.brunch_end=this.dinner_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle23');
            this.mon_check.checked=true;
            this.mon_dinner=2;
           
          }
       if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle33');
            this.tue_check.checked=true;
            this.tue_dinner=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle43');
            this.wed_check.checked=true;
            this.wed_dinner=4;
           
          }
        if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle53');
            this.thu_check.checked=true;
            this.thu_dinner=5;
            
          }
         if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle63');
            this.fri_check.checked=true;
            this.fri_dinner=6;
            
          }
         if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle73');
            this.sat_check.checked=true;
            this.sat_dinner=7;
            
          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle83');
            this.sun_check.checked=true;
            this.sun_dinner=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle13');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle23');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle33');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle43');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle53');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle63');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle73');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle83');
            this.sun_check.checked=true;
            this.mon_dinner=2;
            this.tue_dinner=3;
            this.wed_dinner=4;
            this.thu_dinner=5;
            this.fri_dinner=6;
            this.sat_dinner=7;
            this.sun_dinner=8;
           }
    }
      })
      this.londondefault=true;
      this.lagunadefault=false;
      this.tokyodefault=false;
      this.parisdefault=true;
      this.tab1=true;
        this.tab2=true;
        this.coc=document.getElementById('defaultOpen2');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.tab1=true;
        this.tab2=false;
  
        this.tab3=true;
  
        this.tab4=true;

       
    }
    }
    if(localStorage.getItem('No_of_menu')=='U')
   {
    this.coc=document.getElementById('defaultOpen');
    this.coc.className='active';
    this.coc.style.background = '#00477e;';
    this.coc.style.color = 'white';
      this.londondefault=false;
      this.lagunadefault=true;
      this.tokyodefault=true;
      this.parisdefault=false;
        this.tab1=false;
      this.tab2=true;

      this.tab3=true;

      this.tab4=true;

    this.londondefault=false;
    this.lagunadefault=false;
    this.tokyodefault=false;
    this.parisdefault=false;
      this.lagunaserve.get_set_time('1',this.resid).subscribe((data:any)=>{
     
        console.log(data);
        this.arr_brak_check=data;
        this.breakfast_start=this.arr_brak_check.msg[0].start_time;
        this.breakfast_end=this.arr_brak_check.msg[0].end_time;

        this.brunch_start= this.breakfast_start;
        this.brunch_end=this.breakfast_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle2');
              this.mon_check.checked=true;
              this.mon=2;
             
            }
           if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle3');
              this.tue_check.checked=true;
              this.tue=3;
             
            }
           if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle4');
              this.wed_check.checked=true;
              this.wed=4;
             
            }
           if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle5');
              this.thu_check.checked=true;
              this.thu=5;
              
            }
           if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle6');
              this.fri_check.checked=true;
              this.fri=6;
              
            }
           if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle7');
              this.sat_check.checked=true;
              this.sat=7;
              
            }
           if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle8');
              this.sun_check.checked=true;
              this.sun=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle1');
              this.mon_check=document.getElementById('vehicle2');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle3');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle4');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle5');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle6');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle7');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle8');
              this.sun_check.checked=true;
              this.mon=2;
              this.tue=3;
              this.wed=4;
              this.thu=5;
              this.fri=6;
              this.sat=7;
              this.sun=8;
             }
        }
      })
    
   
    
    }
}
  //For changing the tab
  openCity(e: any,v1:any) {
    console.log("val:",this.v)
    this.brunch_start=0;
    this.brunch_end=0;
    if (e == 'London'){
      this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;
      this.cove_top.length=0;
      this.break_sec.length=0;
      this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
        console.log(data);
        this.cove_top=data;
        if(this.cove_top.msg.length!=0){

       
        for(let i=0;i<this.cove_top.msg.length;i++){
             if(this.cove_top.msg[i].menu_id==1){
                  
            
                 if(this.cove_top.msg[i].cover_page_url!=''){
                   this.break_cover=this.cove_top.msg[i].cover_page_url;
                   this.break_top=this.cove_top.msg[i].top_img_url;
                 }
                 else{
                  this.break_cover="";
                  this.break_top=""
                 }
              }
          }
        }
      })

      this.lagunaserve.get_sec_url('1',this.resid).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){

       
        for(let i=0;i<this.break_sec.msg.length;i++)
        {
        
            if(this.break_sec.msg[i].sec_url!=''){
                 this.menu_sec=this.break_sec.msg[i].sec_url
              
            
           }
           else{
            this.menu_sec="";
           }
        }
        
      }
      })
       if((localStorage.getItem('No_of_menu')=='O')){
        if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
           this. myFunction_forerror();
        }
        else if(localStorage.getItem('No_of_menu')=='O'&&this.v!=1){
                  
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          this.paris = document.getElementById('London');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
       
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';

            //For Getting the value of day and time

            this.lagunaserve.get_set_time(v1,this.resid).subscribe((data:any)=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){

              
              this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.mon=2;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.tue=3;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.wed=4;
                 
                }
            if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.thu=5;
                  
                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.fri=6;
                  
                }
                if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sat=7;
                  
                }
              if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.sun=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle1');
                  this.every.checked=true;

                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.mon=2;
                  this.tue=3;
                  this.wed=4;
                  this.thu=5;
                  this.fri=6;
                  this.sat=7;
                  this.sun=8;
                 }
            }
          } 
        })

          
  
        }
       }
       else if(localStorage.getItem('No_of_menu')=='T'){
        if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
          //Snackbar
          this. myFunction_forerror();

        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          this.paris = document.getElementById('London');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
       
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this.lagunaserve.get_set_time('1',this.resid).subscribe((data:any)=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){

             
              this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.mon=2;
                 
                }
               if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.tue=3;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.wed=4;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.thu=5;
                  
                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.fri=6;
                  
                }
              if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sat=7;
                  
                }
              if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.sun=8;
                }
                if(this.arr_brak_check.msg.length==7){
                  this.every=document.getElementById('vehicle1');
                  this.every.checked=true;

                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.mon=2;
                  this.tue=3;
                  this.wed=4;
                  this.thu=5;
                  this.fri=6;
                  this.sat=7;
                  this.sun=8;
                 }
            }
          }
            })
            
           
  
        }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
    
      
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = true;
        this.paris = document.getElementById('London');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
        
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');
 
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
     
    

        this.ENTER = document.getElementById('defaultOpen3');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this.lagunaserve.get_set_time('1',this.resid).subscribe((data:any)=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){

           
            this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle2');
                this.mon_check.checked=true;
                this.mon=2;
               
              }
              if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle3');
                this.tue_check.checked=true;
                this.tue=3;
               
              }
            if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle4');
                this.wed_check.checked=true;
                this.wed=4;
               
              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle5');
                this.thu_check.checked=true;
                this.thu=5;
                
              }
            if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle6');
                this.fri_check.checked=true;
                this.fri=6;
                
              }
            if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle7');
                this.sat_check.checked=true;
                this.sat=7;
                
              }
            if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle8');
                this.sun_check.checked=true;
                this.sun=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle1');
                this.every.checked=true;

                this.mon_check=document.getElementById('vehicle2');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle3');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle4');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle5');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle6');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle7');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle8');
                this.sun_check.checked=true;
                this.mon=2;
                this.tue=3;
                this.wed=4;
                this.thu=5;
                this.fri=6;
                this.sat=7;
                this.sun=8;
               }
          }
        }
          })
          
        
       }


     }
    else if (e == 'Paris'){
      this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;
      // this.every=document.getElementById('vehicle1');
      // this.every.checked=false;
      // this.mon_check=document.getElementById('vehicle2');
      // this.mon_check.checked=false;
      // this.tue_check=document.getElementById('vehicle3');
      // this.tue_check.checked=false;
      // this.wed_check=document.getElementById('vehicle4');
      // this.wed_check.checked=false;
      // this.thu_check=document.getElementById('vehicle5');
      // this.thu_check.checked=false;
      // this.fri_check=document.getElementById('vehicle6');
      // this.fri_check.checked=false;
      // this.sat_check=document.getElementById('vehicle7');
      // this.sat_check.checked=false;
      // this.sun_check=document.getElementById('vehicle8');
      // this.sun_check.checked=false;

      console.log(this.v);


      this.break_sec.length=0;
      this.cove_top.length=0;

      this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
        console.log(data);
        this.cove_top=data;
       

       if(this.cove_top.msg.length!=0){

      
        for(let i=0;i<this.cove_top.msg.length;i++){
             if(this.cove_top.msg[i].menu_id==2){
                  
            
                 if(this.cove_top.msg[i].cover_page_url!=''){
                   this.launch_cover=this.cove_top.msg[i].cover_page_url;
                   this.launch_top=this.cove_top.msg[i].top_img_url;
                 }
                 else{
                  this.launch_cover="";
                  this.launch_top=""
                 }
              }
          }
        }
      })
       
      this.lagunaserve.get_sec_url(v1,this.resid).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){

        
        for(let i=0;i<this.break_sec.msg.length;i++)
        {
          
            if(this.break_sec.msg[i].sec_url!=''){
            this.launch_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.launch_sec="";
             
           }
            
        }
      }
  
      })

     if(localStorage.getItem('No_of_menu')=='O'){
      if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
        //Snackbar
        this. myFunction_forerror();

      }
     else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
      
       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active';
       this.PACK = document.getElementById('defaultOpen2');
       // this.PACK.className = 'active';
       this.PACK.style.background = '#f1f1f1';
       this.PACK.style.color = 'black';
     
       this.BIRTH = document.getElementById('defaultOpen');
       // this.PACK.className = 'active';
       this.BIRTH.style.background = '#f1f1f1';
       this.BIRTH.style.color = 'black';
   

       this.ENTER = document.getElementById('defaultOpen3');
       // this.PACK.className = 'active';
       this.ENTER.style.background = '#f1f1f1';
       this.ENTER.style.color = 'black';
       this.WALL = document.getElementById('defaultOpen1');
       // this.PACK.className = 'active';
       this.WALL.style.background = '#00477e';
       this.WALL.style.color = 'white';
       this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
         this.arr_brak_check=data;
         if(this.arr_brak_check.msg.length!=0){

         this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.launch_start;
              this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;
           
          }
           if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;
           
          }
          if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;
            
          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;
            
          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;
            
          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7){
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
  }

      })
      
     }
   
     }
    else if(localStorage.getItem('No_of_menu')=='T'){
     if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
           //Snackbar
           this. myFunction_forerror();

        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = true;
          this.tab4 = true;
          this.paris = document.getElementById('Paris');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
        
          this.BIRTH = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';

          this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
            console.log(data);
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){

            this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.launch_start;
              this.brunch_end=this.launch_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle22');
                this.mon_check.checked=true;
                this.mon_launch=2;
               
              }
               if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle32');
                this.tue_check.checked=true;
                this.tue_launch=3;
               
              }
               if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle42');
                this.wed_check.checked=true;
                this.wed_launch=4;
               
              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle52');
                this.thu_check.checked=true;
                this.thu_launch=5;
                
              }
               if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle62');
                this.fri_check.checked=true;
                this.fri_launch=6;
                
              }
              if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle72');
                this.sat_check.checked=true;
                this.sat_launch=7;
                
              }
             if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle82');
                this.sun_check.checked=true;
                this.sun_launch=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle12');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle22');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle32');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle42');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle52');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle62');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle72');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle82');
                this.sun_check.checked=true;
                this.mon_launch=2;
                this.tue_launch=3;
                this.wed_launch=4;
                this.thu_launch=5;
                this.fri_launch=6;
                this.sat_launch=7;
                this.sun_launch=8;
               }
        }
      }
          })
         
        }
      }
      else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = true;
        this.paris = document.getElementById('Paris');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
      
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
      
        this.BIRTH = document.getElementById('defaultOpen');
      
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
    

        this.ENTER = document.getElementById('defaultOpen3');
    
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen1');
        
        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
        this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
          this.arr_brak_check=data;
          if(this.arr_brak_check.msg.length!=0){
             this.launch_start=this.arr_brak_check.msg[0].start_time;
          this.launch_end=this.arr_brak_check.msg[0].end_time;
          this.brunch_start=this.launch_start;
          this.brunch_end=this.launch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.mon_launch=2;
             
            }
           if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.tue_launch=3;
             
            }
           if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.wed_launch=4;
             
            }
            if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.thu_launch=5;
              
            }
            if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.fri_launch=6;
              
            }
           if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sat_launch=7;
              
            }
           if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.sun_launch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle12');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.mon_launch=2;
              this.tue_launch=3;
              this.wed_launch=4;
              this.thu_launch=5;
              this.fri_launch=6;
              this.sat_launch=7;
              this.sun_launch=8;
             }
      }
    }
        })
      }
    }
    else if (e == 'Tokyo'){
      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;
      this.brunch_start='';
        this.brunch_end='';
      this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
        console.log(data);
        this.cove_top=data;
        if(this.cove_top.msg.length!=0){
        for(let i=0;i<this.cove_top.msg.length;i++){
             if(this.cove_top.msg[i].menu_id==3){
                  
            
                 if(this.cove_top.msg.length!=0){
                   this.dinner_cover=this.cove_top.msg[i].cover_page_url;
                   this.dinner_top=this.cove_top.msg[i].top_img_url;
                   this.dinner_menu=this.cove_top.msg[i].menu_url;
                 }
                 else{
                  this.dinner_cover="";
                  this.dinner_top="";
                  this.dinner_menu="";
                 }
              }
          }
        }
      })

      this.lagunaserve.get_sec_url(v1,this.resid).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){
        for(let i=0;i<this.break_sec.msg.length;i++)
        {
          if(this.break_sec.msg[i].sec_url!=''){
            this.dinner_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.dinner_sec="";

           }
        }
      }
  
      })
 
    
     
        if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
          //Snack Bar
          this. myFunction_forerror();

          }
          else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active';
            
            this.PACK = document.getElementById('defaultOpen1');
       
            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen');
     
            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';
        
    
            this.ENTER = document.getElementById('defaultOpen3');
    
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';
            this.WALL = document.getElementById('defaultOpen2');
    
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){

              
              this.dinner_start=this.arr_brak_check.msg[0].start_time;
              this.dinner_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.dinner_start;
                this.brunch_end=this.dinner_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.mon_dinner=2;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.tue_dinner=3;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.wed_dinner=4;
                 
                }
                if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.thu_dinner=5;
                  
                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.fri_dinner=6;
                  
                }
                if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sat_dinner=7;
                  
                }
               if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.sun_dinner=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle13');
                  this.every.checked=true;
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.mon_dinner=2;
                  this.tue_dinner=3;
                  this.wed_dinner=4;
                  this.thu_dinner=5;
                  this.fri_dinner=6;
                  this.sat_dinner=7;
                  this.sun_dinner=8;
                 }
          }
        }
            })
      
          }
        }
        else if(localStorage.getItem('No_of_menu')=='T')
         {
          if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
            //Snack Bar
           this. myFunction_forerror();

            }
            else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              this.paris = document.getElementById('Tokyo');
              this.paris.className = 'active';
              
              this.PACK = document.getElementById('defaultOpen1');
         
              this.PACK.style.background = '#f1f1f1';
              this.PACK.style.color = 'black';
              this.BIRTH = document.getElementById('defaultOpen');
       
              this.BIRTH.style.background = '#f1f1f1';
              this.BIRTH.style.color = 'black';
          
      
              this.ENTER = document.getElementById('defaultOpen3');
      
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';
              this.WALL = document.getElementById('defaultOpen2');
      
              this.WALL.style.background = '#00477e';
              this.WALL.style.color = 'white';
              this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
              this.arr_brak_check=data;
              console.log(data);
              if(this.arr_brak_check.msg.length!=0){

              
              this.dinner_start=this.arr_brak_check.msg[0].start_time;
              this.dinner_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.dinner_start;
              this.brunch_end=this.dinner_end;
                for(let i=0;i<this.arr_brak_check.msg.length;i++){
                  if(this.arr_brak_check.msg[i].month_day==2){
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.mon_dinner=2;
                   
                  }
                  if(this.arr_brak_check.msg[i].month_day==3){
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.tue_dinner=3;
                   
                  }
                   if(this.arr_brak_check.msg[i].month_day==4){
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.wed_dinner=4;
                   
                  }
                   if(this.arr_brak_check.msg[i].month_day==5){
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.thu_dinner=5;
                    
                  }
                  if(this.arr_brak_check.msg[i].month_day==6){
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.fri_dinner=6;
                    
                  }
                  if(this.arr_brak_check.msg[i].month_day==7){
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sat_dinner=7;
                    
                  }
                  if(this.arr_brak_check.msg[i].month_day==8){
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.sun_dinner=8;
                  }
                  if(this.arr_brak_check.msg.length==7) {
                    this.every=document.getElementById('vehicle13');
                    this.every.checked=true;
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.mon_dinner=2;
                    this.tue_dinner=3;
                    this.wed_dinner=4;
                    this.thu_dinner=5;
                    this.fri_dinner=6;
                    this.sat_dinner=7;
                    this.sun_dinner=8;
                   }
            }
          }
              })
        
            }
         }
         else if(localStorage.getItem('No_of_menu')=='U'){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = false;
          this.tab4 = true;
          this.paris = document.getElementById('Tokyo');
          this.paris.className = 'active';
          
          this.PACK = document.getElementById('defaultOpen1');
     
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen');
   
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
      
  
          this.ENTER = document.getElementById('defaultOpen3');
  
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen2');
  
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){

           
            this.dinner_start=this.arr_brak_check.msg[0].start_time;
            this.dinner_end=this.arr_brak_check.msg[0].end_time;
            this.brunch_start=this.dinner_start;
            this.brunch_end=this.dinner_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle23');
                this.mon_check.checked=true;
                this.mon_dinner=2;
               
              }
             if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle33');
                this.tue_check.checked=true;
                this.tue_dinner=3;
               
              }
              if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle43');
                this.wed_check.checked=true;
                this.wed_dinner=4;
               
              }
             if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle53');
                this.thu_check.checked=true;
                this.thu_dinner=5;
                
              }
              if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle63');
                this.fri_check.checked=true;
                this.fri_dinner=6;
                
              }
             if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle73');
                this.sat_check.checked=true;
                this.sat_dinner=7;
                
              }
             if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle83');
                this.sun_check.checked=true;
                this.sun_dinner=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle13');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle23');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle33');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle43');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle53');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle63');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle73');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle83');
                this.sun_check.checked=true;
                this.mon_dinner=2;
                this.tue_dinner=3;
                this.wed_dinner=4;
                this.thu_dinner=5;
                this.fri_dinner=6;
                this.sat_dinner=7;
                this.sun_dinner=8;
               }
        }
      }
          })
    
         }
      
     
    }
    else if (e == 'Laguna'){
      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;
      this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
        console.log(data);
        this.cove_top=data;
        if(this.cove_top.msg.length!=0){

       
        for(let i=0;i<this.cove_top.msg.length;i++){
             if(this.cove_top.msg[i].menu_id==4){
                  
            
                 if(this.cove_top.msg.length!=0){
                   this.brunch_cover=this.cove_top.msg[i].cover_page_url;
                   this.brunch_top=this.cove_top.msg[i].top_img_url;
                 }
                 else{
                  this.brunch_cover="";
                  this.brunch_top=""
                 }
              }
          }
        }
      })
      this.lagunaserve.get_sec_url(v1,this.resid).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){

        
        for(let i=0;i<this.break_sec.msg.length;i++)
        {
          if(this.break_sec.msg[i].sec_url!=''){
            this.brunch_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.brunch_sec="";

           }
        }
      }
  
      })
      console.log(this.v);
      this.every=document.getElementById('vehicle1');
      this.every.checked=false;
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=false;
   

    if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
            //Snackbar
           this. myFunction_forerror();

          }
         else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;
        
          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
     
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
        
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
          this.ENTER = document.getElementById('defaultOpen');
        
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
      
  
          this.WALL = document.getElementById('defaultOpen3');
         
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){
            this.Brunch_start=this.arr_brak_check.msg[0].start_time;
            this.Brunch_end=this.arr_brak_check.msg[0].end_time;
            this.brunch_start=this.Brunch_start;
            this.brunch_end=this.Brunch_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.mon_brunch=2;
               
              }
              if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.tue_brunch=3;
               
              }
              if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.wed_brunch=4;
               
              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.thu_brunch=5;
                
              }
           if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.fri_brunch=6;
                
              }
           if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sat_brunch=7;
                
              }
            if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.sun_brunch=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle14');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.mon_brunch=2;
                this.tue_brunch=3;
                this.wed_brunch=4;
                this.thu_brunch=5;
                this.fri_brunch=6;
                this.sat_brunch=7;
                this.sun_brunch=8;
               }
        }
      }
          })
         }
        }
      else if(localStorage.getItem('No_of_menu')=='T'){
      if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
        //Snackbar
        this. myFunction_forerror();

      }
     else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
      this.tab1 = true;
      this.tab2 = true;
      this.tab3 = true;
      this.tab4 = false;
    
      this.paris = document.getElementById('Laguna');
      this.paris.className = 'active';
      this.PACK = document.getElementById('defaultOpen2');
 
      this.PACK.style.background = '#f1f1f1';
      this.PACK.style.color = 'black';
      this.BIRTH = document.getElementById('defaultOpen1');
    
      this.BIRTH.style.background = '#f1f1f1';
      this.BIRTH.style.color = 'black';
      this.ENTER = document.getElementById('defaultOpen');
    
      this.ENTER.style.background = '#f1f1f1';
      this.ENTER.style.color = 'black';
  

      this.WALL = document.getElementById('defaultOpen3');
     
      this.WALL.style.background = '#00477e';
      this.WALL.style.color = 'white';
      this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
        this.arr_brak_check=data;
        console.log(data)
        if( this.arr_brak_check.msg.length!=0){
       
        this.Brunch_start=this.arr_brak_check.msg[0].start_time;
        this.Brunch_end=this.arr_brak_check.msg[0].end_time;
        this.brunch_start=this.Brunch_start;
        this.brunch_end=this.Brunch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle24');
            this.mon_check.checked=true;
            this.mon_brunch=2;
           
          }
          if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle34');
            this.tue_check.checked=true;
            this.tue_brunch=3;
           
          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle44');
            this.wed_check.checked=true;
            this.wed_brunch=4;
           
          }
        if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle54');
            this.thu_check.checked=true;
            this.thu_brunch=5;
            
          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle64');
            this.fri_check.checked=true;
            this.fri_brunch=6;
            
          }
         if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle74');
            this.sat_check.checked=true;
            this.sat_brunch=7;
            
          }
       if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle84');
            this.sun_check.checked=true;
            this.sun_brunch=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle14');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle24');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle34');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle44');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle54');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle64');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle74');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle84');
            this.sun_check.checked=true;
            this.mon_brunch=2;
            this.tue_brunch=3;
            this.wed_brunch=4;
            this.thu_brunch=5;
            this.fri_brunch=6;
            this.sat_brunch=7;
            this.sun_brunch=8;
           }
    }
       
  }
      })
  
     }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = false;
      
        this.paris = document.getElementById('Laguna');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
   
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');
      
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
        this.ENTER = document.getElementById('defaultOpen');
      
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
    
  
        this.WALL = document.getElementById('defaultOpen3');
       
        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
        this.lagunaserve.get_set_time(v1,this.resid).subscribe(data=>{
          this.arr_brak_check=data;
          this.Brunch_start=this.arr_brak_check.msg[0].start_time;
            this.Brunch_end=this.arr_brak_check.msg[0].end_time;
            this.brunch_start=this.Brunch_start;
            this.brunch_end=this.Brunch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.mon_brunch=2;
             
            }
          if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.tue_brunch=3;
             
            }
             if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.wed_brunch=4;
             
            }
          if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.thu_brunch=5;
              
            }
         if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.fri_brunch=6;
              
            }
          if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sat_brunch=7;
              
            }
            if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.sun_brunch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle14');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.mon_brunch=2;
              this.tue_brunch=3;
              this.wed_brunch=4;
              this.thu_brunch=5;
              this.fri_brunch=6;
              this.sat_brunch=7;
              this.sun_brunch=8;
             }
      }
        })
       }
    }
    

  }

  // For submitting data of Breakfast tab
  opensecondtab(e: any) {
    if (e == 'London') {
      this.Packages = true;
      this.PACK = document.getElementById('Tokyo');
      this.PACK.className = 'active';
      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      // this.PACK=document.getElementById('packages');
      // this.PACK.className='active';

    }
    else if (e == 'Tokyo') {
      console.log('asdasd');
      this.Packages = true;

      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      this.BIRTH = document.getElementById('Laguna');
      this.BIRTH.className = 'active';
    }
    else if (e == 'Laguna') {
      this.Packages = true;

      this.birth = true;
      this.entertainmen = false;
      this.wall = false;
      this.window = true

      this.ENTER = document.getElementById('Shrewsbury');
      this.ENTER.className = 'active';
    }
    //   else if(e=='wallSignHolder'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=false;
    // this.window=true

    //     this.PACK=document.getElementById('windowCling');
    //     this.PACK.className='active';
    //   }
    //   else if(e=='windowCling'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=true;
    // this.window=false;

    // this.PACK=document.getElementById('packages');
    // this.PACK.className='active';
    // }
  }
  Finish() {
  }
  checkbreakfast(event:any){
    if(event.target.checked){
              this.break_check='Y';
              this.b_url=false;
    }
    else{
      this.break_check='N';
      this.b_url=true;
    }
  }
  opennextab(COVERPAGEURL: any, TOPIMAGEURL: any,MENUURL:any,SECTIONURL:any,hidevalue:any,v1:any,v2:any) {
    if(localStorage.getItem('breakfast')==''){
      this.storevalue.length=0;
      this.storevalue.push({
      "coverurl": COVERPAGEURL,
      "topurl": TOPIMAGEURL,
      "MenuUrl":MENUURL,
      "SectionUrl":SECTIONURL,
      "restaurant_id":this.resid,
      "menu_id":hidevalue,
      "break_check":this.break_check,
      "start_time":this.brunch_start,
      "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
    });
      console.log(this.storevalue);
  
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
      this.success=data;
      console.log("data");
       if(this.success.suc==1){
          this.myFunction();
         
       }
    })
    }
    else{
  
   console.log(this.v);
    localStorage.setItem('breakfast','');
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;

        // const formData = new FormData();
        // formData.append('file', this.breakfastcoverimage);
        // formData.append('ac_id', COVERPAGEURL)
       
        // for (let img of this.multipleImages) {
        //   formData.append('files', img);
        // }
    
        // this.http.post<any>('http://localhost:3000/file', formData).subscribe(
        //   (res) => console.log(res),
        //   (err) => console.log(err)
        // );

     this.storevalue.push({
      "coverurl": COVERPAGEURL,
      "topurl": TOPIMAGEURL,
      "MenuUrl":MENUURL,
      "SectionUrl":SECTIONURL,
      "restaurant_id":this.resid,
      "menu_id":hidevalue,
      "break_check":this.break_check,
      "start_time":this.brunch_start,
      "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
    });
      console.log(this.storevalue);
  
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
      this.success=data;
      console.log("data");
       if(this.success.suc==1){
          this.myFunction();
         
       }
    })
    console.log(this.storevalue);
    
      }
      else{
       
        this. myFunction_forerror();

      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){  
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": COVERPAGEURL,
         "topurl": TOPIMAGEURL,
         "MenuUrl":MENUURL,
         "SectionUrl":SECTIONURL,
         "restaurant_id":this.resid,
         "menu_id":hidevalue,
         "break_check":this.break_check,
         "start_time":this.brunch_start,
      "end_time":this.brunch_end,
         "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
       });
   
     
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         console.log("data");
          if(this.success.suc==1){
             this.myFunction();
            
          }
       })
       console.log(this.storevalue);
     

      }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": COVERPAGEURL,
         "topurl": TOPIMAGEURL,
         "MenuUrl":MENUURL,
         "SectionUrl":SECTIONURL,
         "restaurant_id":this.resid,
         "menu_id":hidevalue,
         "break_check":this.break_check,
         "start_time":this.brunch_start,
      "end_time":this.brunch_end,
         "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
       });
   
     
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         console.log("data");
          if(this.success.suc==1){
             this.myFunction();
            
          }
       })
       console.log(this.storevalue);

      }
      else{
        //snackbar
        this. myFunction_forerror();

      }
    }
    else {
      this.v=3
      this.storevalue.length=0;
      this.storevalue.push({
       "coverurl": COVERPAGEURL,
       "topurl": TOPIMAGEURL,
       "MenuUrl":MENUURL,
       "SectionUrl":SECTIONURL,
       "restaurant_id":this.resid,
       "menu_id":hidevalue,
       "break_check":this.break_check,
       "start_time":this.brunch_start,
      "end_time":this.brunch_end,
       "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
     });
 
   
     this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
       console.log(data);
       this.success=data;
       console.log("data");
        if(this.success.suc==1){
           this.myFunction();
        
        }
     })
     console.log(this.storevalue);
  
    }
        
     }

    this.brunch_end=0;
    this.brunch_start=0;
    
  

  }

  // For Submitting the data of Dinner
  opennextab2(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    if( localStorage.getItem('dinner')==''){
      this.storevalue.length=0;
      this.storevalue.push({
            "coverurl": v4,
            "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":this.brunch_start,
        "end_time":this.brunch_end,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
  
          });
          console.log(this.storevalue);
          this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
            console.log(data);
            this.success=data;
            if(this.success.suc==1){
              this.myFunction();
           
            }
          })
    }
  
    else{

    
    localStorage.setItem('dinner','');
    if(localStorage.getItem('No_of_menu')=='O'){

      if(this.v==0){
    


        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
              "coverurl": v4,
              "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
              "restaurant_id":this.resid,
              "menu_id":v5,
              "break_check":this.brunch_check,
              "start_time":this.brunch_start,
              "end_time":this.brunch_end,
             "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
    
            });
            console.log(this.storevalue);
            this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
              console.log(data);
              this.success=data;
              if(this.success.suc==1){
                this.myFunction();
                // this.bkmenu=document.getElementById('tokyo');
                // this.bkmenu.checked=false;
                // this.brunch_check='N';
                // this.bkmenu=document.getElementById('url_topbrunch');
                // this.bkmenu.value='';
                // this.bkmenu=document.getElementById('url_menubrunch');
                //   this.bkmenu.value='';
                //   this.bkmenu=document.getElementById('url_sectionbrunch');
                //   this.bkmenu.value='';
                //   this.bkmenu=document.getElementById('url_brunch');
                //   this.bkmenu.value='';
                //   this.bkmenu=document.getElementById('start_brunch');
                //   this.bkmenu.value='';
                //   this.bkmenu=document.getElementById('end_brunch');
                //   this.bkmenu.value='';
    
              }
            })
            // this.mon_check=document.getElementById('vehicle13');
            // this.mon_check.checked=false;
            // this.mon_check=document.getElementById('vehicle23');
            // this.mon_check.checked=false;
            // this.tue_check=document.getElementById('vehicle33');
            // this.tue_check.checked=false;
            // this.wed_check=document.getElementById('vehicle43');
            // this.wed_check.checked=false;
            // this.thu_check=document.getElementById('vehicle53');
            // this.thu_check.checked=false;
            // this.fri_check=document.getElementById('vehicle63');
            // this.fri_check.checked=false;
            // this.sat_check=document.getElementById('vehicle73');
            // this.sat_check.checked=false;
            // this.sun_check=document.getElementById('vehicle83');
            // this.sun_check.checked=false;
            // this.mon_dinner=0;
            // this.tue_dinner=0;
            // this.wed_dinner=0;
            // this.thu_dinner=0;
            // this.fri_dinner=0;
            // this.sat_dinner=0;
            // this.sun_dinner=0;
      }
      else{
        //SnackBar
        this. myFunction_forerror();

      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
         if(this.v==0){
           this.v=1;
           this.storevalue.length=0;
           this.storevalue.push({
                 "coverurl": v4,
                 "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
                 "restaurant_id":this.resid,
                 "menu_id":v5,
                 "break_check":this.brunch_check,
                 "start_time":this.brunch_start,
             "end_time":this.brunch_end,
             "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
       
               });
               console.log(this.storevalue);
               this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
                 console.log(data);
                 this.success=data;
                 if(this.success.suc==1){
                   this.myFunction();
                
                 }
               })
             
         }
         else if(this.v==1){
           this.v=2;
           this.storevalue.length=0;
           this.storevalue.push({
                 "coverurl": v4,
                 "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
                 "restaurant_id":this.resid,
                 "menu_id":v5,
                 "break_check":this.brunch_check,
                 "start_time":this.brunch_start,
                 "end_time":this.brunch_end,
             "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
       
               });
               console.log(this.storevalue);
               this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
                 console.log(data);
                 this.success=data;
                 if(this.success.suc==1){
                   this.myFunction();
                  
                 }
               })
              
             
         }
         else {
          this. myFunction_forerror();

           //SnackBar
         }
    }
    else {
       this.v=3;
       this.storevalue.length=0;
       this.storevalue.push({
             "coverurl": v4,
             "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
             "restaurant_id":this.resid,
             "menu_id":v5,
             "break_check":this.brunch_check,
             "start_time":this.brunch_start,
             "end_time":this.brunch_end,
         "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
   
           });
           console.log(this.storevalue);
           this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
             console.log(data);
             this.success=data;
             if(this.success.suc==1){
               this.myFunction();
               this.bkmenu=document.getElementById('tokyo');
               this.bkmenu.checked=false;
               this.brunch_check='N';
               this.bkmenu=document.getElementById('url_topbrunch');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('url_menubrunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('url_sectionbrunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('url_brunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('start_brunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('end_brunch');
                 this.bkmenu.value='';
   
             }
           })
           this.mon_check=document.getElementById('vehicle13');
           this.mon_check.checked=false;
           this.mon_check=document.getElementById('vehicle23');
           this.mon_check.checked=false;
           this.tue_check=document.getElementById('vehicle33');
           this.tue_check.checked=false;
           this.wed_check=document.getElementById('vehicle43');
           this.wed_check.checked=false;
           this.thu_check=document.getElementById('vehicle53');
           this.thu_check.checked=false;
           this.fri_check=document.getElementById('vehicle63');
           this.fri_check.checked=false;
           this.sat_check=document.getElementById('vehicle73');
           this.sat_check.checked=false;
           this.sun_check=document.getElementById('vehicle83');
           this.sun_check.checked=false;
           this.mon_dinner=0;
           this.tue_dinner=0;
           this.wed_dinner=0;
           this.thu_dinner=0;
           this.fri_dinner=0;
           this.sat_dinner=0;
           this.sun_dinner=0;
    }
  }
   this.brunch_start=0;
    this.brunch_end=0;
  
  }

  launchchaked(event:any){
       if(event.target.checked){
         this.launch_check='Y';
         this.lcc_url=false;
        
       }
       else{
        this.launch_check='N';
        this.lcc_url=true;


       }
  }

// Fot Submitting data of Launch Tab
  opennextab1(e: any, v1: any, v2: any,v4:any,v5:any,v6:any,v7:any,v8:any) {

    if(localStorage.getItem('launch')==''){
      this.storevalue.length=0;
           this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":this.brunch_start,
      "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
          
          }
        })
    }
    else{
   
    localStorage.setItem('launch','');

    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
           this.v=1
           this.storevalue.length=0;
           this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":this.brunch_start,
      "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
          
          }
        })
       
      }
      else{
   //Snackbar
   this. myFunction_forerror();

      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
    if(this.v==0){
           this.v=1
           this.storevalue.length=0;
           this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":this.brunch_start,
          "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
           
          }
        })
        
          }
          else if(this.v==1){
             this.v=2;
             this.storevalue.length=0;
          this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":this.brunch_start,
      "end_time":this.brunch_end,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            
          }
        })
       
          }
         else{
             //SnackBar
           this. myFunction_forerror();
          }
    }
    else {
      this.v=3;
      this.storevalue.length=0;
      this.storevalue.push({
      "coverurl": v1,
      "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":this.brunch_start,
      "end_time":this.brunch_end,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
    this.success=0;
    console.log(this.storevalue);
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
      this.success=data;
      if(this.success.suc==1){
        this.myFunction();
        // this.bkmenu=document.getElementById('paris');
        // this.bkmenu.checked=false;
        // this.launch_check='N';
        // this.bkmenu=document.getElementById('url_launch');
        // this.bkmenu.value='';
        // this.bkmenu=document.getElementById('url_launchtop');
        //   this.bkmenu.value='';
        //   this.bkmenu=document.getElementById('url_launchmenu');
        //   this.bkmenu.value='';
        //   this.bkmenu=document.getElementById('url_launchsection');
        //   this.bkmenu.value='';
        //   this.bkmenu=document.getElementById('start_launch');
        //   this.bkmenu.value='';
        //   this.bkmenu=document.getElementById('end_launch');
        //   this.bkmenu.value='';
      }
    })
    // this.every=document.getElementById('vehicle12');
    // this.every.checked=false;
    // this.mon_check=document.getElementById('vehicle22');
    // this.mon_check.checked=false;
    // this.tue_check=document.getElementById('vehicle32');
    // this.tue_check.checked=false;
    // this.wed_check=document.getElementById('vehicle42');
    // this.wed_check.checked=false;
    // this.thu_check=document.getElementById('vehicle52');
    // this.thu_check.checked=false;
    // this.fri_check=document.getElementById('vehicle62');
    // this.fri_check.checked=false;
    // this.sat_check=document.getElementById('vehicle72');
    // this.sat_check.checked=false;
    // this.sun_check=document.getElementById('vehicle82');
    // this.sun_check.checked=false;
    // this.mon_launch=0;
    // this.tue_launch=0;
    // this.wed_launch=0;
    // this.thu_launch=0;
    // this.fri_launch=0;
    // this.sat_launch=0;
    // this.sun_launch=0;
    }
     
  }
    this.brunch_start=0;
    this.brunch_end=0;
    
  }
  checkbrunch(event:any){
    if(event.target.checked){
      this.brunch_check='Y';
      this.d_url=false;
    }
    else{
     this.brunch_check='N';
     this.d_url=true;
     
    }
  }
  checkdinner(event:any){
     
    if(event.target.checked){
      this.dinner_check='Y';
      this.br_url=false;
    }
    else{
     this.dinner_check='N';
     this.br_url=true;


    }
  }
  // For Submitting the data of Brunch
 opennextab3(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {


  if(localStorage.getItem('brunch')==''){
    this.storevalue.length=0;
         this.storevalue.push({
          "coverurl": v3,
          "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
          "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":this.brunch_start,
          "end_time":this.brunch_end,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

        });
        console.log(this.storevalue);
        this.success=0
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            }
        })
  }
  else{
  localStorage.setItem('brunch','');

   console.log(v6,v7);
    if(localStorage.getItem('No_of_menu')=='O'){
       if(this.v==0){
         this.v=1;
         this.storevalue.length=0;
         this.storevalue.push({
          "coverurl": v3,
          "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
          "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":this.brunch_start,
          "end_time":this.brunch_end,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

        });
        console.log(this.storevalue);
        this.success=0
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
          
          }
        })
       
       }
       else if(this.v==1){
         //snackBar
         this. myFunction_forerror();

       }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":this.brunch_start,
         "end_time":this.brunch_end,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
         
         }
       })
     
      }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":this.brunch_start,
         "end_time":this.brunch_start,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
          //  this.bkmenu=document.getElementById('laguna');
          //  this.bkmenu.checked=false;
          //  this.dinner_check='N';
          //  this.bkmenu=document.getElementById('url_dinner');
          //  this.bkmenu.value='';
          //  this.bkmenu=document.getElementById('url_dinnertop');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('url_dinnermenu');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('url_section');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('start_dinner');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('end_dinner');
          //    this.bkmenu.value='';
         }
       })
      //  this.mon_check=document.getElementById('vehicle14');
      //  this.mon_check.checked=false;
      //  this.mon_check=document.getElementById('vehicle24');
      //  this.mon_check.checked=false;
      //  this.tue_check=document.getElementById('vehicle34');
      //  this.tue_check.checked=false;
      //  this.wed_check=document.getElementById('vehicle44');
      //  this.wed_check.checked=false;
      //  this.thu_check=document.getElementById('vehicle54');
      //  this.thu_check.checked=false;
      //  this.fri_check=document.getElementById('vehicle64');
      //  this.fri_check.checked=false;
      //  this.sat_check=document.getElementById('vehicle74');
      //  this.sat_check.checked=false;
      //  this.sun_check=document.getElementById('vehicle84');
      //  this.sun_check.checked=false;
      //  this.mon_brunch=0;
      //  this.tue_brunch=0;
      //  this.wed_brunch=0;
      //  this.thu_brunch=0;
      //  this.fri_brunch=0;
      //  this.sat_brunch=0;
      //  this.sun_brunch=0;
      }
      else{
        //Snackbar
        this. myFunction_forerror();

      }
    }
    else {
      this.v=3;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":this.brunch_start,
         "end_time":this.brunch_end,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
          //  this.bkmenu=document.getElementById('laguna');
          //  this.bkmenu.checked=false;
          //  this.dinner_check='N';
          //  this.bkmenu=document.getElementById('url_dinner');
          //  this.bkmenu.value='';
          //  this.bkmenu=document.getElementById('url_dinnertop');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('url_dinnermenu');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('url_section');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('start_dinner');
          //    this.bkmenu.value='';
          //    this.bkmenu=document.getElementById('end_dinner');
          //    this.bkmenu.value='';
         }
       })
      //  this.mon_check=document.getElementById('vehicle14');
      //  this.mon_check.checked=false;
      //  this.mon_check=document.getElementById('vehicle24');
      //  this.mon_check.checked=false;
      //  this.tue_check=document.getElementById('vehicle34');
      //  this.tue_check.checked=false;
      //  this.wed_check=document.getElementById('vehicle44');
      //  this.wed_check.checked=false;
      //  this.thu_check=document.getElementById('vehicle54');
      //  this.thu_check.checked=false;
      //  this.fri_check=document.getElementById('vehicle64');
      //  this.fri_check.checked=false;
      //  this.sat_check=document.getElementById('vehicle74');
      //  this.sat_check.checked=false;
      //  this.sun_check=document.getElementById('vehicle84');
      //  this.sun_check.checked=false;
      //  this.mon_brunch=0;
      //  this.tue_brunch=0;
      //  this.wed_brunch=0;
      //  this.thu_brunch=0;
      //  this.fri_brunch=0;
      //  this.sat_brunch=0;
      //  this.sun_brunch=0;
    }
  }
    this.brunch_start=0;
    this.brunch_end=0; 
   
  }
  changetopImage(event: any) {

  }

  TOPIMAGECHECKED(event: any) {

  }
  changemenu(event: any) {

  }
  checkMENU(event: any) {

  }
  // For breakfastcoverimage
  Breakfast(event: any) {
    console.log(event.target.files[0].name);
    // this.breakfastcoverimage = event.target.files[0];

    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
   
    // console.log(this.breakfastcoverimage);
    
    // this._data.submit_breakfast_menu_setup(this.breakfastcoverimage).subscribe(data=>{
    //   console.log(data);
    // })
   
  }
  
  // For breakfasttop image
  changeBreak(event: any) {
    console.log(event.target.files[0].name);
    this.breakfasttopimage = event.target.files[0];
    console.log(this.breakfastcoverimage);

  }
  //For breakfastmenuimage
  changeBreakmenubreak(event: any) {
    // console.log(event.target.files.length);
    var mul_img = new Array();
    for(let i =0; i < event.target.files.length; i++){
      // mul_img.push({'File':event.target.files[i]});
      mul_img.push(event.target.files[i]);
    
    }
    // console.log(mul_img);
    this.breakfastmenuimage = mul_img;
    // this.breakfastmenuimage = event.target.files;
    // console.log(this.breakfastmenuimage);
    this._data.submit_breakfast_menu(this.breakfastmenuimage).subscribe(data=>{
        console.log(data);
      })

  }
    // For breakfast section image
  changeBreakmenubreak1(event:any){
    this.breakfastsectionimage=event.target.files;
  }
   // Event of launch cover image

  changelaunchcoverpage(event: any) {
    console.log(event.target.files[0]);
    this.launchcoverimage = event.target.files[0];


  }
   // Event of launch top image

  changelaunchtopimage(event: any) {
    console.log(event.target.files[0]);
    this.launchtopimage = event.target.files[0];
  }
   // Event of launch menu image

  changelaunchtmenuimage(event: any) {
    console.log((event.target.files));
    this.launchmenuimage = event.target.files;

  }
   // Event of launch section image

  changelaunchsectionbreak1(event:any){
    console.log((event.target.files));
    this.launchsectionimage = event.target.files;
  }
   // Event of brunch section image
  changebrunchsectionbreak1(event:any){
    this.branchsectionimage=event.target.files;
  }
    // Event of brumch menu image
  changebrunchmenubreak1(event:any){
    this.branchmenuimage=event.target.files;
  }
    // Event of brunch top image
  brunchtopimage(event:any){
    this.branchtopimage=event.target.files[0];

  }
    // Event of brunch cover image
  brunchcoverimage(event:any){
        this.branchcoverimage=event.target.files[0];
  }
   // Event of dinner section image
  changedinnersectionimage(event:any){
     this.dinnersectionimage=event.target.files;
  }
    // Event of dinner cover image
  dinnerchangecoverimage(event:any){
    // dinnersectionimage:any;
  this.dinnercoverimage=event.target.diles[0];
 
  }
    // Event of dinner top image
  dinnerchangetopimage(event:any){
    this.dinnertopimage=event.target.files[0];
 
  }
  // Event of dinner menu image
  changedinnermenuimage(event:any){
    this.dinnermenuimage=event.target.files;
  }
  // For Breakfastmenu display day and time
  checkday(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');

      if(event.target.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    
    }
  else if(e=='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle3');
      if(event.target.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle4');
      if(event.target.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle5');
      if(event.target.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    else if(e=='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle6');
      if(event.target.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle7');
     if(event.target.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
   else if(e=='sun'){
       
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle8');
      if(event.target.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
   else if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(event.target.checked){
        console.log("asdsadad")
  
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        console.log("asdsadadfailed")
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
   console.log(this.mon,this.tue,this.wed,this.thu,this.fri,this.sat,this.sun)
  }
//For Launch day time check
  checkeveday(event:any,e:any){
    
    if(e ==='monday'){
        this.mon_check=document.getElementById('vehicle22');

      if(event.target.checked){
        this.mon_launch=2;
        console.log(this.mon);
      }
      else{
        this.mon_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    
    }
  else if(e ==='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle32');
      if(event.target.checked){
        this.tue_launch=3;
      }
      else{
        this.tue_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e ==='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle42');
      if(event.target.checked){
        this.wed_launch=4;
      }
      else{
        this.wed_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle52');
      if(event.target.checked){
        this.thu_launch=5
      }
      else{
        this.thu_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
    else if(e==='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle62');
      if(event.target.checked){
        this.fri_launch=6;
      }
      else{
        this.fri_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle72');
     if(event.target.checked){
      this.sat_launch=7;
     }
     else{
       this.sat_launch=0;
       this.every=document.getElementById('vehicle12');
       this.every.checked=false;
     }

    }
   else if(e==='sun'){
       
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle82');
      if(event.target.checked){
               this.sun_launch=8;
      }
      else{
        this.sun_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }

    }
   else if(e ==='everyday'){
      this.every=document.getElementById('vehicle12');
      if(event.target.checked){
        console.log("asdsadad")
  
      this.mon_check=document.getElementById('vehicle22');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle32');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle42');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle52');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle62');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle72');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle82');
      this.sun_check.checked=true;
      this.mon_launch=2;
      this.tue_launch=3;
      this.wed_launch=4;
      this.thu_launch=5;
      this.fri_launch=6;
      this.sat_launch=7;
      this.sun_launch=8
      }
       else{
        console.log("asdsadadfailed")
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
       }

    }
   console.log(this.mon_launch,this.tue_launch,this.wed_launch,this.thu_launch,this.fri_launch,this.sat_launch,this.sun_launch)
  }


  checklaunch(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');
      // this.mon_check.checked=true;
      if(this.mon_check.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    
    }
 if(e=='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle3');
      if(this.tue_check.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle4');
      if(this.wed_check.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     if(e=='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle5');
      if(this.thu_check.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
   if(e=='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle6');
      if(this.fri_check.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle7');
     if(this.sat_check.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
  if(e=='sun'){
        this.sun=8
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle8');
      if(this.sun_check.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
    if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(this.every.checked){

  
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
   console.log(this.mon,this.tue,this.wed,this.thu,this.fri,this.sat,this.sun)
  }
  //For dinner day and time
  checkdinnerday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle23');

    if(event.target.checked){
      this.mon_dinner=2;
      console.log(this.mon);
    }
    else{
      this.mon_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  
  }
else if(e ==='tuesday'){
    
    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle33');
    if(event.target.checked){
      this.tue_dinner=3;
    }
    else{
      this.tue_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle43');
    if(event.target.checked){
      this.wed_dinner=4;
    }
    else{
      this.wed_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){
  
    console.log(".mon");
    this.thu_check=document.getElementById('vehicle53');
    if(event.target.checked){
      this.thu_dinner=5
    }
    else{
      this.thu_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){
   
    console.log(".mon");
    this.fri_check=document.getElementById('vehicle63');
    if(event.target.checked){
      this.fri_dinner=6;
    }
    else{
      this.fri_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle73');
   if(event.target.checked){
    this.sat_dinner=7;
   }
   else{
     this.sat_dinner=0;
     this.every=document.getElementById('vehicle13');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){
     
    console.log(".mon");
    this.sun_check=document.getElementById('vehicle83');
    if(event.target.checked){
             this.sun_dinner=8;
    }
    else{
      this.sun_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle13');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle23');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle33');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle43');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle53');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle63');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle73');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle83');
    this.sun_check.checked=true;
    this.mon_dinner=2;
    this.tue_dinner=3;
    this.wed_dinner=4;
    this.thu_dinner=5;
    this.fri_dinner=6;
    this.sat_dinner=7;
    this.sun_dinner=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle23');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle33');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle43');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle53');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle63');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle73');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle83');
      this.sun_check.checked=false;
      this.mon_dinner=0;
      this.tue_dinner=0;
      this.wed_dinner=0;
      this.thu_dinner=0;
      this.fri_dinner=0;
      this.sat_dinner=0;
      this.sun_dinner=0;
     }

  }
 console.log(this.mon_dinner,this.tue_dinner,this.wed_dinner,this.thu_dinner,this.fri_dinner,this.sat_dinner,this.sun_dinner)
  }
  //For brunch day and time
  checkbrucnhday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle24');

    if(event.target.checked){
      this.mon_brunch=2;
      // console.log(this.mon);
    }
    else{
      this.mon_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  
  }
else if(e ==='tuesday'){
    
    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle34');
    if(event.target.checked){
      this.tue_brunch=3;
    }
    else{
      this.tue_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle44');
    if(event.target.checked){
      this.wed_brunch=4;
    }
    else{
      this.wed_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){
  
    console.log(".mon");
    this.thu_check=document.getElementById('vehicle54');
    if(event.target.checked){
      this.thu_brunch=5
    }
    else{
      this.thu_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){
   
    console.log(".mon");
    this.fri_check=document.getElementById('vehicle64');
    if(event.target.checked){
      this.fri_brunch=6;
    }
    else{
      this.fri_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle74');
   if(event.target.checked){
    this.sat_brunch=7;
   }
   else{
     this.sat_brunch=0;
     this.every=document.getElementById('vehicle14');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){
     
    console.log(".mon");
    this.sun_check=document.getElementById('vehicle84');
    if(event.target.checked){
             this.sun_brunch=8;
    }
    else{
      this.sun_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle14');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle24');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle34');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle44');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle54');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle64');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle74');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle84');
    this.sun_check.checked=true;
    this.mon_brunch=2;
    this.tue_brunch=3;
    this.wed_brunch=4;
    this.thu_brunch=5;
    this.fri_brunch=6;
    this.sat_brunch=7;
    this.sun_brunch=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle24');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle34');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle44');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle54');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle64');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle74');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle84');
      this.sun_check.checked=false;
      this.mon_brunch=0;
      this.tue_brunch=0;
      this.wed_brunch=0;
      this.thu_brunch=0;
      this.fri_brunch=0;
      this.sat_brunch=0;
      this.sun_brunch=0;
     }

  }
 console.log(this.mon_brunch,this.tue_brunch,this.wed_brunch,this.thu_brunch,this.fri_brunch,this.sat_brunch,this.sun_brunch)
  }

  // For success snackbar
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    this.x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  } 
   // For success snackbar
   myFunction_forerror() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar1");
  
    // Add the "show" class to DIV
    this.x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  } 
  //Previous button
  goprev(e:any){
    if(e=='paris'){
      this.tab1=false;
      this.tab2=true;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('London');
      this.paris.className = 'active';
    }
    else if(e=='tokyo'){
      this.tab1=true;
      this.tab2=false;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('Paris');
      this.paris.className = 'active';
    }
    else if(e=='laguna'){
      this.tab1=true;
      this.tab2=true;
      this.tab3=false;
      this.tab4=true;
      this.paris = document.getElementById('Tokyo');
      this.paris.className = 'active';
    }
  }

  // For Checking null
  checkvalidity(event:any,e:any){
    //For Checking null in breakfast  Tab
    if(event.target.id=="url"){
        if(event.target.value==''){
          this.launch_url=true;
          this.bc_url=true;
        }
        else{
          this.launch_url=false;
          this.bc_url=false;

        }
    }
    else if(event.target.id=="url_top"){
             
      if(event.target.value==''){
        this.launch_url=true;
        this.bt_url=true;
      }
      else{
        this.launch_url=false;
        this.bt_url=false;

      }
    }
    else if(event.target.id=="url_menu"){
      if(event.target.value==''){
        this.launch_url=true;
        this.bm_url=true;
      }
      else{
        this.launch_url=false;
        this.bm_url=false;

      }
    }
    else if(event.target.id=="Url_section"){
      if(event.target.value==''){
        this.launch_url=true;
        this.bs_url=true;
      }
      else{
        this.launch_url=false;
        this.bs_url=false;

      }
    }
      //For Checking null in Launch Tab
    else if(e=='lc_url'){
      
      if(event.target.value==''){
         this.lc_url=true;
      }
      else{
        this.lc_url=false;
      }
    }
    else if(e=='ls_url'){
      if(event.target.value==''){
         this.ls_url=true;
      }
      else{
        this.ls_url=false;
       
      }
    }
  
    else if(e=='lm_url'){
      if(event.target.value==''){
        this.lm_url=true;
      }
      else{
        this.lm_url=false;
      
      }
    }
    else if(e=='lt_url'){
      if(event.target.value==''){
        this.lt_url=true;
         
      }
      else{
        this.lt_url=false;
        
      }
    }
    else if(e=='lstart'){
      if(event.target.value==''){
        this.lend_url=true;
         
      }
      else{
        this.lend_url=false;
     
      }
    }
    else if(e=='lend'){
      if(event.target.value==''){
      this.lstart_url=true;
         
      }
      else{
        this.lstart_url=false;

     
      }
    }
     //For Checking null in dinner Tab
     else if(e=='dc_url'){
      
      if(event.target.value==''){
         this.dc_url=true;
      }
      else{
        this.dc_url=false;
      }
    }
    else if(e=='ds_url'){
      if(event.target.value==''){
         this.ds_url=true;
      }
      else{
        this.ds_url=false;
       
      }
    }
  
    else if(e=='dm_url'){
      if(event.target.value==''){
        this.dm_url=true;
      }
      else{
        this.dm_url=false;
      
      }
    }
    else if(e=='dt_url'){
      if(event.target.value==''){
        this.dt_url=true;
         
      }
      else{
        this.dt_url=false;
        
      }
    }
    else if(e=='dstart'){
      if(event.target.value==''){
        this.dend_url=true;
         
      }
      else{
        this.dend_url=false;
     
      }
    }
    else if(e=='dend'){
      if(event.target.value==''){
      this.dstart_url=true;
         
      }
      else{
        this.dstart_url=false;

     
      }
    }
   //For checking null in Brunch tab
   else if(e=='brs_url'){
      
    if(event.target.value==''){
       this.brs_url=true;
    }
    else{
      this.brs_url=false;
    }
  }
  else if(e=='brc_url'){
    if(event.target.value==''){
       this.brc_url=true;
    }
    else{
      this.brc_url=false;
     
    }
  }

  else if(e=='brt_url'){
    if(event.target.value==''){
      this.brt_url=true;
    }
    else{
      this.brt_url=false;
    
    }
  }
  else if(e=='brm_url'){
    if(event.target.value==''){
      this.brm_url=true;
       
    }
    else{
      this.brm_url=false;
      
    }
  }
 
    
  }
  checkstart(e:any){
    if(e.target.value!=''){
      this.brunch_start=e.target.value;
      this.brstart_url=false;
         
      }
      else{
      this.brstart_url=true;
         
      }
   
     
  console.log(this.brunch_start);

}
  checksend(e:any){
      if(e.target.value!=''){
      this.brunch_end=e.target.value;
      this.brend_url=false;
         
      }
      else{
      this.brend_url=true;
         
      }
    
  console.log(  this.brunch_end);

  }
  checkbreakend(e:any,v:any){
    if(v=='start'){
      if(e.target.value!=''){
      this.brunch_start=e.target.value;
         this.bstart_url=false;
      }
      else {
         this.bstart_url=true;
          
      }
    }
    else if(v=='end'){
      if(e.target.value!=''){
        this.brunch_end=e.target.value;
           this.bend_url=false;
        }
        else {
           this.bend_url=true;
            
        }
     
      
    }

    console.log(this.brunch_end,this.brunch_start)
  }
    
  checkblaunch(e:any,v:any){

    if(v=='start'){
      this.brunch_start=e.target.value;
    }
    else if(v=='end'){
      this.brunch_end=e.target.value;
      
    }

    console.log(this.brunch_end,this.brunch_start)
  }
  checkdinnertime(e:any,v:any){ 
    if(v=='start'){
      if(e.target.value!=''){
        this.brunch_start=e.target.value;
        this.dstart_url=false;

      }
      else {
        this.dstart_url=true;
      }
     
    }
    else if(v=='end'){
      if(e.target.value!=''){
        this.brunch_end=e.target.value;
        this.dend_url=false;

      }
      else {
        this.dend_url=true;
      }
      
    }

    console.log(this.brunch_end,this.brunch_start)
  }
    
  
}