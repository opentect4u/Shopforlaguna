import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url_set } from 'src/app/globalvar';
import { NgxSpinnerService } from "ngx-spinner";
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Dimensions, ImageCroppedEvent, ImageTransform,base64ToFile  } from 'ngx-image-cropper';//For Image Cropper
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.css',
'../../../../assets/appcss.css']
})
export class MenuSetupComponent implements OnInit {
  Breakfast_check:boolean=false;
  Breakfast_cover_preview:boolean=true;
  Breakfast_top_preview:boolean=true;
  Breakfast_menu_preview:boolean=true;
  Breakfast_section_preview:boolean=true;

  Launch_check:boolean=false;
  Launch_cover_preview:boolean=true;
  Launch_top_preview:boolean=true;
  Launch_menu_preview:boolean=true;
  Launch_section_preview:boolean=true;

  Dinner_check:boolean=false;
  Dinner_cover_preview:boolean=true;
  Dinner_top_preview:boolean=true;
  Dinner_menu_preview:boolean=true;
  Dinner_section_preview:boolean=true;

  Brunch_check:boolean=false;
  Brunch_cover_preview:boolean=true;
  Brunch_top_preview:boolean=true;
  Brunch_menu_preview:boolean=true;
  Brunch_section_preview:boolean=true;



  Show:boolean=true;
  for_timing_problem:any="Error!! Start time must be greater then end time"
  break_dt:any=[];
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

   url_reg = url_set.api_url;

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

  mon_special:any=0;;
  tue_special:any=0;
  wed_special:any=0;
  thu_special:any=0;
  fri_special:any=0;
  sat_special:any=0;
  sun_special:any=0;



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
  every_break:any;
  every_launch:any;

  every_dinner:any;

  every_brunch:any;

   brunch_start:any;
   brunch_end:any;

  breakfastcoverimage: any;
  breakfasttopimage: any;
  breakfastmenuimage: any;
  breakfastsectionimage:any=[];

  v:any=0;

  launchcoverimage: any;
  launchtopimage: any;
  launchmenuimage: any=[];
  launchsectionimage:any=[];


  branchsectionimage:any=[];
  branchcoverimage:any;
  branchtopimage:any
  branchmenuimage:any=[];

  dinnersectionimage:any=[];
  dinnercoverimage:any;
 dinnertopimage:any
  dinnermenuimage:any=[];
  multipleImages:any=[];
  check:any=[];
  check_it:any;
  img_cover:any;
  img_top:any;
  img_menu_break:any=[];
  img_section_break:any=[];
  img_launch_cover:any;
  img_launch_top:any;
  img_launch_menu:any=[];
  img_launch_section:any=[];

  img_dinner_cover:any;
  img_dinner_top:any;
  img_dinner_menu:any=[];
  img_dinner_section:any=[];

  img_brunch_cover:any;
  img_brunch_top:any;
  img_brunch_menu:any=[];
  img_brunch_section:any=[];

  b_check:any;
  l_check:any;
  d_check:any;
  br_check:any;


  val_break_cov_img:any='';
  break_button:boolean=false;
  launch_button:boolean=false;

  dinner_button:boolean=false;
 design:any;
  brunch_button:boolean=false;
 img_showing=url_set.api_url;
 img_url=url_set.api_url+'/stock/';
 id:any;
 load_section:any;
 res_name:any=localStorage.getItem('Restaurant_name');
common_image:any;
common:any;
lunch_top_name:any;
lunch_cover_name:any;
brunch_top_name:any;
brunch_cover_name:any;
dinner_top_name:any;
dinner_cover_name:any;
breakfast_top_name:any;
breakfast_cover_name:any;
enable_exclusive:boolean=true;

//Image Cropper
 scale = 1;
 transform: ImageTransform = {};
 showCropper = false;
 hide=false;
 valu = true;
 Zoomout = true;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
 common_for_all:any;
 common_value:any;
 width:any;
 height:any;
  common_break_menu:any;
  pdfSource:any;
  show_name:any;
  img_break_section:any;
  show_toast:boolean=true;
  common_remove_div:any;
  lunch_Cover:boolean=true;
  dinner_Cover:boolean=true;
  break_Cover:boolean=true;
  brunch_Cover:boolean=true;
  lunch_Top:boolean=true;
  dinner_Top:boolean=true;
  break_Top:boolean=true;
  brunch_Top:boolean=true;

