import {  Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class AdminOrderPageComponent implements OnInit {
  v_stand:any=0;
  stand:any;
  v_standplus:any=0;
   v_premium:any=0;
   v_birthday:any=0;
  v_calendar:any=0;
  v_tabletop1:any=0;
  v_tabletop2:any=0;
  v_tabletop3:any=0;
  v_windowcling:any=0;


  Window:any;
  TopTable:any;
  Sign2:any;
  Sign1:any
  pack:boolean=false;
  promo:boolean=true;
  signhold:boolean=true;
  windowcl:boolean=true;
  PACK:any;
  PROMO:any;
  SIGNHOLD:any;
  WINDOWCL:any;
  promo2:boolean=true
  promo1:boolean=true;
  sign2:boolean=true;
  tab:any;
  yes_stnd:any;
  no_stnd:any;
  set_value:any;
  Package:any=[];
  Tabletop:boolean=true;
  table:any;
  tabletopyes:any;
  wallmountsignholder:any;

  stnd_specialmenu_yes:any
  stnd_numberofmenu:any
  stndpackage_setupfee:any;
  stndpackage_desc:any;
  stndpacakge__monthlyfee:any;
   
  stndplus_specialmenu_yes:any
  stndpluspacakge__numberofmenu:any;
  stndpluspackage_monthlyfee:any;
  stndpluspacakge_setupfee:any;
  stndpluspacakge_desc:any;
 
  premiumpacakge_specialmenu_yes:any;
  premiumpacakge_specialmenu_no:any;
  premiumpacakge_numberofmenu:any;
  premiumpacakge_monthlyfee:any;
  premiumpacakge_setupfee:any;
  premiumpacakge_des:any;

  promo_Birthdaypriceyes:any
  promo_Birthdaypriceno:any
  promo_Birthdayprice:any=0;
  promo_EventCalendarprice:any=0;
  promo_EventCalendarprice_yes:any
  promo_EventCalendarprice_no:any
  promocalendar:any=[];
   event:any;
   birthdat:any
   

  signholder_price1:any;
  signholder_price2:any;
  signholder_price3:any;
  signholder:any=[];
  holder:any;
   

  windowcling_yes:any;
  window_no:boolean=true;
  signholder2:boolean=true;
  wallmountsignholder1:any;
  windowcling_price:any
  window:any=[];
  x:any;
  wall2:boolean=true;
  wall:any;
   win_cling:any;
   wallmountsignholder2:any;
  success_msg_windowcling:any;
  constructor(private laguna:LagunaserviceService) { }

  ngOnInit(): void {
  //For Package Tab
    this.laguna.getpackagedata().subscribe(data=>{
    console.log(data);
      this.Package=data;

     for(let i=0;i<this.Package.msg.length;i++){
          if(this.Package.msg[i].pakage_name==1){
            this.stndpackage_setupfee=this.Package.msg[i].setup_fee;
            this.stndpacakge__monthlyfee=this.Package.msg[i].monthly_fee;
             this.stndpackage_desc=this.Package.msg[i].pack_description;
             this.stnd_numberofmenu=this.Package.msg[i].no_of_menu;
             this.v_stand=1;
      
            
            

            //  console.log(this.stnd_numberofmenu);
            //  console.log(this.stndpackage_setupfee,this.stndpacakge__monthlyfee);
             if(this.Package.msg[i].special_menu=='Y'){
             this.stnd_specialmenu_yes=document.getElementById('yes_stnd');
             this.stnd_specialmenu_yes.checked=true;
             }
             else{
              this.stnd_specialmenu_yes=document.getElementById('no_stnd');
              this.stnd_specialmenu_yes.checked=true;
             }

          }
          else if(this.Package.msg[i].pakage_name==2){
            this.stndpluspacakge__numberofmenu=this.Package.msg[i].no_of_menu;
            
            this.v_standplus=1;
           
            this.stndpluspackage_monthlyfee=this.Package.msg[i].monthly_fee;
            this.stndpluspacakge_setupfee=this.Package.msg[i].setup_fee;
               this.stndpluspacakge_desc=this.Package.msg[i].pack_description;
               if(this.Package.msg[i].special_menu=='Y'){
                       this.stndplus_specialmenu_yes=document.getElementById('yes');
                       this.stndplus_specialmenu_yes.checked=true;  
               }
               else{
                this.stndplus_specialmenu_yes=document.getElementById('no');
                this.stndplus_specialmenu_yes.checked=true;
               }
          }
          else if(this.Package.msg[i].pakage_name==3){
            // this.premiumpacakge_specialmenu_yes=
            this.premiumpacakge_numberofmenu=this.Package.msg[i].no_of_menu;
           
               this.v_premium=1;
           
              this.premiumpacakge_monthlyfee=this.Package.msg[i].monthly_fee;
              this.premiumpacakge_setupfee=this.Package.msg[i].setup_fee;
             this.premiumpacakge_des=this.Package.msg[i].pack_description;
             if(this.Package.msg[i].special_menu=='Y'){
              this.premiumpacakge_specialmenu_yes=document.getElementById('yes_premium');
              this.premiumpacakge_specialmenu_yes.checked=true;
             }
             else{
              this.premiumpacakge_specialmenu_no=document.getElementById('no_premium');
               this.premiumpacakge_specialmenu_no.checked=true;
             }

          }
          else{

          }
          
          // console.log(this.premiumpacakge_specialmenu_yes.checked);
     }
    })
    //For Promo Calendar Tab
    this.laguna.GetPromoCalendar().subscribe(data=>{
      console.log(data);
      this.promocalendar=data;
     
       for(let i=0;i<this.promocalendar.msg.length;i++){
        
        if(this.promocalendar.msg[i].id==4){
          this.v_birthday=1;
          this.promo_Birthdayprice=this.promocalendar.msg[i].price;
        
            if(this.promocalendar.msg[i].free_flag=='Y'){
          this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
          this.promo_Birthdaypriceyes.checked=true;
         
         }
        else{
          this.promo_Birthdaypriceno=document.getElementById('no_birth');
          this.promo_Birthdaypriceno.checked=true;
        }
        }
        else if(this.promocalendar.msg[i].id==5){
          this.v_calendar=1;

          this.promo_EventCalendarprice=this.promocalendar.msg[i].price;
          if(this.promocalendar.msg[i].free_flag=='Y'){
            this. promo_EventCalendarprice_yes=document.getElementById('yes_calend');
            this. promo_EventCalendarprice_yes.checked=true;
          }
          else{
            this.promo_EventCalendarprice_no=document.getElementById('no_calend');
            this.promo_EventCalendarprice_no.checked=true;
          }
        }
       }

    })
    //For SignHolder
    this.laguna.Getsignupholder().subscribe(data=>{
            this.signholder=data;
            console.log(data);
            for(let i=0;i<this.signholder.msg.length;i++){
              if(this.signholder.msg[i].id==6){
                 this.v_tabletop1=1;
                 this.signholder_price1=this.signholder.msg[i].price;
                 if(this.signholder.msg[i].free_flag=='Y'){
                       this.tabletopyes=document.getElementById('yes_signholder1');
                       this.tabletopyes.checked=true;
                        this.Tabletop=true;
                        this.TopTable='Y';

                 }
                 else{
                  this.tabletopyes=document.getElementById('no_signholder1');
                  this.tabletopyes.checked=true;
                  this.Tabletop=false;
                  this.TopTable='N';


                 }
                
              }
              else if(this.signholder.msg[i].id==7){
                this.signholder_price2=this.signholder.msg[i].price;
                 this.v_tabletop2=1;
                   
                   if(this.signholder.msg[i].free_flag=='Y'){
                    this.wallmountsignholder1=document.getElementById('yes_signholder2');
                    this.wallmountsignholder1.checked=true;
                    this.signholder2=true;
                     this.Sign1='Y';
                  } 
                   else{
                    this.wallmountsignholder1=document.getElementById('no_signholder2');
                    this.wallmountsignholder1.checked=true;
                    this.signholder2=false;
                    this.Sign1='N';
                    

                   }
              }
              else if(this.signholder.msg[i].id == 8){
                // console.log(this.signholder.msg[i].id,i)
                this.v_tabletop3=1;

                this.signholder_price3=this.signholder.msg[i].price;
                if(this.signholder.msg[i].free_flag == 'Y'){
                 this.wallmountsignholder2=document.getElementById('yes_wall');
                this.wall2=true;
                  this.wallmountsignholder2.checked=true;
                  console.log(this.wallmountsignholder2.checked);
                   this.Sign2='Y';

                } 
                 else{
                this.wall2=false;

                   this.wallmountsignholder2=document.getElementById('no_mount');
                  this.wallmountsignholder2.checked=true;
                  this.Sign2='N';

                  // console.log(this.wallmountsignholder.checked);


                 }
                
              }
              
            }
    })
    //For Window Cling
    this.laguna.GetWindowCling().subscribe(data=>{
      console.log(data);
      this.window=data;
      for(let i=0;i<this.window.msg.length;i++){
        if(this.window.msg[i].id==9){
          this.windowcling_price=this.window.msg[i].price;
          if(this.window.msg[i].free_flag=='Y'){
            this.windowcling_yes=document.getElementById("yes_last");
             this.window_no=true;
            this.windowcling_yes.checked=true;
            this.Window='Y';
          }
          else{
            this.windowcling_yes=document.getElementById("no_end");
            this.window_no=false;
            this.Window='N';
           
            this.windowcling_yes.checked=true;
          }
        }
      }

      // this.windowcling_description
    })
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
  

  }
//For Toggling from one tab to another
  opencity(e:any){
    //For package Tab
    if(e=='package'){
        this.pack=false;
    this.promo=true;
    this.signhold=true;
    this.windowcl=true;
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
     this.PROMO.style.background='';
     this.PROMO.style.color='black';
     this.SIGNHOLD=document.getElementById('defaultsign');
     this.SIGNHOLD.style.background='';
     this.SIGNHOLD.style.color='black';
     this.WINDOWCL=document.getElementById('defaultwindow');
     this.WINDOWCL.style.background='';
     this.WINDOWCL.style.color='black';
 
      
    }
    //For Promotion tab
    else if(e=='promo'){
      this.laguna.GetPromoCalendar().subscribe(data=>{
        console.log(data);
        this.promocalendar=data;
        for(let i=0;i<this.promocalendar.msg.length;i++){
          if(this.promocalendar.msg[i].id==4){
            this.promo_Birthdayprice=this.promocalendar.msg[i].price;
              if(this.promocalendar.msg[i].free_flag=='Y'){
            this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
            this.promo_Birthdaypriceyes.checked=true;
           }
          else{
            this.promo_Birthdaypriceno=document.getElementById('no_birth');
            this.promo_Birthdaypriceno.checked=true;
          }
          }
          else if(this.promocalendar.msg[i].id==5){
            this.promo_EventCalendarprice=this.promocalendar.msg[i].price;
            if(this.promocalendar.msg[i].free_flag=='Y'){
              this. promo_EventCalendarprice_yes=document.getElementById('yes_calend');
              this. promo_EventCalendarprice_yes.checked=true;
            }
            else{
              this.promo_EventCalendarprice_no=document.getElementById('no_calend');
              this.promo_EventCalendarprice_no.checked=true;
            }
          }
          else{
  
          }
       }
  
      })
    this.pack=true;
   this.promo=false;
   this.signhold=true;
   this.windowcl=true;
   this.PROMO=document.getElementById('promoCalendar');
   this.PROMO.className='active';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='#3F51B5';
   this.PROMO.style.color='#fff';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.SIGNHOLD=document.getElementById('defaultsign')
   this.SIGNHOLD.style.background='';
   this.SIGNHOLD.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
    }
    //For signholder tab
    else if(e=='signholder'){
         this.pack=true;
    this.promo=true;
    this.signhold=false;
    this.windowcl=true;
    this.SIGNHOLD=document.getElementById('signHolder');
    this.SIGNHOLD.className='active';
    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='#3F51B5';
    this.SIGNHOLD.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='';
    this.WINDOWCL.style.color='black';
    }
    //For Window tab
    else{
        this.pack=true;
    this.promo=true;
    this.signhold=true;
    this.windowcl=false;
    this.WINDOWCL=document.getElementById('windowCling');
    this.WINDOWCL.className='active';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='#3F51B5';
    this.WINDOWCL.style.color='#fff';

    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='';
    this.SIGNHOLD.style.color='black';

    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';

    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';

    }
  }
  //Admin order set up page package tab first row
  submit(v1:any,v2:any,v3:any,v4:any){
    if(this.v_stand==1){
      this.stand='Updation Successfull'
     
    }
    else{
      this.v_stand=1;
      this.stand='Insertion Successfull'
    }
    this.yes_stnd=document.getElementById('yes_stnd');
    this.no_stnd=document.getElementById('no_stnd');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
       "Menu_number":v1,
       "Serial_no":v2,
       "Special_Menu":this.set_value,
       "SetUp_Fee":v3,
       "Monthly_Fee":v4,
      // "Description":v5
     
    }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    });
  }
    //Admin order set up page package tab second row
  submitstndplus(v1:any,v2:any,v3:any,v4:any){
    if(this.v_standplus==1){
      this.stand='Updation Successfull'
     
    }
    else{
      this.v_standplus=1;
      this.stand='Insertion Successfull'
    }
    this.yes_stnd=document.getElementById('yes');
    this.no_stnd=document.getElementById('no');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    });
  }
    //Admin order set up page package tab third row
  submitpremium(v1:any,v2:any,v3:any,v4:any){
   if(this.v_premium==1){
     this.stand='Updation Successfull'
    }
   else{
    this.v_premium=1;
     this.stand='Insertion Successfull'
   }
    this.yes_stnd=document.getElementById('yes_premium');
    this.no_stnd=document.getElementById('no_premium');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    });

  }
    //Admin order set up page Promo&calendar tab first row
  showeventcalendar(v1:any,v2:any){
    if(this.v_calendar==1){
      this.stand='Updation Successfull';
     
    }
    else{
      this.v_calendar=1;
      this.stand='Insertion Successfull';
    }
    this.yes_stnd=document.getElementById('yes_calend');
    this.no_stnd=document.getElementById('no_calend');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
     "serial_no":v1,
     "price":v2,
     "free":this.set_value
    }

    console.log(v1,v2,this.set_value);
    console.log(dt);
    this.laguna.PostPromoCalendar(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    })
  }
