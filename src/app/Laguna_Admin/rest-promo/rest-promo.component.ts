import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-rest-promo',
  templateUrl: './rest-promo.component.html',
  styleUrls: ['./rest-promo.component.css']
})
export class RestPromoComponent implements OnInit {
  id:any="Intro";
  see_photo:any;
  introData:any;
  popupData:any;
  x:any;
  role:any=0;
  role_q1:any=0;
  role_q2:any=0;
  role_q3:any=0;

  confData:any;
  apiurlset=url_set.api_url+'/';
  spstockImg:any
  intro_readonly="intro"
  conf_readonly="confirmation mail"
  offer_title_readonly="offer title"
  offer_body_readonly="offer body"
  q1_readonly="question 1"
  q2_readonly="question 2"
  q3_readonly="question 3"
  mail_readonly="mail"
  m='';
  emailData:any;
  subject_readonly="subject"
  introtextdiv:any;
  previous_id:any
  conftextdiv:any;
  offertitlediv:any;
  offerbodydiv:any;
  q1div:any;
  promoData:any;
  q2div:any;
  q3div:any;
  category_name:any=[];
  maildiv:any;
  subjectdiv:any;
  qnData:any;
  openstockimages:any;
  st_img:any;
  imgcat:any;
  stockImg1:any;
  common_for_special_menu:any;
  image_getelement:any;
  imgData:any;
  role_offer_title:any=0;
  role_offer_body:any=0;
  constructor(private activatedRoute:ActivatedRoute,private admin_data:LagunaserviceService) { }
  r_id:any;
  ngOnInit(): void {
    // this.r_id=this.activatedRoute.snapshot.params['id'];
    // this.r_id=atob(this.r_id)
    // console.log(this.r_id)
    this.fetchData();
   
    this.admin_data.get_category_list().subscribe(data=>{
      console.log(data);
      this.category_name=data;
      this.category_name=this.category_name.msg;
    })
    this.admin_data.getspecial_image(null).subscribe(data=>{
      console.log(data);
      this.st_img=data;

      this.st_img=this.st_img.msg;
      console.log(this.st_img);

    })
    
  }
  fetchData(){
    this.admin_data.get_admin_promo().subscribe(data=>{console.log(data)
      this.promoData=data;
      this.promoData=this.promoData.msg;
      this.intro_readonly=this.promoData[0].intro;
      this.conf_readonly=this.promoData[0].confirm_email;
      this.offer_body_readonly=this.promoData[0].pop_up_offer_body
      this.role_offer_body=this.offer_body_readonly.length
      this.offer_title_readonly=this.promoData[0].pop_up_offer_title;
      this.role_offer_title=this.offer_title_readonly.length

      this.q1_readonly=this.promoData[0].questions1
      this.role_q1=this.q1_readonly.length;
      this.q2_readonly=this.promoData[0].questions2
      this.role_q2=this.q2_readonly.length;
      this.q3_readonly=this.promoData[0].questions3
      this.role_q3=this.q3_readonly.length;
      this.mail_readonly=this.promoData[0].mailing_email_body;
      this.subject_readonly=this.promoData[0].mailing_email_subject;
      this.spstockImg=this.apiurlset+'/stock/'+this.promoData[0].image;
      
      })
  }
  openCity(tabname:any){
    console.log("tabname:",tabname);
    
    this.id=tabname;
  }
  submit_intro(v:any){
    if(v==''){
      this.m="Sorry! You can't leave an empty field."
      this.myFunction()
    }
    else
   {
    console.log(v);
    var dt={
      "flag":0,
      "user":"admin@gmail.com",
      "intro":v
    }
    this.admin_data.post_promo_intro(dt).subscribe(data=>{console.log(data)
      this.introData=data;
      if(this.introData.suc==1)
      {this.fetchData();
        this.reset_intro();}
      else
      {
        this.m="Failed to update"
        this.myFunction()
      }
    
    
    },error=>{
      this.m="Failed to update"
      this.myFunction()
    })
   } 
  }
  reset_intro(){
    this.introtextdiv=document.getElementById('introtext');
    this.introtextdiv.value='';
    this.role=0;
  }
  submit_conf(v:any){
    if(v==''){
      this.m="Sorry! You can't leave an empty field."
      this.myFunction()
    }
    else{
    console.log(v)
    var dt={
      "flag":0,
      "user":"admin@gmail.com",
      "conf_email":v
    }
    this.admin_data.post_promo_conf(dt).subscribe(data=>{console.log(data)
      this.confData=data;
      if(this.confData.suc==1)
      {this.fetchData();
        this.reset_conf();}
      else
      {
        this.m="Failed to update"
        this.myFunction()
      }
    
    
    },error=>{
      this.m="Failed to update"
      this.myFunction()
    })
  
  }
  
  }
  reset_conf(){
    this.conftextdiv=document.getElementById('conftext');
    this.conftextdiv.value=''
  }
  submit_offer(v1:any,v2:any){
   
      // console.log(v)
      var dt={
        "flag":0,
        "user":"admin@gmail.com",
        "pop_title":v1,
        "pop_body":v2
      }
      this.admin_data.post_promo_popup(dt).subscribe(data=>{console.log(data)
        this.popupData=data;
        if(this.popupData.suc==1)
        {this.fetchData();
          // this.reset_offer();
        }
        else
        {
          this.m="Failed to update"
          this.myFunction()
        }
      
      
      },error=>{
        this.m="Failed to update"
        this.myFunction()
      })
    
    
  }
  reset_offer(){
   this.offerbodydiv=document.getElementById('offerbody');
   this.offertitlediv=document.getElementById('offertitle');
   this.offerbodydiv.value='';
   this.offertitlediv.value='';
   this.role_offer_body=0;
   this.role_offer_title=0;
  }
  submit_qsn(v1:any,v2:any,v3:any){
   
      // console.log(v)
      var dt={
        "flag":0,
        "user":"admin@gmail.com",
        "qn_1":v1,
        "qn_2":v2,
        "qn_3":v3
      }
      this.admin_data.post_promo_qn(dt).subscribe(data=>{console.log(data)
        this.qnData=data;
        if(this.qnData.suc==1)
        {this.fetchData();
          // this.reset_qsn();
        }
        else
        {
          this.m="Failed to update"
          this.myFunction()
        }
      
      
      },error=>{
        this.m="Failed to update"
        this.myFunction()
      })
    
   
  }
  reset_qsn(){
    this.q1div=document.getElementById('q1');
    this.q2div=document.getElementById('q2');
    this.q3div=document.getElementById('q3');
    this.q1div.value='';
    this.q2div.value='';
    this.q3div.value='';
    this.role_q1=0;
    this.role_q2=0;
    this.role_q3=0;
  }
  submit_email(mail:any,subject_line:any){
    if(mail==''||subject_line=='')
    {
      this.m="Sorry! You can't leave an empty field."
      this.myFunction()
    }
    else{
      // console.log(v)
      var dt={
        "flag":0,
        "user":"admin@gmail.com",
        "mail_email_body":mail,
        "mail_email_sub":subject_line
      }
      this.admin_data.post_promo_mail(dt).subscribe(data=>{console.log(data)
        this.emailData=data;
        if(this.emailData.suc==1)
        {this.fetchData();
          this.reset_email();}
        else
        {
          this.m="Failed to update"
          this.myFunction()
        }
      
      
      },(error:any)=>{
        this.m="Failed to update"
        this.myFunction()
      })
    
    }
  }
  reset_email(){
    this.maildiv=document.getElementById('mailval');
    this.maildiv.value='';
    this.subjectdiv=document.getElementById('subjectline');
    this.subjectdiv.value=''


  }
  openstockmodal(){
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='block'
  }
  getStockimageonselectcategory(cat_id:any){
    //  For getting Image on load
    this.admin_data.getspecial_image(cat_id).subscribe(data=>{
      console.log(data);
      this.st_img=data;
      this.st_img=this.st_img.msg;
    })
  }
  selectedimage(index:any,image_path:any,catg:any,length:any){

    this.previous_id=catg;
    this.imgcat=catg;
    this.stockImg1=image_path;
    console.log(this.stockImg1)

      // this.spstockImg=url_set.api_url+'/stock/'+ image_path;
    this.common_for_special_menu=image_path;
    for(let i=0;i<length;i++){
      this.image_getelement=document.getElementById('image_'+i);
      this.image_getelement.style.border='';
    }
    this.image_getelement=document.getElementById('image_'+index);
   this.image_getelement.style.border='3px solid #00477e';
  }
  save_it(e:any){
    if(e=='close'){
      this.see_photo=true;
      this.common_for_special_menu='';
      // this.previous_id='';
      this.imgcat=''
   }
    else{
      this.see_photo=false;
      
      this.common_for_special_menu=url_set.api_url+'/stock/'+this.common_for_special_menu;
      this.spstockImg= this.common_for_special_menu;
  
    }
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='none'
  }
  myFunction() {
    // alert("hello");
  
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  submit_image(){
    console.log(this.stockImg1)
    var dt={
      "flag":0,
      "user":"admin@gmail.com",
      "img":this.stockImg1
    }
    this.admin_data.post_promo_img(dt).subscribe(data=>{console.log(data)
      this.imgData=data;
      if(this.imgData.suc==1)
      { this.fetchData();
        this.m="Updation successful!"
        this.myFunction();}
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
  getdatalength(event:any){
    this.role=event.target.value.length;
  }
  checkpopupoffer(event:any,tabname:any){
    if(tabname=='offertitle'){
        this.role_offer_title=event.target.value.length;
    }
    else if(tabname=='offerbody'){
      this.role_offer_body=event.target.value.length;

    }
  }
  check_question_length(event:any,tabname:any){
    if(tabname=='Q1'){
       this.role_q1=event.target.value.length;
    }
    else if(tabname=='Q2'){
      this.role_q2=event.target.value.length;
    }
    else{
      this.role_q3=event.target.value.length;
    }
  }
}