  Special_menu:any;
  special_url:any=''
  category_name:any=[];
  stock_img:any=[];
  special_img:any=[];
  img_special:any=[];
  special_check:any;
  special_section_preview:boolean=true;
  special_disabled:boolean=false;
  enable_days:boolean=true;
  special:any=5;
  exclusive:any;
  week:any;
  exclusive_specific_date:any;
  break_Special=0;
  lunch_special=0;
  dinner_Special=0;
  brunch_Special=0;
  x1:any;
  coordinates:any;
  date_time:any;
  constructor(public toastr: ToastrManager,private spinner: NgxSpinnerService,private _data: DataserviceService,private lagunaserve:LagunaserviceService,private http: HttpClient) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {
  this.coordinates={x1:0};
   console.log(this.v);
  //  For getting category Id
   this.lagunaserve.get_category_list().subscribe(data=>{
     console.log(data);
     this.category_name=data;
     this.category_name=this.category_name.msg;
   })
    //  For getting Image on load
    this.lagunaserve.getspecial_image(null).subscribe(data=>{
      console.log(data);
      this.stock_img=data;

      this.stock_img=this.stock_img.msg;
      console.log(this.stock_img);

    })

    if("value" in localStorage){
      this.v=localStorage.getItem('value');
  } else {

   }
   this.arr_brak_check.length=0;
    this.brunch_start='';
    this.brunch_end='';
    this.lagunaserve.get_menu_urls(this.resid,null).subscribe(data=>{
      this.cove_top.length=0;
      console.log(data);
      this.cove_top=data;
      // if(this.cove_top.length!=0){


      for(let i=0;i<this.cove_top.menu_dt.length;i++){
        // console.log(this.cove_top.menu_dt[i].menu_id);
        if(this.cove_top.menu_dt.length!=0){
          if(this.cove_top.menu_dt[i].menu_id==1){

            console.log("sadasda1");

                //  this.break_cover=this.cove_top.msg[i].cover_page_url;
                //  this.break_top=this.cove_top.msg[i].top_img_url;
                if(this.cove_top.menu_dt[i].menu_img!=''){
                  this.Breakfast_menu_preview=false
                 this.img_menu_break.push({id: this.cove_top.menu_dt[i].id, img_path: this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
                    this.multipleImages.push(this.cove_top.menu_dt[i].menu_img);

                }


                 this.break_menu=this.cove_top.menu_dt[i].menu_url;

                 console.log(this.break_menu);


               if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=true;
                  this.break_check='Y';
                  this.b_url=false;
               }
               else {
                this.check_break=document.getElementById('bkmenu');
                this.check_break.checked=false;
                this.break_check='N';
                this.b_url=true
               }
            }
            else if(this.cove_top.menu_dt[i].menu_id==2){

              console.log("sadasda3");
              if(this.cove_top.menu_dt[i].menu_img!=''){
                this.Launch_menu_preview=false
                this.launchmenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
                this.img_launch_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

              }
                // this.launch_cover=this.cove_top.msg[i].cover_page_url;
                // this.launch_top=this.cove_top.msg[i].top_img_url;
                this.launch_menu=this.cove_top.menu_dt[i].menu_url;
                // console.log(this.launch_top,this.launch_cover);


              if(this.cove_top.menu_dt[i].active_flag=='Y'){
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=true;
                this.launch_check='Y'
                this.lcc_url=false;
             }
             else {
              this.check_launch=document.getElementById('paris');
              this.check_launch.checked=false;
              this.launch_check='N';
              this.lcc_url=true;

             }
           }
           else if(this.cove_top.menu_dt[i].menu_id==3){
            console.log("sadasda2");

            if(this.cove_top.menu_dt[i].menu_img!=''){
              this.Dinner_menu_preview=false
              this.branchmenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
              this.img_dinner_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

            }
              // this.dinner_cover=this.cove_top.menu_dt[i].cover_page_url;
              // this.dinner_top=this.cove_top.menu_dt[i].top_img_url;
              this.dinner_menu=this.cove_top.menu_dt[i].menu_url;
            if(this.cove_top.menu_dt[i].active_flag=='Y'){
              this.check_dinner=document.getElementById('tokyo');
              this.check_dinner.checked=true;
              this.brunch_check='Y';
              this.d_url=false;
           }
           else {
            this.check_dinner=document.getElementById('tokyo');
            this.check_dinner.checked=false;
            this.brunch_check='N';
            this.d_url=true;

           }
           }
           else if(this.cove_top.menu_dt[i].menu_id==4){

            console.log("sadasda4");


            if(this.cove_top.menu_dt[i].menu_img!=''){
              this.Brunch_menu_preview=false
              this.dinnermenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
              this.img_brunch_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

            }

              this.brunch_menu=this.cove_top.menu_dt[i].menu_url;

            if(this.cove_top.menu_dt[i].active_flag=='Y'){
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=true;
              this.dinner_check='Y';
              this.br_url=false;
           }
           else {
            this.check_brunch=document.getElementById('laguna');
            this.check_brunch.checked=false;
            this.dinner_check='N';
            this.br_url=true;

           }
         }
        }



      }
      for(let i=0;i<this.cove_top.oth_dt.length;i++){
        console.log(this.cove_top.oth_dt[i].active_flag);

        if(this.cove_top.oth_dt.length!=0){
          if(this.cove_top.oth_dt[i].menu_id==1){

            console.log("sadasda1");

                 this.break_cover=this.cove_top.oth_dt[i].cover_page_url;
                 this.break_top=this.cove_top.oth_dt[i].top_img_url;


               if(this.cove_top.oth_dt[i].cover_page_img!=''){


                this.break_Cover=false;
                 this.Breakfast_cover_preview=false;
                 this.breakfastcoverimage=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
                 this.breakfast_cover_name=this.cove_top.oth_dt[i].cover_page_img;
                 console.log(this.breakfastcoverimage);

                 this.img_cover =this.breakfastcoverimage;
                }
                if(this.cove_top.oth_dt[i].top_image_img!=''){
                this.break_Top=false;

                     this.Breakfast_top_preview=false;
                 this.breakfasttopimage=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
                 this.img_top=this.breakfasttopimage;
                 this.breakfast_top_name=this.cove_top.oth_dt[i].top_image_img;
               }


                //  this.break_menu=this.cove_top.menu_dt[i].menu_url;



               if(this.cove_top.oth_dt[i].active_flag=='Y'){
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=true;
                  this.break_check='Y';
                  this.b_url=false;
               }
               else {
                this.check_break=document.getElementById('bkmenu');
                this.check_break.checked=false;
                this.break_check='N';
                this.b_url=true
               }
            }
            else if(this.cove_top.oth_dt[i].menu_id==2){

              console.log("sadasda3");
              if(this.cove_top.oth_dt[i].top_image_img!=''){
                this.img_launch_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
                this.launchtopimage= this.img_launch_top;
                this.Launch_top_preview=false;
                this.lunch_Top=false;
                this.lunch_top_name=this.cove_top.oth_dt[i].top_image_img;


              }

              if(this.cove_top.oth_dt[i].cover_page_img!=''){
                this.lunch_Cover=false;

                this.img_launch_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
                this.launchcoverimage= this.img_launch_cover;
                this.Launch_cover_preview=false;
                this.lunch_cover_name=this.cove_top.oth_dt[i].cover_page_img;

              }
                this.launch_cover=this.cove_top.oth_dt[i].cover_page_url;
                this.launch_top=this.cove_top.oth_dt[i].top_img_url;



              if(this.cove_top.oth_dt[i].active_flag=='Y'){
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=true;
                this.launch_check='Y'
                this.lcc_url=false;
             }
             else {
              this.check_launch=document.getElementById('paris');
              this.check_launch.checked=false;
              this.launch_check='N';
              this.lcc_url=true;

             }
           }
           else if(this.cove_top.oth_dt[i].menu_id==3){
            console.log("sadasda2");



            if(this.cove_top.oth_dt[i].top_image_img!=''){
              this.img_dinner_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
              // this.branchtopimage= this.img_launch_top;
              this.branchtopimage=this.img_dinner_top;


              this.dinner_Top=false;
              this.Dinner_top_preview=false;
              this.dinner_top_name=this.cove_top.oth_dt[i].top_image_img;


            }

            if(this.cove_top.oth_dt[i].cover_page_img!=''){
              this.img_dinner_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
              this.branchcoverimage=this.img_dinner_cover;
              this.dinner_Cover=false;

              this.Dinner_cover_preview=false;
              this.dinner_cover_name=this.cove_top.oth_dt[i].cover_page_img;

            }
              this.dinner_cover=this.cove_top.oth_dt[i].cover_page_url;
              this.dinner_top=this.cove_top.oth_dt[i].top_img_url;
              // this.dinner_menu=this.cove_top.oth_dt[i].menu_url;
            if(this.cove_top.oth_dt[i].active_flag=='Y'){
              console.log('tokyo');

              this.check_dinner=document.getElementById('tokyo');
              this.check_dinner.checked=true;
              this.brunch_check='Y';
              this.d_url=false;
           }
           else {
            console.log('tokyo_disabled');

            this.check_dinner=document.getElementById('tokyo');
            this.check_dinner.checked=false;
            this.brunch_check='N';
            this.d_url=true;


           }
           }
           else if(this.cove_top.oth_dt[i].menu_id==4){

            console.log("sadasda4");


            if(this.cove_top.oth_dt[i].top_image_img!=''){
              this.img_brunch_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
              this.dinnertopimage= this.img_brunch_top;
              this.brunch_Top=false;

              this.Brunch_top_preview=false;
              this.brunch_top_name=this.cove_top.oth_dt[i].top_image_img;
            }

            if(this.cove_top.oth_dt[i].cover_page_img!=''){
              this.img_brunch_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
              this.dinnercoverimage= this.img_brunch_cover;
              this.brunch_Cover=false;
              this.Brunch_cover_preview=false;
              this.brunch_cover_name=this.cove_top.oth_dt[i].cover_page_img;


            }

              this.brunch_cover=this.cove_top.oth_dt[i].cover_page_url;
              this.brunch_top=this.cove_top.oth_dt[i].top_img_url;

             if(this.cove_top.oth_dt[i].active_flag=='Y'){
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=true;
              this.dinner_check='Y';
              this.br_url=false;
           }
           else {
            this.check_brunch=document.getElementById('laguna');
            this.check_brunch.checked=false;
            this.dinner_check='N';
            this.br_url=true;

           }
         }


        }
      }

      console.log( this.multipleImages);
      console.log( this.img_menu_break);

    })
    //For breakfast section url
    this.lagunaserve.get_sec_url('1',this.resid).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      for(let i=0;i<this.break_sec.msg.length;i++)
      {
        if(this.break_sec.msg[i].menu_id==1){
          this.menu_sec=this.break_sec.msg[i].sec_url;
          if(this.break_sec.msg[i].sec_img!=''){
            this.Breakfast_section_preview=false;
            this.img_section_break.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
            this.breakfastsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
          }



         }
      }


    })
    //For launch section url
  this.lagunaserve.get_sec_url('2',this.resid).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){


      for(let i=0;i<this.break_sec.msg.length;i++)
      {
           if(this.break_sec.msg[i].menu_id==2){
               if(this.break_sec.msg[i].sec_img!='')
               {
                this.Launch_section_preview=false;
                 this.img_launch_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this. launchsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }

          if(this.break_sec.msg[i].sec_url!=''){
          this.launch_sec=this.break_sec.msg[i].sec_url
         }
         else{
          this.launch_sec="";

         }
        }
      }
    }

    })
    //For dinner section url
    this.lagunaserve.get_sec_url('3',this.resid).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){
      for(let i=0;i<this.break_sec.msg.length;i++)
      {

        if(this.break_sec.msg[i].sec_img!='')
               {
                this.Dinner_section_preview=false;
                 this.img_dinner_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this. branchsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }
        if(this.break_sec.msg[i].sec_url!=''){
          this.dinner_sec=this.break_sec.msg[i].sec_url
         }
         else{
          this.dinner_sec="";

         }
      }
    }

    })
    //For brunch section url
    this.lagunaserve.get_sec_url('4',this.resid).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){


      for(let i=0;i<this.break_sec.msg.length;i++)
      {
        if(this.break_sec.msg[i].sec_url!=''){
          if(this.break_sec.msg[i].sec_img!='')
               {
                this.Brunch_section_preview=false;
                 this.img_brunch_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this.dinnersectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }
          this.brunch_sec=this.break_sec.msg[i].sec_url
         }
         else{
          this.brunch_sec="";

         }
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
             console.log("7Days checked")

              this.every_break=document.getElementById('vehicle1');
              this.every_break.checked=true;
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
        this.design=document.getElementById('London');
        this.design.className='tabcontent m-1'
        this.tab1=false;
        this.tab2=true;

        this.tab3=true;

        this.tab4=true;


      }
       //If Select only launch

      if(launch==''){
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
              this.every_launch=document.getElementById('vehicle12');
              this.every_launch.checked=true
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
        this.design=document.getElementById('paris');
        this.design.className=' tabcontent m-1';
        this.coc=document.getElementById('defaultOpen1');
        this.coc.className='active ';
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

       if(dinner==''){
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
              this.every_dinner=document.getElementById('vehicle13');
              this.every_dinner.checked=true;
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
        this.design=document.getElementById('tokyo');
        this.design.className='tabcontent m-1';
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

      if(brunch==''){
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
              this.every_brunch=document.getElementById('vehicle14');
              this.every_brunch.checked=true;
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
        this.design=document.getElementById('laguna');

        this.design.className=' tabcontent m-1';
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

    //If Select only breakfast
      if(breakfast==''){
        console.log("sdas");
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
              this.every_break=document.getElementById('vehicle1');
              this.every_break.checked=true;
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
        // this.lagunadefault=true;
        // this.tokyodefault=true;
        // this.parisdefault=true;
        this.coc=document.getElementById('defaultOpen');
        this.coc.className='active';

        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        this.design=document.getElementById('London');
        this.design.className='tabcontent m-1'
        this.tab1=false;
        this.tab2=true;

        this.tab3=true;

        this.tab4=true;


      }
       //If Select only launch

      if(launch==''){
        console.log("sssssdas");

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
              this.every_launch=document.getElementById('vehicle12');
              this.every_launch.checked=true
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
        this.design=document.getElementById('paris');
        this.design.className='tabcontent m-1';
        this.coc=document.getElementById('defaultOpen1');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        // this.londondefault=true;
        // this.lagunadefault=true;

        // this.tokyodefault=true;

        this.parisdefault=false;
        this.tab1=true;
        this.tab2=false;

        this.tab3=true;

        this.tab4=true;

      }
       //If Select only dinner

       if(dinner==''){
        console.log("sdasdasdass");

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
              this.every_dinner=document.getElementById('vehicle13');
              this.every_dinner.checked=true;
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
        this.design=document.getElementById('tokyo');
        this.design.className='tabcontent m-1';
        this.coc=document.getElementById('defaultOpen2');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        // this.londondefault=true;
        // this.lagunadefault=true;
        this.tokyodefault=false;
      //  this.parisdefault=true;
       this.tab1=true;
        this.tab2=true;

        this.tab3=false;

        this.tab4=true;
      }
       //If Select only brunch

      if(brunch==''){
        console.log("sdasaasas");

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
              this.every_brunch=document.getElementById('vehicle14');
              this.every_brunch.checked=true;
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
        this.design=document.getElementById('laguna');
        this.design.className='tabcontent m-1';
        this.coc=document.getElementById('defaultOpen3');
        this.coc.className='active';
        this.coc.style.background = '#00477e;';
        this.coc.style.color = 'white';
        // this.londondefault=true;
        this.lagunadefault=false;
      //   this.tokyodefault=true;
      //  this.parisdefault=true;
       this.tab1=true;
        this.tab2=true;

        this.tab3=true;

        this.tab4=false;
      }
      // else if(this.v==2){}
      //IF select breakfast && launch
    if(breakfast=='' && launch==''){

    this.coc=document.getElementById('defaultOpen');
    this.coc.className='active';
    this.coc.style.background = '#00477e;';
    this.coc.style.color = 'white';
    this.design=document.getElementById('London');
    this.design.className='tabcontent m-1'
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
             console.log("7Days checked")
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

    if(breakfast=='' && dinner==''){

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
      this.design=document.getElementById('London');
      this.design.className='tabcontent m-1'
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

  if(breakfast=='' && brunch==''){

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
      this.design=document.getElementById('London');
      this.design.className='tabcontent m-1'
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

    if(launch=='' && brunch==''){

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

      this.design=document.getElementById('paris');
        this.design.className='tabcontent m-1';
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

   if(launch=='' && dinner==''){
      this.design=document.getElementById('paris');
      this.design.className='tabcontent m-1';
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

    if(dinner=='' && brunch==''){

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
        this.design=document.getElementById('tokyo');
        this.design.className='tabcontent m-1';
        this.tab1=true;
        this.tab2=true;

        this.tab3=false;

        this.tab4=true;


    }
    }
    if(localStorage.getItem('No_of_menu')=='U')
   {
    this.coc=document.getElementById('defaultOpen');
    this.coc.className='active';
    this.design=document.getElementById('London');
        this.design.className='tabcontent m-1';
    this.coc.style.background = '#00477e;';
    this.coc.style.color = 'white';
    this.design=document.getElementById('London');
    this.design.className='tabcontent m-1'
      this.londondefault=false;
      this.lagunadefault=false;
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
//For Checking approval flag is on or not
this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
  console.log(data);
  this.check=data;
  if(this.check.msg[0].approval_flag=='U'){
    this.show_toast=true;


  }
  else{
    this.show_toast=false;
    // this.toastr.warningToastr('Set up mode is on , you can not update or insert','Alert!!',{
    //   dismiss:'click',
    //   maxShown:'1',
    //   toastTimeout:'5000'


    // })
    if(localStorage.getItem('breakfast')==''){
      this.londondefault=false;

    }
    if(localStorage.getItem('launch')==''){
      this.parisdefault=false;

    }
    if(localStorage.getItem('dinner')==''){
      this.tokyodefault=false;

    }
    if(localStorage.getItem('brunch')==''){
      this.lagunadefault=false;

    }

    this.b_url=true;
    this.lcc_url=true;
    this.d_url=true;
    this.br_url=true;
    this.break_button=true;
    this.launch_button=true;
    this.dinner_button=true;
    this.brunch_button=true;

  }
})
}
  //For changing the tab
  openCity(e: any,v1:any) {

    console.log("val:",this.v)

    if (e == 'London'){
      // this.Special_menu = document.getElementById('defaultOpen4');

      // this.Special_menu.style.background = '#f1f1f1';
      // this.Special_menu.style.color = 'black';
    //  this.tab5=true;

      this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;
      this.cove_top.length=0;
      this.break_sec.length=0;
      this.lagunaserve.get_menu_urls(this.resid,null).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){


        for(let i=0;i<this.cove_top.menu_dt.length;i++){
          // console.log(this.cove_top.menu_dt[i].menu_id);
          if(this.cove_top.menu_dt.length!=0){
            if(this.cove_top.menu_dt[i].menu_id==1){

              console.log("sadasda1");


                   this.break_menu=this.cove_top.menu_dt[i].menu_url;
                   console.log(this.break_menu);


                 if(this.cove_top.menu_dt[i].active_flag=='Y'){
                    this.check_break=document.getElementById('bkmenu');
                    this.check_break.checked=true;
                    this.break_check='Y';
                    this.b_url=false;
                 }
                 else {
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=false;
                  this.break_check='N';
                  this.b_url=true
                 }
              }
            }



        }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
        if(this.cove_top.oth_dt.length!=0){
          if(this.cove_top.oth_dt[i].menu_id==1){

                 this.break_cover=this.cove_top.oth_dt[i].cover_page_url;
                 this.break_top=this.cove_top.oth_dt[i].top_img_url;
                 console.log(this.break_cover, this.break_top);

                 this.break_menu=this.cove_top.menu_dt[i].menu_url;
              // if(this.cove_top.oth_dt[i].active_flag=='Y'){
              //     this.check_break=document.getElementById('bkmenu');
              //     this.check_break.checked=true;
              //     this.break_check='Y';
              //     this.b_url=false;
              //  }
              //  else {
              //   this.check_break=document.getElementById('bkmenu');
              //   this.check_break.checked=false;
              //   this.break_check='N';
              //   this.b_url=true
              //  }
            }



        }
      }


        //For Checking approval flag is on or not
  this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
    console.log(data);
    this.check=data;
    if(this.check.msg[0].approval_flag=='U'){

    }
    else{
      if(localStorage.getItem('breakfast')==''){
        this.londondefault=false;

      }
      if(localStorage.getItem('launch')==''){
        this.parisdefault=false;

      }
      if(localStorage.getItem('dinner')==''){
        this.tokyodefault=false;

      }
      if(localStorage.getItem('brunch')==''){
        this.lagunadefault=false;

      }
      this.b_url=true;
      this.lcc_url=true;
      this.d_url=true;
      this.br_url=true;
      this.break_button=true;
      this.launch_button=true;
      this.dinner_button=true;
      this.brunch_button=true;
      console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

    }
  })
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

            if(localStorage.getItem('breakfast')==''){
              this.tab1 = false;
              this.tab2 = true;
              this.tab3 = true;
              this.tab4 = true;
              this.tab5 = true;
              this.paris = document.getElementById('London');
              this.paris.className = 'active tabcontent m-1';
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
            else{
            this. myFunction_forerror();

            }
          //Snackbar

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
          if(localStorage.getItem('breakfast')==''){
            this.tab1 = false;
            this.tab2 = true;
            this.tab3 = true;
            this.tab4 = true;
            this.tab5 = true;
            this.paris = document.getElementById('London');
            this.paris.className = 'active  tabcontent m-1';

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
          else{
          this. myFunction_forerror();

          }
        //Snackbar
        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){

          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          // this.lagunadefault=false;
          // this.parisdefault=false;
          // this.tokyodefault=false;
          // this.londondefault=false;
          this.paris = document.getElementById('London');
          this.paris.className = 'active  tabcontent m-1';
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
        this.paris.className = 'active  tabcontent m-1';
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
      this.Special_menu = document.getElementById('defaultOpen4');

      this.Special_menu.style.background = '#f1f1f1';
      this.Special_menu.style.color = 'black';
         //For Checking approval flag is on or not
         this.tab5=true;

      this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;


      console.log(this.v);


      this.break_sec.length=0;
      this.cove_top.length=0;

      this.lagunaserve.get_menu_urls(this.resid,null).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){


        for(let i=0;i<this.cove_top.menu_dt.length;i++){
          // console.log(this.cove_top.menu_dt[i].menu_id);
          if(this.cove_top.menu_dt.length!=0){

              if(this.cove_top.menu_dt[i].menu_id==2){

                console.log("sadasda3");

                  // this.launch_cover=this.cove_top.msg[i].cover_page_url;
                  // this.launch_top=this.cove_top.msg[i].top_img_url;
                  this.launch_menu=this.cove_top.menu_dt[i].menu_url;
                  // console.log(this.launch_top,this.launch_cover);


                if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_launch=document.getElementById('paris');
                  this.check_launch.checked=true;
                  this.launch_check='Y'
                  this.lcc_url=false;
               }
               else {
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=false;
                this.launch_check='N';
                this.lcc_url=true;

               }
             }


          }
        }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
         if(this.cove_top.oth_dt.length!=0){

             if(this.cove_top.oth_dt[i].menu_id==2){

                console.log("sadasda3");

                  this.launch_cover=this.cove_top.oth_dt[i].cover_page_url;
                  this.launch_top=this.cove_top.oth_dt[i].top_img_url;
              //   if(this.cove_top.oth_dt[i].active_flag=='Y'){
              //     this.check_launch=document.getElementById('paris');
              //     this.check_launch.checked=true;
              //     this.launch_check='Y'
              //     this.lcc_url=false;
              //  }
              //  else {
              //   this.check_launch=document.getElementById('paris');
              //   this.check_launch.checked=false;
              //   this.launch_check='N';
              //   this.lcc_url=true;

              //  }
            }
          }

        }

                //For Checking approval flag is on or not
                this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
                  console.log(data);
                  this.check=data;
                  if(this.check.msg[0].approval_flag=='U'){

                  }
                  else{
                    if(localStorage.getItem('breakfast')==''){
                      this.londondefault=false;

                    }
                    if(localStorage.getItem('launch')==''){
                      this.parisdefault=false;

                    }
                    if(localStorage.getItem('dinner')==''){
                      this.tokyodefault=false;

                    }
                    if(localStorage.getItem('brunch')==''){
                      this.lagunadefault=false;

                    }
                    this.b_url=true;
                    this.lcc_url=true;
                    this.d_url=true;
                    this.br_url=true;
                    this.break_button=true;
                    this.launch_button=true;
                    this.dinner_button=true;
                    this.brunch_button=true;
                    console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

                  }
                })
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
        // this. myFunction_forerror();
        if(localStorage.getItem('launch')==''){
          this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
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
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
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
        else{
        this. myFunction_forerror();

        }

      }
     else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){

       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
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
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
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
          //  this. myFunction_forerror();

           // this. myFunction_forerror();
        if(localStorage.getItem('launch')==''){
          this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
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
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
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
        else{
        this. myFunction_forerror();

        }

        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = true;
          this.tab4 = true;
          this.paris = document.getElementById('Paris');
          this.paris.className = 'active  tabcontent m-1';
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
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
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
        this.paris.className = 'active  tabcontent m-1';
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
          // this.brunch_start=this.launch_start;
          // this.brunch_end=this.launch_end;
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
      this.Special_menu = document.getElementById('defaultOpen4');

      this.Special_menu.style.background = '#f1f1f1';
      this.Special_menu.style.color = 'black';
      this.tab5=true;

      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;
      this.brunch_start='';
        this.brunch_end='';
        this.lagunaserve.get_menu_urls(this.resid,null).subscribe(data=>{
          this.cove_top.length=0;
          console.log(data);
          this.cove_top=data;
          // if(this.cove_top.length!=0){


          for(let i=0;i<this.cove_top.menu_dt.length;i++){
            // console.log(this.cove_top.menu_dt[i].menu_id);
            if(this.cove_top.menu_dt.length!=0){
              if(this.cove_top.menu_dt[i].menu_id==3){
                console.log("sadasda2");
                  // this.dinner_cover=this.cove_top.menu_dt[i].cover_page_url;
                  // this.dinner_top=this.cove_top.menu_dt[i].top_img_url;
                  this.dinner_menu=this.cove_top.menu_dt[i].menu_url;
                if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_dinner=document.getElementById('tokyo');
                  this.check_dinner.checked=true;
                  this.brunch_check='Y';
                  this.d_url=false;
               }
               else {
                this.check_dinner=document.getElementById('tokyo');
                this.check_dinner.checked=false;
                this.brunch_check='N';
                this.d_url=true;

               }
               }


            }
           }
           for(let i=0;i<this.cove_top.oth_dt.length;i++){
            if(this.cove_top.oth_dt.length!=0){
              if(this.cove_top.oth_dt[i].menu_id == 3){
                console.log("sadasda2");
                  this.dinner_cover=this.cove_top.oth_dt[i].cover_page_url;
                  this.dinner_top=this.cove_top.oth_dt[i].top_img_url;
                  // this.dinner_menu=this.cove_top.oth_dt[i].menu_url;
              //   if(this.cove_top.oth_dt[i].active_flag=='Y'){
              //     this.check_dinner=document.getElementById('tokyo');
              //     this.check_dinner.checked=true;
              //     this.brunch_check='Y';
              //     this.d_url=false;
              //  }
              //  else {
              //   this.check_dinner=document.getElementById('tokyo');
              //   this.check_dinner.checked=false;
              //   this.brunch_check='N';
              //   this.d_url=true;

              //  }
               }



            }
           }
                //For Checking approval flag is on or not
            this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
    console.log(data);
    this.check=data;
    if(this.check.msg[0].approval_flag=='U'){

    }
    else{
      if(localStorage.getItem('breakfast')==''){
        this.londondefault=false;

      }
      if(localStorage.getItem('launch')==''){
        this.parisdefault=false;

      }
      if(localStorage.getItem('dinner')==''){
        this.tokyodefault=false;

      }
      if(localStorage.getItem('brunch')==''){
        this.lagunadefault=false;

      }
      this.b_url=true;
      this.lcc_url=true;
      this.d_url=true;
      this.br_url=true;
      this.break_button=true;
      this.launch_button=true;
      this.dinner_button=true;
      this.brunch_button=true;
      console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

    }
  })
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
          // this. myFunction_forerror();
          if(localStorage.getItem('dinner')==''){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active  tabcontent m-1';

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
              // this.brunch_start=this.dinner_start;
              //   this.brunch_end=this.dinner_end;
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
          else{
          this. myFunction_forerror();

          }

          }
          else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active  tabcontent m-1';

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
              // this.brunch_start=this.dinner_start;
              //   this.brunch_end=this.dinner_end;
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
          //  this. myFunction_forerror();
            // this. myFunction_forerror();
            if(localStorage.getItem('dinner')==''){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              this.paris = document.getElementById('Tokyo');
              this.paris.className = 'active  tabcontent m-1';

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
                // this.brunch_start=this.dinner_start;
                //   this.brunch_end=this.dinner_end;
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
            else{
            this. myFunction_forerror();

            }



            }
            else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              // this.lagunadefault=false;
              // this.parisdefault=false;
              // this.tokyodefault=false;
              // this.londondefault=false;
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
              // this.brunch_start=this.dinner_start;
              // this.brunch_end=this.dinner_end;
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
          this.paris.className = 'active  tabcontent m-1';

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
            // this.brunch_start=this.dinner_start;
            // this.brunch_end=this.dinner_end;
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


         //For Checking approval flag is on or not
     //For Checking approval flag is on or not
this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
  console.log(data);
  this.check=data;
  if(this.check.msg[0].approval_flag=='U'){

  }
  else{
    if(localStorage.getItem('breakfast')==''){
      this.londondefault=false;

    }
    if(localStorage.getItem('launch')==''){
      this.parisdefault=false;

    }
    if(localStorage.getItem('dinner')==''){
      this.tokyodefault=false;

    }
    if(localStorage.getItem('brunch')==''){
      this.lagunadefault=false;

    }
    this.b_url=true;
    this.lcc_url=true;
    this.d_url=true;
    this.br_url=true;
    this.break_button=true;
    this.launch_button=true;
    this.dinner_button=true;
    this.brunch_button=true;
    console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

  }
})


    }
    else if (e == 'Laguna'){
      this.Special_menu = document.getElementById('defaultOpen4');

      this.Special_menu.style.background ='#f1f1f1';
      this.Special_menu.style.color = 'black';

     this.tab5=true;
      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;

      this.lagunaserve.get_menu_urls(this.resid,null).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){


        for(let i=0;i<this.cove_top.menu_dt.length;i++){

          if(this.cove_top.menu_dt.length!=0){
            if(this.cove_top.menu_dt[i].menu_id==4){

              console.log("sadasda4");

                this.brunch_menu=this.cove_top.menu_dt[i].menu_url;


              if(this.cove_top.menu_dt[i].active_flag=='Y'){
                this.check_brunch=document.getElementById('laguna');
                this.check_brunch.checked=true;
                this.dinner_check='Y';
                this.br_url=false;
             }
             else {
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=false;
              this.dinner_check='N';
              this.br_url=true;

             }
           }

          }
        }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
         if(this.cove_top.oth_dt.length!=0){
            if(this.cove_top.oth_dt[i].menu_id==4){

              console.log("sadasda4");

                this.brunch_cover=this.cove_top.oth_dt[i].cover_page_url;
                this.brunch_top=this.cove_top.oth_dt[i].top_img_url;

            //   if(this.cove_top.oth_dt[i].active_flag=='Y'){
            //     this.check_brunch=document.getElementById('laguna');
            //     this.check_brunch.checked=true;
            //     this.dinner_check='Y';
            //     this.br_url=false;
            //  }
            //  else {
            //   this.check_brunch=document.getElementById('laguna');
            //   this.check_brunch.checked=false;
            //   this.dinner_check='N';
            //   this.br_url=true;

            //  }
           }

          }
          }

          //For Checking approval flag is on or not
          this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
            console.log(data);
            this.check=data;
            if(this.check.msg[0].approval_flag=='U'){

            }
            else{
              if(localStorage.getItem('breakfast')==''){
                this.londondefault=false;

              }
              if(localStorage.getItem('launch')==''){
                this.parisdefault=false;

              }
              if(localStorage.getItem('dinner')==''){
                this.tokyodefault=false;

              }
              if(localStorage.getItem('brunch')==''){
                this.lagunadefault=false;

              }
              this.b_url=true;
              this.lcc_url=true;
              this.d_url=true;
              this.br_url=true;
              this.break_button=true;
              this.launch_button=true;
              this.dinner_button=true;
              this.brunch_button=true;
              console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

            }
          })


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

      if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
            //Snackbar
           if(localStorage.getItem('brunch')==''){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = true;
            this.tab4 = false;

            this.paris = document.getElementById('Laguna');
            this.paris.className = 'active  tabcontent m-1';
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
              // this.brunch_start=this.Brunch_start;
              // this.brunch_end=this.Brunch_end;
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
           else{
           this. myFunction_forerror();

           }

          }
         else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;

          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active  tabcontent m-1';
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
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
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
         if(localStorage.getItem('brunch')==''){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;

          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active  tabcontent m-1';
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
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
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
         else{
         this. myFunction_forerror();

         }

      }
     else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
      this.tab1 = true;
      this.tab2 = true;
      this.tab3 = true;
      this.tab4 = false;

      this.paris = document.getElementById('Laguna');
      this.paris.className = 'active  tabcontent m-1';
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
        console.log(data);
        if( this.arr_brak_check.msg.length!=0){

        this.Brunch_start=this.arr_brak_check.msg[0].start_time;
        this.Brunch_end=this.arr_brak_check.msg[0].end_time;
        // this.brunch_start=this.Brunch_start;
        // this.brunch_end=this.Brunch_end;
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
        this.paris.className = 'active  tabcontent m-1';
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
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
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
    else if(e=='Shrewsbury'){
      this.tab1=true;
      this.tab2=true;
      this.tab3=true;
      this.tab4=true;
      this.tab5=false;
      // this.paris = document.getElementById('Laguna');
      // this.paris.style.color = 'black';
      // this.paris.style.background = '#f1f1f1';
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

      this.WALL.style.background = '#f1f1f1';
      this.WALL.style.color = 'black';
      this.Special_menu=document.getElementById('Shrewsbury');
      this.Special_menu.className="active tabcontent"
      this.Special_menu = document.getElementById('defaultOpen4');

      this.Special_menu.style.background = '#00477e';
      this.Special_menu.style.color = 'white';

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
    console.log(this.break_check,this.v,this.breakfastcoverimage,MENUURL,this.breakfasttopimage,this.multipleImages,this.breakfastsectionimage)
    this.spinner.show();
    if(this.break_check=='N'){
     localStorage.setItem('breakfast','active');
     if(this.v==1){

       this.v=0;


       const formData = new FormData();

       formData.append('coverurl', COVERPAGEURL);
       formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);


       formData.append('topurl', TOPIMAGEURL);
       formData.append('MenuUrl', MENUURL);
       formData.append('SectionUrl',SECTIONURL);
       formData.append('cov_img',this.breakfastcoverimage);
       formData.append('top_img', this.breakfasttopimage);

        formData.append('restaurant_id',this.resid);
        formData.append('menu_id',hidevalue);
        formData.append('break_check',this.break_check);

        formData.append('restaurant_name',this.res_name);

       for(let img of this.breakfastsectionimage){
         formData.append('section_img', img);
       }
       for (let img of this.multipleImages) {
         formData.append('menu_img', img);
       }

       console.log(this.multipleImages)
       this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
         (res) =>{ console.log(res),
        //  (err) => console.log(err),
        this.spinner.hide();
        this.myFunction_update();
    
     });

     ///////////////////////////////////
     this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
      (res) =>{console.log(res);
        // this.spinner.hide();
        // this.myFunction_update();
      // (err) => console.log(err)
    });
    
    // UPLOAD SECTION FILE //
    this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
      (res) =>{console.log(res);
        // this.spinner.hide();
        // this.myFunction_update();
      // (err) => console.log(err)
    });
     //////////////////////////////////
         this.storevalue.length=0;
       this.storevalue.push({

       "restaurant_id":this.resid,
       "menu_id":hidevalue,
       "break_check":this.break_check,
       "start_time":v1,
       "end_time":v2,
       "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
     });
         console.log(this.storevalue);

         this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
    

      })



     }
     else if(this.v==2){
       this.v=1;
       const formData = new FormData();

       formData.append('coverurl', COVERPAGEURL);
       formData.append('topurl', TOPIMAGEURL);
       formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
       formData.append('MenuUrl', MENUURL);
       formData.append('SectionUrl',SECTIONURL);
       formData.append('cov_img',this.breakfastcoverimage);
       formData.append('top_img', this.breakfasttopimage);

        formData.append('restaurant_id',this.resid);
        formData.append('menu_id',hidevalue);
        formData.append('break_check',this.break_check);

        formData.append('restaurant_name',this.res_name);
       for(let img of this.breakfastsectionimage){
         formData.append('section_img', img);
       }
       for (let img of this.multipleImages) {
         formData.append('menu_img', img);
       }

       console.log(this.multipleImages)
       this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
         (res) =>{ console.log(res);
          this.spinner.hide();
          this.myFunction_update();
        //  (err) => console.log(err)
        });