//Admin order set up page Promo&calendar tab second row
  birthdayaniversery(v1:any,v2:any){
    if(this.v_birthday==1){
     this.stand='Updation Successfull';
    }
    else{
     this.stand='Insertion Successfull';
     this.v_birthday=1;
    }
    this.yes_stnd=document.getElementById('yes_birth');
    this.no_stnd=document.getElementById('no_birth');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    console.log(v1,v2,this.set_value);
    var dt={
      "serial_no":v1,
      "price":v2,
      "free":this.set_value
     }
     console.log(v1,v2,this.set_value);
     console.log(dt);
      this.laguna.PostPromoCalendar(dt).subscribe(data=>{
        console.log(data);
        this.win_cling=data;
     this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();

      })
     

  }
 //Admin order set up page signholder tab first row
  opentabletop(v1:any,v2:any){
 if(this.v_tabletop1==1){
  this.stand='Updation Successfull';
 
 }
 else{
  this.v_tabletop1=1;
  this.stand='Insertion Successfull';
 }
    var dt={
      "per_Holder_Price":v1,
       "serial_no":v2,
       "free_flag": this.TopTable
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    })
  }
   //Admin order set up page signholder tab second row
  openwallmount(v1:any,v2:any){
    if(this.v_tabletop2==1){
      this.stand='Updation Successfull';
      }
     else{
      this.v_tabletop2=1;
      this.stand='Insertion Successfull';
     }
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1,
       "free_flag":this.Sign1
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    })
  }
   //Admin order set up page signholder tab third row
  showwall(v1:any,v2:any){
    if(this.v_tabletop3==1){
      this.stand='Updation Successfull';
     
     }
     else{
      this.v_tabletop3=1;
      this.stand='Insertion Successfull';
     }
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1,
       "free_flag":this.Sign2
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.win_cling=data;
      this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
    })
  }
  //Admin order set up page windowCling tab first row
  showwindow(v1:any,v2:any){
    if(this.v_windowcling==1){
      this.stand='Updation Successfull';
     }
    else{
      this.v_windowcling=1;
      this.stand='Insertion Successfull';
    }
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1,
       "free_flag":this.Window
    }
   console.log(v1,v2);
   console.log(dt);
   this.laguna.PostWIndowCling(dt).subscribe(data=>{
     console.log(data);
     this.win_cling=data;
     this.success_msg_windowcling=this.win_cling.msg;
     this.myFunction();
   })
  }
  //For Disabled the Price on Enable the yes radio button in Promo&Calendar Tab
  verify(e:any){
    if(e=='y'){
      this.promo1=true;
      // this.promo_Birthdayprice=0;
      this.birthdat=document.getElementById('birthday');
      this.birthdat.value=0;
    }
    else{
      this.promo1=false;
    }
  }
  verifytre(e:any){
    if(e=='yes'){
      this.promo2=true;
      // this.promo_EventCalendarprice=0;
      this.event=document.getElementById('Event');
      this.event.value=0;
    }
    else{
         this.promo2=false;
    }
  }