///////////////////////////////////////////////
this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
  (res) =>{console.log(res);
    // this.spinner.hide();
    // this.myFunction_update();
  // (err) => console.log(err)
});

// UPLOAD SECTION FILE //
this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
  (res) =>{console.log(res);
    // this.spinner.hide();
    // this.myFunction_update();
  // (err) => console.log(err)
});
/////////////////////////////////////





         this.storevalue.length=0;
       this.storevalue.push({

       "restaurant_id":this.resid,
       "menu_id":hidevalue,
       "break_check":this.break_check,
       "start_time":v1,
       "end_time":v2,
       "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
     });
         console.log(this.storevalue);

         this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction_update();

      })

     }
   }
   else{
    if(v1<v2){
   if(localStorage.getItem('breakfast')==''){



        const formData = new FormData();
        formData.append('coverurl', COVERPAGEURL);
        formData.append('topurl', TOPIMAGEURL);
        formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
        formData.append('MenuUrl', MENUURL);
        formData.append('SectionUrl',SECTIONURL);
        formData.append('cov_img',this.breakfastcoverimage);
        formData.append('top_img', this.breakfasttopimage);

         formData.append('restaurant_id',this.resid);
         formData.append('menu_id',hidevalue);
         formData.append('break_check',this.break_check);

         formData.append('restaurant_name',this.res_name);



        // FOR PHP SUBMIT //
        // for(let img of this.breakfastsectionimage){
        //   formData.append('section_img[]', img);
        // }
        // for (let img of this.multipleImages) {
        //   formData.append('menu_img[]', img);
        // }
        // END //

        for(let img of this.breakfastsectionimage){
          formData.append('section_img', img);
        }
        for (let img of this.multipleImages) {
          formData.append('menu_img', img);
        }


        console.log(this.multipleImages)
        this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
          (res) =>{console.log(res);
            this.spinner.hide();
            this.myFunction_update();
          // (err) => console.log(err)
        });
/////////////////////////////////////PHP PATH/////////////////////////////////////////////////////////////
// console.log("APIHIT");
// // UPLOAD MENU FILE //
// this.http.post<any>('http://localhost/laguna_api_ci/index.php/api/upload_menu_image', formData).subscribe(
//   (res) =>{console.log(res);
//     // this.spinner.hide();
//     // this.myFunction_update();
//   // (err) => console.log(err)
// });

// // UPLOAD SECTION FILE //
// this.http.post<any>('http://localhost/laguna_api_ci/index.php/api/upload_sec_image', formData).subscribe(
//   (res) =>{console.log(res);
//     // this.spinner.hide();
//     // this.myFunction_update();
//   // (err) => console.log(err)
// });

/////////////////////////////////////////////PHP FILE END/////////////////////////////////////////////////////

/////////////////////////////////////////// TEST ////////////////////////////////////
this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
  (res) =>{console.log(res);
    // this.spinner.hide();
    // this.myFunction_update();
  // (err) => console.log(err)
});

// UPLOAD SECTION FILE //
this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
  (res) =>{console.log(res);
    // this.spinner.hide();
    // this.myFunction_update();
  // (err) => console.log(err)
});
////////////////////////////////////////////END ////////////////////////////////////

        this.storevalue.length=0;
        this.storevalue.push({

        "restaurant_id":this.resid,
        "menu_id":hidevalue,
        "break_check":this.break_check,
        "start_time":v1,
        "end_time":v2,
        "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
      });
          console.log(this.storevalue);

          this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
         console.log(data);
        

       })



      }
      else{
      console.log(this.v);
      localStorage.setItem('breakfast','');
      if(localStorage.getItem('No_of_menu')=='O'){
        if(this.v==0){
          this.v=1;
          this.storevalue.length=0;
          const formData = new FormData();

          formData.append('coverurl', COVERPAGEURL);
          formData.append('topurl', TOPIMAGEURL);
          formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
          formData.append('MenuUrl', MENUURL);
          formData.append('SectionUrl',SECTIONURL);
          formData.append('cov_img',this.breakfastcoverimage);
          formData.append('top_img', this.breakfasttopimage);

           formData.append('restaurant_id',this.resid);
           formData.append('menu_id',hidevalue);
           formData.append('break_check',this.break_check);

           formData.append('restaurant_name',this.res_name);




          for(let img of this.breakfastsectionimage){
            formData.append('section_img', img);
          }
          for (let img of this.multipleImages) {
            formData.append('menu_img', img);
          }

          console.log(this.multipleImages)
          this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
            (res) => {console.log(res);
              this.spinner.hide();
              this.myFunction();

            // (err) => console.log(err)
            });

          // ///////////////////////////////
          this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          
          // UPLOAD SECTION FILE //
          this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
////////////////////////////////////////////////////////
          this.storevalue.length=0;
          this.storevalue.push({

          "restaurant_id":this.resid,
          "menu_id":hidevalue,
          "break_check":this.break_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
        });
            console.log(this.storevalue);

            this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
           console.log(data);
          //  this.spinner.hide();
          //  this.myFunction();

         })






        }
        else{

          this. myFunction_forerror();

        }
      }
      else if(localStorage.getItem('No_of_menu')=='T'){
        if(this.v==0){
          this.v=1;
          this.storevalue.length=0;
          const formData = new FormData();

          formData.append('coverurl', COVERPAGEURL);
          formData.append('topurl', TOPIMAGEURL);
          formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
          formData.append('MenuUrl', MENUURL);
          formData.append('SectionUrl',SECTIONURL);
          formData.append('cov_img',this.breakfastcoverimage);
          formData.append('top_img', this.breakfasttopimage);

           formData.append('restaurant_id',this.resid);
           formData.append('menu_id',hidevalue);
           formData.append('break_check',this.break_check);

           formData.append('restaurant_name',this.res_name);




          for(let img of this.breakfastsectionimage){
            formData.append('section_img', img);
          }
          for (let img of this.multipleImages) {
            formData.append('menu_img', img);
          }

          console.log(this.multipleImages)
          this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
            (res) =>{ console.log(res);
              this.spinner.hide();
              this.myFunction();
          });

          ///////////////////////////////
          this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          
          // UPLOAD SECTION FILE //
          this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          /////////////////////////////////////

          this.storevalue.length=0;
          this.storevalue.push({

          "restaurant_id":this.resid,
          "menu_id":hidevalue,
          "break_check":this.break_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
        });
            console.log(this.storevalue);

            this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
           console.log(data);
       

         })

        }
        else if(this.v==1){
          this.v=2;
          this.storevalue.length=0;
          const formData = new FormData();

          formData.append('coverurl', COVERPAGEURL);
          formData.append('topurl', TOPIMAGEURL);
          formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
          formData.append('MenuUrl', MENUURL);
          formData.append('SectionUrl',SECTIONURL);
          formData.append('cov_img',this.breakfastcoverimage);
          formData.append('top_img', this.breakfasttopimage);

           formData.append('restaurant_id',this.resid);
           formData.append('menu_id',hidevalue);
           formData.append('break_check',this.break_check);

           formData.append('restaurant_name',this.res_name);




          for(let img of this.breakfastsectionimage){
            formData.append('section_img', img);
          }
          for (let img of this.multipleImages) {
            formData.append('menu_img', img);
          }

          console.log(this.multipleImages)
          this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
            (res) =>{ console.log(res),
              this.spinner.hide();
              this.myFunction();
          });


          ////////////////////////////////////
          this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          
          // UPLOAD SECTION FILE //
          this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          ///////////////////////////////////

          this.storevalue.length=0;
          this.storevalue.push({

          "restaurant_id":this.resid,
          "menu_id":hidevalue,
          "break_check":this.break_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
        });
            console.log(this.storevalue);

            this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
           console.log(data);
           

         })




        }
        else{
          //snackbar
          this. myFunction_forerror();

        }
      }
      else {
        this.v=3
        this.storevalue.length=0;

        const formData = new FormData();
        // const notBase64 = /[^A-Z0-9+\/=]/i;
        // this.breakfastcoverimage = notBase64.test(this.breakfastcoverimage) ? this.breakfastcoverimage : '';
        // console.log({tes: notBase64.test(this.breakfastcoverimage)});
          // formData.append('file', this.breakfastcoverimage);
          formData.append('coverurl', COVERPAGEURL);
          formData.append('topurl', TOPIMAGEURL);
          formData.append('cov_filename', this.breakfast_cover_name);
       formData.append('top_filename', this.breakfast_top_name);
          formData.append('MenuUrl', MENUURL);
          formData.append('SectionUrl',SECTIONURL);
          formData.append('cov_img',this.breakfastcoverimage);
          formData.append('top_img', this.breakfasttopimage);
          //  formData.append('month_day',this.break_dt);
           formData.append('restaurant_id',this.resid);
           formData.append('menu_id',hidevalue);
           formData.append('break_check',this.break_check);
          //  formData.append("start_time",this.brunch_start);
          //  formData.append('end_time',this.brunch_end);
           formData.append('restaurant_name',this.res_name);




          for(let img of this.breakfastsectionimage){
            formData.append('section_img', img);
          }
          for (let img of this.multipleImages) {
            formData.append('menu_img', img);
          }

          console.log(this.multipleImages)
          this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
            (res) =>{
              console.log(res);
              this.spinner.hide();
              this.myFunction();
            // (err) => console.log(err)
          } );


          //////////////////////////
          this.http.post<any>(this.url_reg+'/menu_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          
          // UPLOAD SECTION FILE //
          this.http.post<any>(this.url_reg+'/sec_file_testing', formData).subscribe(
            (res) =>{console.log(res);
              // this.spinner.hide();
              // this.myFunction_update();
            // (err) => console.log(err)
          });
          ////////////////////////////////

          this.storevalue.length=0;
          this.storevalue.push({

          "restaurant_id":this.resid,
          "menu_id":hidevalue,
          "break_check":this.break_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
        });
            console.log(this.storevalue);

            this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
           console.log(data);
         

         })

          }

       }
      }
     else{
    this.spinner.hide();

       this.myFunction_fortime()
     }
   }
localStorage.setItem('value',this.v)
}

  // For Submitting the data of Dinner
  opennextab2(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    this.spinner.show();

    console.log(this.brunch_check);

  if(this.brunch_check=='N'){
    localStorage.setItem('dinner','active');

    if(this.v==1){
      this.v=0
      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('MenuUrl', v2);
      formData.append('SectionUrl',v1);
      formData.append('cov_filename', this.dinner_cover_name);
    formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);

       formData.append('restaurant_name',this.res_name);




      for(let img1 of this.branchsectionimage){
        formData.append('section_img', img1);
      }
      for (let img of this.branchmenuimage) {
        formData.append('menu_img', img);
      }
      console.log(this.branchsectionimage);
      console.log(this.branchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res),
        this.spinner.hide();
        this.myFunction_update();
        });

      this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        

      })

    }
    else if(this.v==2){
      this.v=1;
      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('MenuUrl', v2);
      formData.append('SectionUrl',v1);
      formData.append('cov_filename', this.dinner_cover_name);
      formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);

       formData.append('restaurant_name',this.res_name);




      for(let img1 of this.branchsectionimage){
        formData.append('section_img', img1);
      }
      for (let img of this.branchmenuimage) {
        formData.append('menu_img', img);
      }
      console.log(this.branchsectionimage);
      console.log(this.branchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res),
          this.spinner.hide();
          this.myFunction_update();
          });

      this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction_update();

      })

    }
  }
  else{
    if(v6<v7){
     if( localStorage.getItem('dinner')==''){
      this.storevalue.length=0;
      const formData = new FormData();
        // formData.append('file', this.breakfastcoverimage);
        formData.append('coverurl', v4);
        formData.append('topurl',  v3);
        formData.append('MenuUrl', v2);
        formData.append('SectionUrl',v1);
        formData.append('cov_filename', this.dinner_cover_name);
        formData.append('top_filename', this.dinner_top_name);
        formData.append('cov_img',this.branchcoverimage);
        formData.append('top_img', this.branchtopimage);
        //  formData.append('month_day',this.break_dt);
         formData.append('restaurant_id',this.resid);
         formData.append('menu_id',v5);
         formData.append('break_check',this.brunch_check);

         formData.append('restaurant_name',this.res_name);




        for(let img1 of this.branchsectionimage){
          formData.append('section_img', img1);
        }
        for (let img of this.branchmenuimage) {
          formData.append('menu_img', img);
        }
        console.log(this.branchsectionimage);
        console.log(this.branchmenuimage)
        this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
          (res) =>{ console.log(res);
            this.spinner.hide();
          this.myFunction_update();
  
        });
        this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction_update();

      })

            // this.myFunction();





    }
    else{
    localStorage.setItem('dinner','');
    if(localStorage.getItem('No_of_menu')=='O'){

      if(this.v==0){
      this.v=1;
        this.storevalue.length=0;


        const formData = new FormData();
        // formData.append('file', this.breakfastcoverimage);
        formData.append('coverurl', v4);
        formData.append('topurl',  v3);
        formData.append('MenuUrl', v2);
        formData.append('cov_filename', this.dinner_cover_name);
        formData.append('top_filename', this.dinner_top_name);
        formData.append('SectionUrl',v1);
        formData.append('cov_img',this.branchcoverimage);
        formData.append('top_img', this.branchtopimage);
        //  formData.append('month_day',this.break_dt);
         formData.append('restaurant_id',this.resid);
         formData.append('menu_id',v5);
         formData.append('break_check',this.brunch_check);
        //  formData.append("start_time",this.brunch_start);
        //  formData.append('end_time',this.brunch_end);
         formData.append('restaurant_name',this.res_name);




         for(let img1 of this.branchsectionimage){
          formData.append('section_img', img1);
        }
        for (let img of this.branchmenuimage) {
          formData.append('menu_img', img);
        }


        console.log(this.multipleImages)
        this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
          (res) =>{ console.log(res);
          this.spinner.hide();
          this.myFunction();
        });
        this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction();

      })



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

           const formData = new FormData();

           formData.append('coverurl', v4);
           formData.append('topurl',  v3);
           formData.append('MenuUrl', v2);
           formData.append('SectionUrl',v1);
           formData.append('cov_filename', this.dinner_cover_name);
           formData.append('top_filename', this.dinner_top_name);
           formData.append('cov_img',this.branchcoverimage);
           formData.append('top_img', this.branchtopimage);

            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v5);
            formData.append('break_check',this.brunch_check);

            formData.append('restaurant_name',this.res_name);




            for(let img1 of this.branchsectionimage){
              formData.append('section_img', img1);
            }
            for (let img of this.branchmenuimage) {
              formData.append('menu_img', img);
            }

           console.log(this.multipleImages)
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) =>{ console.log(res);
              this.spinner.hide();
              this.myFunction();
            });
           this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction();

      })




         }
         else if(this.v==1){
           this.v=2;
           this.storevalue.length=0;

           const formData = new FormData();

           formData.append('coverurl', v4);
           formData.append('topurl',  v3);
           formData.append('MenuUrl', v2);
           formData.append('SectionUrl',v1);
           formData.append('cov_filename', this.dinner_cover_name);
           formData.append('top_filename', this.dinner_top_name);
           formData.append('cov_img',this.branchcoverimage);
           formData.append('top_img', this.branchtopimage);

            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v5);
            formData.append('break_check',this.brunch_check);

            formData.append('restaurant_name',this.res_name);




           for(let img of this.breakfastsectionimage){
             formData.append('section_img', img);
           }
           for (let img of this.branchmenuimage) {
             formData.append('menu_img', img);
           }

           console.log(this.multipleImages)
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) => { console.log(res);
              this.spinner.hide();
              this.myFunction();
            });

           this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction();

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

       const formData = new FormData();

       formData.append('coverurl', v4);
       formData.append('topurl',  v3);
       formData.append('MenuUrl', v2);
       formData.append('SectionUrl',v1);
       formData.append('cov_filename', this.dinner_cover_name);
       formData.append('top_filename', this.dinner_top_name);
       formData.append('cov_img',this.branchcoverimage);
       formData.append('top_img', this.branchtopimage);

        formData.append('restaurant_id',this.resid);
        formData.append('menu_id',v5);
        formData.append('break_check',this.brunch_check);

        formData.append('restaurant_name',this.res_name);




        for(let img1 of this.branchsectionimage){
          formData.append('section_img', img1);
        }
        for (let img of this.branchmenuimage) {
          formData.append('menu_img', img);
        }

       console.log(this.multipleImages)
       this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
         (res) => { console.log(res);
          this.spinner.hide();
          this.myFunction();
        });

       this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
        console.log(data);
        // this.spinner.hide();
        // this.myFunction();

      })