//For character key Input Disabled
  preventNonNumericalInput(e:any){
    e = e || window.event;
    
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
     { e.preventDefault();}

  }

  check(event:any){
    if(event.target.id=='yes_signholder1'){
      console.log(event.target.value);
       this.Tabletop=true;
       this.table=document.getElementById('tabletop');
       this.table.value=0;    
       this.TopTable='Y'
    }
    else if(event.target.id=='no_signholder1'){
      console.log(event.target.value);
      this.Tabletop=false;
      this.TopTable='N'

     }
    else if(event.target.id=='yes_signholder2'){
      console.log(event.target.value);
      this.holder=document.getElementById('wallmount2');
      this.holder.value=0;      
      this.signholder2=true;
      this.Sign1='Y';
      

    }
    else if(event.target.id=='no_signholder2'){
      this.signholder2=false;
      this.Sign1='N';

    }
    else if(event.target.id=='yes_wall'){
      // console.log(event.target.value);
      this.wall=document.getElementById('wall');
      this.wall.value=0;
      this.wall2=true;
      this.Sign2='Y';
    }
    else if(event.target.id=='no_mount')
    {
      this.wall2=false;
      this.Sign2='N';


      // console.log(event.target.value);
    }
    else if(event.target.id=='yes_last'){
      console.log(event.target.value);
       this.windowcling_yes=document.getElementById('window_cling');
       this.windowcling_yes.value=0;
       this.window_no=true;
       this.Window='Y';
      
    }
    else if(event.target.id=='no_end'){
      console.log(event.target.value);
      this.window_no=false;
      this.Window='N';

    }

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


}