console.log(this.storevalue);

    }
      }


     }
    else{
    this.spinner.hide();
     this.myFunction_fortime();
    }
  }
  localStorage.setItem('value',this.v)
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
    console.log(this.lunch_cover_name, this.lunch_top_name);

    this.spinner.show();
 if(this.launch_check=='N'){
  localStorage.setItem('launch','active');

    if(this.v==1){
      this.v=0;

      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('MenuUrl', v4);
      formData.append('SectionUrl',v5);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
      //  formData.append("start_time",this.brunch_start);
      //  formData.append('end_time',this.brunch_end);
       formData.append('restaurant_name',this.res_name);




      for(let img1 of this.launchsectionimage){
        formData.append('section_img', img1);
      }
      for (let img of this.launchmenuimage) {
        formData.append('menu_img', img);
      }

      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
        this.spinner.hide();
          this.myFunction_update();
        // (err) => console.log(err)
    });
      this.storevalue.length=0;
      this.storevalue.push({

      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
console.log(data);
// this.spinner.hide();
// this.myFunction_update();

})


    }
    else if(this.v==2){
      this.v=1;

      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('MenuUrl', v4);
      formData.append('SectionUrl',v5);
      formData.append('cov_filename', this.lunch_cover_name);
      formData.append('top_filename', this.lunch_top_name);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
      //  formData.append("start_time",this.brunch_start);
      //  formData.append('end_time',this.brunch_end);
       formData.append('restaurant_name',this.res_name);




      for(let img1 of this.launchsectionimage){
        formData.append('section_img', img1);
      }
      for (let img of this.launchmenuimage) {
        formData.append('menu_img', img);
      }

      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res);
        this.spinner.hide();
this.myFunction_update();
        // (err) => console.log(err)
    });
      this.storevalue.length=0;
      this.storevalue.push({

      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
console.log(data);
// this.spinner.hide();
// this.myFunction_update();

})
    }
 }
 else{

if(v7<v8){
   console.log("spinner");



      if(localStorage.getItem('launch')==''){


      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('MenuUrl', v4);
      formData.append('SectionUrl',v5);
      formData.append('cov_filename', this.lunch_cover_name);
      formData.append('top_filename', this.lunch_top_name);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
      //  formData.append("start_time",this.brunch_start);
      //  formData.append('end_time',this.brunch_end);
       formData.append('restaurant_name',this.res_name);




      for(let img1 of this.launchsectionimage){
        formData.append('section_img', img1);
      }
      for (let img of this.launchmenuimage) {
        formData.append('menu_img', img);
      }

      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res);
        this.spinner.hide();
       this.myFunction_update();
        // (err) => console.log(err)
        });

      this.storevalue.length=0;
      this.storevalue.push({

      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
console.log(data);
// this.spinner.hide();
// this.myFunction_update();

})

          // this.myFunction();


        this.success=0;
        console.log(this.storevalue);

    }
    else{
     localStorage.setItem('launch','');

    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
           this.v=1
           this.storevalue.length=0;
           const formData = new FormData();
           // formData.append('file', this.breakfastcoverimage);
           formData.append('coverurl', v1);
           formData.append('cov_filename', this.lunch_cover_name);
           formData.append('top_filename', this.lunch_top_name);
           formData.append('topurl',  v2);
           formData.append('MenuUrl', v4);
           formData.append('SectionUrl',v5);
           formData.append('cov_img',this.launchcoverimage);
           formData.append('top_img',this.launchtopimage);
            // formData.append('month_day',this.break_dt);
            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v6);
            formData.append('break_check',this.launch_check);
            // formData.append("start_time",this.brunch_start);
            // formData.append('end_time',this.brunch_end);
            formData.append('restaurant_name',this.res_name);




           for(let img of this.launchsectionimage){
             formData.append('section_img', img);
           }
           for (let img of this.launchmenuimage) {
             formData.append('menu_img', img);
           }

           console.log(this.multipleImages)
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) =>{ console.log(res);
              this.spinner.hide();
               this.myFunction();

            //  (err) => console.log(err)
          });
           this.storevalue.length=0;
           this.storevalue.push({

           "restaurant_id":this.resid,
           "menu_id":v6,
           "break_check":this.launch_check,
           "start_time":v7,
       "end_time":v8,
       "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

         });
       console.log(this.storevalue);

       this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
     console.log(data);
  //  this.spinner.hide();
  //  this.myFunction();

   })

      //      this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      // "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

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
           const formData = new FormData();
           // formData.append('file', this.breakfastcoverimage);
           formData.append('coverurl', v1);
           formData.append('topurl',  v2);
           formData.append('MenuUrl', v4);
           formData.append('SectionUrl',v5);
           formData.append('cov_filename', this.lunch_cover_name);
           formData.append('top_filename', this.lunch_top_name);
           formData.append('cov_img',this.launchcoverimage);
           formData.append('top_img',this.launchtopimage);
            // formData.append('month_day',this.break_dt);
            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v6);
            formData.append('break_check',this.launch_check);
            // formData.append("start_time",this.brunch_start);
            // formData.append('end_time',this.brunch_end);
            formData.append('restaurant_name',this.res_name);




           for(let img of this.launchsectionimage){
             formData.append('section_img', img);
           }
           for (let img of this.launchmenuimage) {
             formData.append('menu_img', img);
           }

           console.log(this.multipleImages)
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) => { console.log(res);
              this.spinner.hide();
               this.myFunction();

            //  (err) => console.log(err)
          });
           this.storevalue.length=0;
           this.storevalue.push({

           "restaurant_id":this.resid,
           "menu_id":v6,
           "break_check":this.launch_check,
           "start_time":v7,
       "end_time":v8,
       "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

         });
       console.log(this.storevalue);

       this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
     console.log(data);
  //  this.spinner.hide();
  //  this.myFunction();

   })

      //      this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      //     "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

          }
          else if(this.v==1){
             this.v=2;
             this.storevalue.length=0;
             const formData = new FormData();
             // formData.append('file', this.breakfastcoverimage);
             formData.append('coverurl', v1);
             formData.append('topurl',  v2);
             formData.append('MenuUrl', v4);
             formData.append('SectionUrl',v5);
             formData.append('cov_filename', this.lunch_cover_name);
             formData.append('top_filename', this.lunch_top_name);
             formData.append('cov_img',this.launchcoverimage);
             formData.append('top_img',this.launchtopimage);
              // formData.append('month_day',this.break_dt);
              formData.append('restaurant_id',this.resid);
              formData.append('menu_id',v6);
              formData.append('break_check',this.launch_check);
              // formData.append("start_time",this.brunch_start);
              // formData.append('end_time',this.brunch_end);
              formData.append('restaurant_name',this.res_name);




             for(let img of this.launchsectionimage){
               formData.append('section_img', img);
             }
             for (let img of this.launchmenuimage) {
               formData.append('menu_img', img);
             }

             console.log(this.multipleImages)
             this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
               (res) => { console.log(res);
                this.spinner.hide();
                 this.myFunction();
  
              //  (err) => console.log(err)
            });
             this.storevalue.length=0;
             this.storevalue.push({

             "restaurant_id":this.resid,
             "menu_id":v6,
             "break_check":this.launch_check,
             "start_time":v7,
         "end_time":v8,
         "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

           });
         console.log(this.storevalue);

         this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
       console.log(data);
    //  this.spinner.hide();
    //  this.myFunction();

     })

      //     this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      // "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

          }
         else{
             //SnackBar
           this. myFunction_forerror();
          }
    }
    else {
      this.v=3;
      this.storevalue.length=0;
      const formData = new FormData();
      // formData.append('file', this.breakfastcoverimage);
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('MenuUrl', v4);
      formData.append('SectionUrl',v5);
      formData.append('cov_filename', this.lunch_cover_name);
      formData.append('top_filename', this.lunch_top_name);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      //  formData.append('month_day',this.break_dt);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
      //  formData.append("start_time",this.brunch_start);
      //  formData.append('end_time',this.brunch_end);
       formData.append('restaurant_name',this.res_name);




      for(let img of this.launchsectionimage){
        formData.append('section_img', img);
      }
      for (let img of this.launchmenuimage) {
        formData.append('menu_img', img);
      }

      console.log(this.multipleImages)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => { console.log(res);
          this.spinner.hide();
           this.myFunction();

        //  (err) => console.log(err)
      });
      this.storevalue.length=0;
      this.storevalue.push({

      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
console.log(data);
// this.spinner.hide();
// this.myFunction();

})

  //     this.storevalue.push({
  //     "coverurl": v1,
  //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
  //     "restaurant_id":this.resid,
  //     "menu_id":v6,
  //     "break_check":this.launch_check,
  //     "start_time":this.brunch_start,
  //     "end_time":this.brunch_end,
  // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

  //   });
    // this.success=0;
    // console.log(this.storevalue);
    // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
    //   console.log(data);
    //   this.success=data;
    //   if(this.success.suc==1){
    //     this.myFunction();

    //   }
    // })

    }

  }

}
else{
  this.spinner.hide();
  this.myFunction_fortime();
 }
}

  localStorage.setItem('value',this.v)



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
  this.spinner.show();
  // console.log(this.v,e,v1,v2,v3,v4,v5,v6,v7);

  if(this.dinner_check=='N'){
   localStorage.setItem('brunch','active');

    if(this.v==1){
      this.v=0;
      // this.storevalue.length=0;
    const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)

    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
      this.spinner.hide();
      this.myFunction_update();
    });
      this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
      console.log(data);
    //   this.spinner.hide();
    //  this.myFunction_update();

    })
     }
     else if(this.v==2){
       this.v=1;
       // this.storevalue.length=0;
    const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('SectionUrl',v4);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)

    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
        this.spinner.hide();
        this.myFunction_update();
      });
       this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
      console.log(data);
      // this.spinner.hide();
      // this.myFunction_update();

    })
     }
  }
  else{
 if(v6<v7){
  if(localStorage.getItem('brunch')==''){
    // this.storevalue.length=0;
    const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)

    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
        this.spinner.hide();
        this.myFunction_update();
      });

    this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
      console.log(data);
  // this.spinner.hide();
  // this.myFunction_update();

    })
        // this.myFunction();

  }
  else{
  localStorage.setItem('brunch','');

   console.log(v6,v7);
    if(localStorage.getItem('No_of_menu')=='O'){
       if(this.v==0){
         this.v=1;
        //  this.storevalue.length=0;
         const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
        this.spinner.hide();
        this.myFunction();
      });

    this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
      console.log(data);
  // this.spinner.hide();
  // this.myFunction();

    })

        //  this.storevalue.push({
        //   "coverurl": v3,
        //   "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
        //   "restaurant_id":this.resid,
        //   "menu_id":v5,
        //   "break_check":this.dinner_check,
        //   "start_time":this.brunch_start,
        //   "end_time":this.brunch_end,
        //   "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

        // });
        // console.log(this.storevalue);
        // this.success=0
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

       }
       else if(this.v==1){
         //snackBar
         this. myFunction_forerror();

       }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
      if(this.v==0){
        this.v=1;
        // this.storevalue.length=0;
        const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) =>  {
        console.log(res);
        this.spinner.hide();
        this.myFunction();
     });


    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
     console.log(data);
//  this.spinner.hide();
//  this.myFunction();

   })
  }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
        const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {
        console.log(res);
        this.spinner.hide();
        this.myFunction();
     });


    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
     console.log(data);
//  this.spinner.hide();
//  this.myFunction();

   })
 }
      else{
        //Snackbar
        this. myFunction_forerror();

      }
    }
    else {
      this.v=3;
        // this.storevalue.length=0;
        const formData = new FormData();
    // formData.append('file', this.breakfastcoverimage);
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('MenuUrl', v1);
    formData.append('SectionUrl',v4);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
    //  formData.append('month_day',this.break_dt);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
    //  formData.append("start_time",this.brunch_start);
    //  formData.append('end_time',this.brunch_end);
     formData.append('restaurant_name',this.res_name);




    for(let img of this.dinnersectionimage){
      formData.append('section_img', img);
    }
    for (let img of this.dinnermenuimage) {
      formData.append('menu_img', img);
    }

    console.log(this.multipleImages)
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {
        console.log(res);
        this.spinner.hide();
        this.myFunction();
     });

    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
     console.log(data);
//  this.spinner.hide();
//  this.myFunction();

   })

    }
  }
// this.storevalue.length=0;
//      this.storevalue.push({
//          "restaurant_id":this.resid,
//           "menu_id":v5,
//           "break_check":this.dinner_check,
//           "start_time":v6,
//           "end_time":v7,
//           "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
//      console.log(this.storevalue);

//      this.lagunaserve.post_date_time(this.storevalue).subscribe(data=>{
//       console.log(data);
//   this.spinner.hide();

//     })


  }
  else{
    this.spinner.hide();
   this.myFunction_fortime();
  }
   }

  localStorage.setItem('value',this.v)
}

  // For breakfastcoverimage
  // Breakfast(event: any) {
  //   console.log(event)

  //   if(event.target.files.length!=0){

  //   console.log(event.target.files[0].name);
  //   this.breakfastcoverimage = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.img_cover = reader.result as string;

  //   }

  //   reader.readAsDataURL(this.breakfastcoverimage)
  //   this.Breakfast_cover_preview=false;
  //  }
  //  else{
  //   this.Breakfast_cover_preview=true;

  //  }



  // }
//Breakfast cover image
  Breakfast(event: any) {
    console.log(event,event.target.files[0].name,event.target.files[0].type);

    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mycoverfile');
      this.common_break_menu.value='';
    }
    else{
     this.breakfast_cover_name=event.target.files[0].name;
    this.common_image = event;
    this.break_Cover=false;
    // this.breakfastcoverimage=event.target.files[0];

    this.width=1800;
    this.height=2560;
  console.log("sadasasas");
  this.Modal=document.getElementById('hid');
  this.Modal.click();
  this.common_value="breakfast_cover";

  }

  }



  // For breakfasttop image
  changeBreak(event: any) {
    console.log(event.target.files[0].name,event.target.files[0].type);
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mytopfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
    this.breakfast_top_name=event.target.files[0].name;
    this.width=200;
    this.height=130;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="breakfast_top";
    this.breakfasttopimage = event.target.files[0];
    // console.log(this.breakfasttopimage);
    this.break_Top=false;
    // this.Breakfast_top_preview=false;
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_top= reader.result as string;



    // reader.readAsDataURL(this.breakfasttopimage)

    // }

    }
    else{
      this.Breakfast_top_preview=true;
    }
 console.log(this.breakfasttopimage);
     }
  }
  //For breakfastmenuimage
  changeBreakmenubreak(event: any) {

   if (event.target.files.length > 0) {
    this.multipleImages= event.target.files;
    this.Breakfast_menu_preview=false;


      for (let i = 0; i < event.target.files.length; i++) {
      //   if(event.target.files[i].size>2097152){
      //    console.log("asasasas");


      //      this.myFunction_file_Size_error();


      //  }
      //  else{


        this.img_menu_break.push({id:'',img_path:URL.createObjectURL(this.multipleImages[i])});



        // }


        }




    }
    else{
      this.Breakfast_menu_preview=true;

    }
    console.log(this.img_menu_break, this.multipleImages);
    console.log('LENGTH:' , this.multipleImages.length)


  }
    // For breakfast section image
  changeBreakmenubreak1(event:any){
    // this.breakfastsectionimage=event.target.files;
    if (event.target.files.length > 0) {
      this.breakfastsectionimage = event.target.files;
      this.Breakfast_section_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {

      //  if(event.target.files[i].size>2097152){
      //      this.myFunction_file_Size_error();

      //  }
      //  else{

        this.img_section_break.push({id:'',img_path:URL.createObjectURL(this.breakfastsectionimage[i])});
      //  }





      }

    }
    else{
      this.Breakfast_section_preview=true;

    }

  }
   // Event of launch cover image

  changelaunchcoverpage(event: any) {
    if(event.target.files[0].size>2097152){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mylunchcoverfile');
      this.common_break_menu.value='';
    }
    else{

    console.log(event.target.files[0]);
    if(event.target.files.length!=0){
      this.width=1800;
      this.height=2560;
       this.lunch_cover_name=event.target.files[0].name;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="lunch_cover";

      this.launchcoverimage = event.target.files[0];
      // console.log(this.launchcoverimage);
      // this.Launch_cover_preview=false;
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.img_launch_cover = reader.result as string;

      // }

      // reader.readAsDataURL(this.launchcoverimage)
    }
    else{
      this.Launch_cover_preview=true;

    }

  }


  }
   // Event of launch top image

  changelaunchtopimage(event: any) {
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mylunchtopfile');
      this.common_break_menu.value='';
    }
    else{

    if(event.target.files.length!=0){
      this.lunch_top_name=event.target.files[0].name;
      this.width=200;
      this.height=130;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="lunch_top";
      this.lunch_Top=false;
    // console.log(event.target.files[0]);
    // this.launchtopimage = event.target.files[0];
    // this.Launch_top_preview=false;

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_launch_top = reader.result as string;

    // }

    // reader.readAsDataURL(this.launchtopimage)
    }
    else{
      this.Launch_top_preview=true;

    }

  }
  }
   // Event of launch menu image

  changelaunchtmenuimage(event: any) {
    console.log((event.target.files));
    // this.launchmenuimage = event.target.files;
    if(event.target.files.length>0){
      this.launchmenuimage = event.target.files;
      this.Launch_menu_preview=false;

      // this.Launch_menu_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
        //  if(event.target.files[i].size>2097152){
        //   this.myFunction_file_Size_error();

        //  }
        //  else{

          this.img_launch_menu.push({id:'',img_path:URL.createObjectURL(this.launchmenuimage[i])});

        //  }

      }
       }
    else{
      this.Launch_menu_preview=true;
    }
    console.log( this.launchmenuimage);


  }
   // Event of launch section image

  changelaunchsectionbreak1(event:any){
   console.log(event.target.files);
    if(event.target.files.length>0){
      // this.Launch_section_preview=false;
      this.launchsectionimage = event.target.files;
      this.Launch_section_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {
      // if(event.target.files[i].size>2097152){
      //   this.myFunction_file_Size_error();

      // }
      // else{


        this.img_launch_section.push({id:'',img_path:URL.createObjectURL(this.launchsectionimage[i])});

      // }

      }

     }
    else{
      this.Launch_section_preview=true;
    }

  }
   // Event of dinner section image
  changebrunchsectionbreak1(event:any){
    // this.branchsectionimage=event.target.files;
    if(event.target.files.length>0){
      this.branchsectionimage=event.target.files;
      this.Dinner_section_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {
        // if(event.target.files[i].size>2097152){
        //   this.myFunction_file_Size_error();

        //  }
        //  else{
          this.img_dinner_section.push({id:'',img_path:URL.createObjectURL(this.branchsectionimage[i])});

        //  }

      }

    }
    else{
      this.Dinner_section_preview=true;

    }
    console.log(this.branchsectionimage)
  }
    // Event of dinner menu image
  changebrunchmenubreak1(event:any){
    // this.branchmenuimage=event.target.files;
    if(event.target.files.length > 0){
      this.branchmenuimage=event.target.files;
      this.Dinner_menu_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {
      //  if(event.target.files[i].size>2097152){
      //   this.myFunction_file_Size_error();

      //  }
      //  else{

        this.img_dinner_menu.push({id:'',img_path:URL.createObjectURL(this.branchmenuimage[i])});
      //  }


      }

    }
    else{
      this.Dinner_menu_preview=true;

    }

  }
    // Event of dinner top image
  brunchtopimage(event:any){
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mydinnertopfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.width=200;
      this.height=130;
      this.dinner_top_name=event.target.files[0].name;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="dinner_top";
    // this.branchtopimage=event.target.files[0];
    // this.Dinner_top_preview=false;
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_dinner_top= reader.result as string;

    // }

    // reader.readAsDataURL(this.branchtopimage)
    }
    else{
    this.Dinner_top_preview=true;

    }
   }
  }
    // Event of dinner cover image
  brunchcoverimage(event:any){
    if(event.target.files[0].size>2097152){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mydinnercoverfile');
      this.common_break_menu.value='';
    }
    else{

    if(event.target.files.length!=0){

      this.dinner_cover_name=event.target.files[0].name;
      this.width=1800;
      this.height=2560;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="dinner_cover";

    //   this.branchcoverimage=event.target.files[0];
    //  this.Dinner_cover_preview=false;
    //  const reader = new FileReader();
    //  reader.onload = () => {
    //    this.img_dinner_cover= reader.result as string;

    //  }

    //  reader.readAsDataURL(this.branchcoverimage)
    }
    else{
     this.Dinner_cover_preview=true;

    }

  }
  }
   // Event of brunch section image
  changedinnersectionimage(event:any){
    if(event.target.files.length>0){
      this.dinnersectionimage=event.target.files;
      this.Brunch_section_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
      //  if(event.target.files[i].size>2097152){

      //  }
      //  else{
        this.img_brunch_section.push({id:'',img_path:URL.createObjectURL(this.dinnersectionimage[i])});
      //  }
        }

     }
    else{
      this.Brunch_section_preview=true;
    }
  }
    // Event of brunch cover image
  dinnerchangecoverimage(event:any){
    // dinnersectionimage:any;
    if(event.target.files[0].size>2097152  ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mybrunchcoverfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.brunch_cover_name=event.target.files[0].name;

      this.width=1800;
      this.height=2560;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="brunch_cover";

  // this.dinnercoverimage=event.target.files[0];
  // this.Brunch_cover_preview=false;
  // const reader = new FileReader();
  //   reader.onload = () => {
  //     this.img_brunch_cover= reader.result as string;
  //   }
  // reader.readAsDataURL(this.dinnercoverimage)
}
else{
  this.Brunch_cover_preview=true;

}
    }
  }
    // Event of brunch top image
  dinnerchangetopimage(event:any){
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mybrunchtopfile');
      this.common_break_menu.value='';
    }
    else{

    if(event.target.files.length!=0){
      this.width=200;
      this.height=130;
      this.brunch_top_name=event.target.files[0].name;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="brunch_top";
  //  this.dinnertopimage=event.target.files[0];
  //       this.Brunch_top_preview=false;

  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         this.img_brunch_top= reader.result as string;

  //       }

  //       reader.readAsDataURL(this.dinnertopimage)
    }
    else{
   this.Brunch_top_preview=true;
   }

  }
  }
  // Event of brunch menu image
  changedinnermenuimage(event:any){
    if(event.target.files.length>0){
      this.dinnermenuimage=event.target.files;
      this.Brunch_menu_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {
        // if(event.target.files[i].size>2097152){
        //   this.myFunction_file_Size_error();

        //  }
        //  else{
          this.img_brunch_menu.push({id:'',img_path:URL.createObjectURL(this.dinnermenuimage[i])});

        //  }
      }


    }
    else{
      this.Brunch_menu_preview=true;

    }
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



  // For success update snackbar
  myFunction_update() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar3");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }
   // For Error snackbar
   myFunction_forerror() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar1");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }

    // For Timing Error snackbar
    myFunction_fortime() {
      // Get the snackbar DIV
      this.x = document.getElementById("snackbar2");

      // Add the "show" class to DIV
      this.x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 5000);
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
  //For setting brunch start time
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
  //For setting brunch end time
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
  //For srtting breakfast time
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
  // For setting launch time
   checkblaunch(e:any,v:any){

    if(v=='start'){
      this.brunch_start=e.target.value;
    }
    else if(v=='end'){
      this.brunch_end=e.target.value;

    }

    console.log(this.brunch_end,this.brunch_start)
  }
  // For setting dinner time
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
 //For delete photo
 deletephoto(e:any){

   if(e=='lunch_cover'){
     this.img_launch_cover='';
  this.Launch_cover_preview=true;
  this.launchcoverimage='';
  this.Modal=document.getElementById('mylunchcoverfile');
   this.Modal.value=null;
  //  this.common_remove_div=document.getElementById('Lunch_Cover');
  //  this.common_remove_div.className='';
  this.lunch_Cover=true;


   }

  else if(e=='lunch_top'){
    this.Launch_top_preview=true;
    this.launchtopimage='';
    this.img_launch_top='';
    this.Modal=document.getElementById('mylunchtopfile');
    this.Modal.value=null;
  this.lunch_Top=true;

    // this.common_remove_div=document.getElementById('Lunch_Top');
    // this.common_remove_div.className='';


  }
  else if(e=='breakfast_cover'){
    this.Breakfast_cover_preview=true;
    this.breakfastcoverimage='';
    this.img_cover='';
    this.Modal=document.getElementById('mycoverfile');
   this.Modal.value=null;
  this.break_Cover=true;

  //  this.common_remove_div=document.getElementById('break_cover');
  //  this.common_remove_div.className='';
  }
  else if(e=='breakfast_top'){
    this.breakfasttopimage='';
    this.img_top='';
    this.Breakfast_top_preview=true;
    this.Modal=document.getElementById('mytopfile');
   this.Modal.value=null;
  this.break_Top=true;

  //  this.common_remove_div=document.getElementById('break_top');
  //  this.common_remove_div.className='';


  }
  else if(e=='dinner_cover'){
    this.img_dinner_cover='';
    this.branchcoverimage='';
    this.Dinner_cover_preview=true;
    this.Modal=document.getElementById('mydinnercoverfile');
    this.Modal.value=null;
    this.dinner_Cover=true;

    // this.common_remove_div=document.getElementById('dinner_cov');
    // this.common_remove_div.className='';
   }
   else if(e=='dinner_top'){
     this.img_dinner_top='';
     this.branchtopimage='';
     this.Dinner_top_preview=true;
     this.Modal=document.getElementById('mydinnertopfile');
     this.Modal.value=null;
  this.dinner_Top=true;

    //  this.common_remove_div=document.getElementById('dinner_top');
    // this.common_remove_div.className='';

   }
   else if(e=='brunch_cover'){
     this.Brunch_cover_preview=true;
     this.img_brunch_cover='';
     this.dinnercoverimage='';

     this.Modal=document.getElementById('mybrunchcoverfile');
     this.Modal.value=null;
  this.brunch_Cover=true;

    //  this.common_remove_div=document.getElementById('brunch_cov');
    //  this.common_remove_div.className='';

   }
   else if(e=='brunch_top'){
     this.img_brunch_top='';
     this.dinnertopimage='';
     this.Brunch_top_preview=true;

     this.Modal=document.getElementById('mybrunchtopfile');
     this.Modal.value=null;
  this.brunch_Top=true;

    //  this.common_remove_div=document.getElementById('brunch_top');
    //  this.common_remove_div.className='';

   }
 }
 deletemultiple(e:any,index:any,id:any){
  if(id > 0){

var x = confirm("Are you sure you want to delete permanently?");
  if (x){
    console.log(id);
    this.lagunaserve.delete_file(this.resid,id).subscribe(data=>{
      console.log(data);
    })

  if(e=='lunch_menu'){
    this.img_launch_menu.splice(index,1);
    this.launchmenuimage.splice(index,1);
    if(this.launchmenuimage.length!=0){
      this.common_remove_div=document.getElementById('')
    }
    console.log(this.img_launch_menu.length)
   }

   else if(e=='breakfast_menu'){
    this.img_menu_break.splice(index,1);
     this.multipleImages.splice(index,1);
    console.log(this.img_menu_break.length)

   }

  else if(e=='dinner_menu'){
   this.img_dinner_menu.splice(index,1);
   this.branchmenuimage.splice(index,1);
  }

  else if(e=='brunch_menu'){
    this.img_brunch_menu.splice(index,1);
    this.dinnermenuimage.splice(index,1);
  }
}
}
else{

  if(e=='lunch_menu'){
    this.img_launch_menu.splice(index,1);
    this.launchmenuimage.splice(index,1);
    if(this.launchmenuimage.length!=0){
      this.common_remove_div=document.getElementById('')
    }
    console.log(this.img_launch_menu.length)
   }

   else if(e=='breakfast_menu'){
    this.img_menu_break.splice(index,1);
     this.multipleImages.splice(index,1);
    console.log(this.img_menu_break.length)

   }

  else if(e=='dinner_menu'){
   this.img_dinner_menu.splice(index,1);
   this.branchmenuimage.splice(index,1);
  }

  else if(e=='brunch_menu'){
    this.img_brunch_menu.splice(index,1);
    this.dinnermenuimage.splice(index,1);
  }

}




 }
 deletemultiplelunchsection(name:any,e:any,id:any){
  if(id > 0){
  var x = confirm("Are you sure you want to delete permanently?");
  if (x){
    console.log(id);
    this.lagunaserve.delete_file_section(this.resid,id).subscribe(data=>{
      console.log(data);
    })

   if(name=='lunch_section'){
    this.img_launch_section.splice(e,1);
   this.launchsectionimage.splice(e,1);

   }
   else if(name=='dinner_section'){
     this.img_dinner_section.splice(e,1);
     this.branchsectionimage.splice(e,1);

   }
   else if(name=='breakfast_section'){
     this.img_section_break.splice(e,1);
     this.breakfastsectionimage.splice(e,1);
   }
   else if(name=='brunch_section'){
     this.img_brunch_section.splice(e,1);
     this.dinnersectionimage.splice(e,1);
   }
   else if(name=='special_section'){
    this.img_special.splice(e,1);
    this.special_img.splice(e,1);
  console.log("special1");

   }
  }
}
   else{
  // console.log("False");
  if(name=='lunch_section'){
    this.img_launch_section.splice(e,1);
   this.launchsectionimage.splice(e,1);

   }
   else if(name=='dinner_section'){
     this.img_dinner_section.splice(e,1);
     this.branchsectionimage.splice(e,1);

   }
   else if(name=='breakfast_section'){
     this.img_section_break.splice(e,1);
     this.breakfastsectionimage.splice(e,1);
   }
   else if(name=='brunch_section'){
     this.img_brunch_section.splice(e,1);
     this.dinnersectionimage.splice(e,1);
   }
   else if(name=='special_section'){
    this.img_special.splice(e,1);
    this.special_img.splice(e,1);
  console.log("special");


   }
   }
   console.log(this.special_img);


}


//Image Cropper

zoomOut() {
  this.scale -= .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}

zoomIn() {
  this.scale += .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}
imageLoaded() {
  console.log("image loaded")
  this.showCropper = true;
  this.modal = false;
  this.hide = false;
  this.valu = false;
  this.Zoomout = false;
  this.ZoomIn = false;
}
imageCropped(event: ImageCroppedEvent) {
  console.log('imagecropped');
  console.log("width:" + event.width);
  console.log("height:" + event.height)
  this.croppedImage = event.base64;

  console.log({ file: base64ToFile(this.croppedImage), event});
  
  console.log(this.croppedImage);
}
cropperReady(sourceImageDimensions: Dimensions) {
 console.log('Cropper ready', sourceImageDimensions);
  console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
  console.log('Load failed');
}
click_it(e:any){
  // this.cover_change=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
    this.valu = true;
    // console.log('encoede::' +encodeURIComponent(this.croppedImage));

    if(e=='breakfast_cover'){
      // CONVERT BASE64 TO IMAGE FILE //
    const base64 = this.croppedImage;
      const imageName = this.breakfast_cover_name;
      const imageBlob = this.dataURItoBlob( this.croppedImage);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_cover=imageFile;
      // END //
      // PREVIEW IMAGE //
    const reader=new FileReader();
    reader.onload = () => {
      this.img_cover = reader.result as string;

    }
    reader.readAsDataURL(this.img_cover)
    // END //
    // this.img_cover=this.croppedImage;
    this.breakfastcoverimage=this.img_cover;
   this.Breakfast_cover_preview=false;
   console.log(this.breakfastcoverimage);

    }
    else if(e=='breakfast_top'){

      const base64 = this.croppedImage;
      const imageName = this.breakfast_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});

      this.img_top=imageFile;
    const reader=new FileReader();
    reader.onload = () => {
      this.img_top = reader.result as string;

    }
    reader.readAsDataURL(this.img_top)
      // this.img_top=this.croppedImage;
      this.breakfasttopimage=this.img_top;
      this.Breakfast_top_preview=false;
    }
    else if(e=='lunch_cover'){
      const base64 = this.croppedImage;
      const imageName =this.lunch_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_launch_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_launch_cover = reader.result as string;

      }
      reader.readAsDataURL(this.img_launch_cover)

      this.launchcoverimage=this.img_launch_cover;
      this.Launch_cover_preview=false;
    }
    else if(e=='lunch_top'){
        console.log("Lunch_Top");
      const base64 = this.croppedImage;
      const imageName =this.lunch_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_launch_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_launch_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_launch_top)

      // this.img_launch_top=this.croppedImage;
      this.launchtopimage= this.img_launch_top;
      this.Launch_top_preview=false;
         console.log(this.Launch_top_preview);

      console.log(this.img_launch_top)
    }
    else if(e=='dinner_cover'){

      const base64 = this.croppedImage;
      const imageName = this.dinner_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_dinner_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_dinner_cover = reader.result as string;

      }
      reader.readAsDataURL( this.img_dinner_cover)

    //  this.img_dinner_cover=this.croppedImage;
     this.branchcoverimage= this.img_dinner_cover;
     this.Dinner_cover_preview=false;
    }
    else if(e=='dinner_top'){
      const base64 = this.croppedImage;
      const imageName =this.dinner_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_dinner_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_dinner_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_dinner_top)
      // this.img_dinner_top=this.croppedImage;
     this.branchtopimage=this.img_dinner_top;
     this.Dinner_top_preview=false;
    }
    else if(e=='brunch_cover'){
      const base64 = this.croppedImage;
      const imageName = this.brunch_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_brunch_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_brunch_cover = reader.result as string;

      }
      reader.readAsDataURL(this.img_brunch_cover)
      // this.img_brunch_cover=this.croppedImage;
      this.dinnercoverimage=this.img_brunch_cover;
      this.Brunch_cover_preview=false;
    }
    else if(e=='brunch_top'){

      const base64 = this.croppedImage;
      const imageName =this.brunch_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_brunch_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_brunch_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_brunch_top)
      // this.img_brunch_top=this.croppedImage;
      this.dinnertopimage= this.img_brunch_top;
      this.Brunch_top_preview=false;

    }

}

dataURItoBlob(dataURI:any) {
  var byteString = atob(dataURI.toString().split(',')[1]);

        //var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const array=[];
        // var ab = new ArrayBuffer(byteString.length);
        // var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            // ia[i] = byteString.charCodeAt(i);
            array.push(byteString.charCodeAt(i));
        }
        // var blob = new Blob([array], { type: 'image/png' }); //or mimeString if you want
        // return blob;
        return new Blob([new Uint8Array(array)],
        {
          type:'image/png'
        },
        );
}


close_it(e:any){
  this.valu=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
  if(e=='breakfast_cover'){
    this.Modal=document.getElementById('mycoverfile');
    this.Modal.value=null;
  }
  else if(e=='breakfast_top'){
    this.Modal=document.getElementById('mytopfile');
    this.Modal.value=null;
  }
  else if(e=='lunch_cover'){
   this.Modal=document.getElementById('mylunchcoverfile');
    this.Modal.value=null;
  }
  else if(e=='lunch_top'){
    this.Modal=document.getElementById('mylunchtopfile');
    this.Modal.value=null;
  }
  else if(e=='dinner_cover'){
    this.Modal=document.getElementById('mydinnercoverfile');
    this.Modal.value=null;
  }
  else if(e=='dinner_top'){
    this.Modal=document.getElementById('mydinnertopfile');
    this.Modal.value=null;
  }
  else if(e=='brunch_cover'){
    this.Modal=document.getElementById('mybrunchcoverfile');
    this.Modal.value=null;
  }
  else if(e=='brunch_top'){
    this.Modal=document.getElementById('mybrunchtopfile');
    this.Modal.value=null;
  }



}

open_crop_modal(){
  this.Modal=document.getElementById('id01');
  this.Modal.style.display='block';
}
openpdf(e:any){
  console.log(e);
  this.img_break_section=e;
// console.log(e);

 var iframe="<iframe width='100%' height='100%' src='" +this.img_break_section+"' ></iframe>";
var xx=window.open(iframe,"_blank");
xx?.document.open();
xx?.document.write(iframe);
xx?.document.close();
// document.location.href=this.img_break_section;
}

 // For success update snackbar
 myFunction_file_Size_error() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar4");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
}
//For checking null of special url
check_special(){
 console.log(this.special_url);

}
//For getting special image
getstock_imege(event:any){
  if(event.target.files.length>0){
   for (let i = 0; i < event.target.files.length; i++) {
    this.special_img=event.target.files;
    this.img_special.push({id:'',img_path:URL.createObjectURL(event.target.files[i])});
    this.special_section_preview=false;
  }
  }
  else{
    this.special_section_preview=true;

  }
 console.log(this.special_img,this.img_special);

}
// For Selecting the image base on category id
getStockimageonselectcategory(e:any){
  console.log(e);

  //  For getting Image on load
  this.lagunaserve.getspecial_image(e).subscribe(data=>{
    console.log(data);
    this.stock_img=data;
    this.stock_img=this.stock_img.msg;
  })
}
// For disabled or enable the field base on special menu checkvalue
enableordisablefields(event:any){
if(event.target.ckeched){
  console.log("checked");
 this.special_check='Y';
  // this.special_disabled=false;
}
else {
 this.special_check='N';
//  this.special_disabled=true;
}
}
//For submitting final data
save_special(){
  // this.storevalue.length=0;
  console.log(this.resid,this.special);
  this.spinner.show();
  console.log(this.special_url,this.special_img);
  const formdata=new FormData();
  formdata.append('special_url',this.special_url);
  for(let img of this.special_img){
    formdata.append('special_img',img);
  }
  formdata.append('restaurant_id',this.resid);
  formdata.append('menu_id',this.special);
  formdata.append('break_check','Y');
  formdata.append('regular_menu_flag',this.exclusive);
  formdata.append('day_flag',this.week);
  this.storevalue.push({
    "reg_menu_id":[{"menu_id":this.break_Special},{"menu_id":this.lunch_special},{"menu_id":this.dinner_Special},{"menu_id":this.brunch_Special}] ,
    "month_day": [{"dt": this.mon_special},{"dt":this.tue_special},{"dt":this.wed_special},{"dt":this.thu_special},{"dt":this.fri_special},{"dt":this.sat_special},{"dt":this.sun_special}]
  })

  this.http.post<any>(this.url_reg+'/special_save', formdata,this.storevalue).subscribe(data=>{
  console.log(data);
  this.spinner.hide();

    })

}
enable_exclusive_inaddition(event:any){
  if(event.target.check){
    this.enable_exclusive=false;
    this.exclusive='E';
  }
  else{
    this.exclusive='';

    this.enable_exclusive=true;
  }

}
enable_everyweek(event:any,e:any){
  if(e=='every_week'){

  if(event.target.checked){
    this.enable_days=false;
    this.week='E';
  }
  else{
    this.week='';
    this.enable_days=true;
  }

}
else{
   if(event.target.checked){
    this.enable_days=true;
    this.week='S';
   }
   else{
    this.week='';

   }


}
}
// For checking checkbox below the specific date
checkregularid(event:any,e:any){
  if(e=='breakfast'){
    if(event.target.checked){
      this.break_Special=1;
    }
    else{
      this.break_Special=0;

    }

  }
  else if(e=='lunch'){
    if(event.target.checked){
    this.lunch_special=2
    }
    else{
    this.lunch_special=0

    }
  }
  else if(e=='dinner'){
    if(event.target.checked){
      this.dinner_Special=3;
    }
    else{
      this.dinner_Special=0;

    }
  }
  else if(e=='brunch'){
    if(event.target.checked){
        this.brunch_Special=4;
    }
    else{
      this.brunch_Special=0;
   }
   }
}

//for checking day
checkspecialday(event:any,e:any){
  if(e=='monday'){
    this.mon_check=document.getElementById('vehicle_s2');

  if(event.target.checked){
    this.mon_special=2;
    console.log(this.mon_special);
  }
  else{
    this.mon_special=0;

  }

  // else{
  //   this.mon_special=0;
  //   this.every=document.getElementById('vehicle_s2');
  //   this.every.checked=false;
  // }

}
else if(e=='tuesday'){

  console.log("this.mon");
  this.tue_check=document.getElementById('vehicle_s3');
  if(event.target.checked){
    this.tue_special=3;
  }
  else{
    this.tue_special=0;

  }

  // else{
  //   this.tue=0;
  //   this.every=document.getElementById('vehicle_s3');
  //   this.every.checked=false;
  // }
}
 else if(e=='wednesday'){

  console.log(".mon");
  this.wed_check=document.getElementById('vehicle_s4');
  if(event.target.checked){
    this.wed_special=4;
  }
  else{
    this.wed_special=0;

    // this.wed=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='thursday'){


  this.thu_check=document.getElementById('vehicle_s5');
  if(event.target.checked){
    this.thu_special=5
  }
  else{
    this.thu_special=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
else if(e=='friday'){

  console.log(".mon");
  this.fri_check=document.getElementById('vehicle_s6');
  if(event.target.checked){
    this.fri_special=6;
  }
  else{
    this.fri_special=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='sat'){


 this.sat_check=document.getElementById('vehicle_s7');
 if(event.target.checked){
  this.sat_special=7;
 }
 else{
   this.sat_special=0;
  //  this.every=document.getElementById('vehicle1');
  //  this.every.checked=false;
 }

}
else if(e=='sun'){

  console.log(".mon");
  this.sun_check=document.getElementById('vehicle_s8');
  if(event.target.checked){
           this.sun_special=8;
  }
  else{
    this.sun_special=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }

}
// else if(e=='everyday'){
//   this.every=document.getElementById('vehicle1');
//   if(event.target.checked){
//     console.log("asdsadad")

//   this.mon_check=document.getElementById('vehicle2');
//   this.mon_check.checked=true;
//   this.tue_check=document.getElementById('vehicle3');
//   this.tue_check.checked=true;
//   this.wed_check=document.getElementById('vehicle4');
//   this.wed_check.checked=true;
//   this.thu_check=document.getElementById('vehicle5');
//   this.thu_check.checked=true;
//   this.fri_check=document.getElementById('vehicle6');
//   this.fri_check.checked=true;
//   this.sat_check=document.getElementById('vehicle7');
//   this.sat_check.checked=true;
//   this.sun_check=document.getElementById('vehicle8');
//   this.sun_check.checked=true;
//   this.mon=2;
//   this.tue=3;
//   this.wed=4;
//   this.thu=5;
//   this.fri=6;
//   this.sat=7;
//   this.sun=8
//   }
//    else{
//     console.log("asdsadadfailed")
//     this.mon_check=document.getElementById('vehicle2');
//     this.mon_check.checked=false;
//     this.tue_check=document.getElementById('vehicle3');
//     this.tue_check.checked=false;
//     this.wed_check=document.getElementById('vehicle4');
//     this.wed_check.checked=false;
//     this.thu_check=document.getElementById('vehicle5');
//     this.thu_check.checked=false;
//     this.fri_check=document.getElementById('vehicle6');
//     this.fri_check.checked=false;
//     this.sat_check=document.getElementById('vehicle7');
//     this.sat_check.checked=false;
//     this.sun_check=document.getElementById('vehicle8');
//     this.sun_check.checked=false;
//     this.mon=0;
//     this.tue=0;
//     this.wed=0;
//     this.thu=0;
//     this.fri=0;
//     this.sat=0;
//     this.sun=0;
//    }

// }
console.log(this.mon_special,this.tue_special,this.wed_special,this.thu_special,this.fri_special,this.sat_special,this.sun_special)
}
}











