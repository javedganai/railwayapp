import { Component, OnInit } from '@angular/core';
import {TraindataService} from '../services/traindata.service';
import { AsyncPipe } from '@angular/common';
declare var $;

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
source: String;
destination:String;
datepic:String;
 //stations:Array<any>=[];
 //dest:any;
 
 arr:any[]=[];
 dest:any[]=[];
 total:number;


 //store trains details
 trains:any;
 status:number;
  constructor(private train: TraindataService) {
   
   }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // ...
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      dateFormat: 'dd-MM-yyyy',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
        
  }
  destonchange=()=>{


    this.dest =[];
    if(this.destination.length>2){

  
         $.get( "https://api.railwayapi.com/v2/suggest-station/name/"+this.destination+"/apikey/talu45v8xo/", ( data )=> {
          // console.log(data);
           if(data.response_code==200){
             let l= data.stations.length;
              console.log('the lenghth is '+l)
               for(let i=0;i<l;i++){
                this.dest.push(data.stations[i].code+'-'+data.stations[i].name);
                console.log(data.stations[i].code);
               // this.arr.push('ji');
               }
                console.log(this.destination.length)
           }
         
         });
       }

  }
  sourcechange=()=>{
                       this.arr =[];
                       if(this.source.length>2){

                     
                            $.get( "https://api.railwayapi.com/v2/suggest-station/name/"+this.source+"/apikey/talu45v8xo/", ( data )=> {
                             // console.log(data);
                              if(data.response_code==200){
                                let l= data.stations.length;
                                 console.log('the lenghth is '+l)
                                  for(let i=0;i<l;i++){
                                   this.arr.push(data.stations[i].code+'-'+data.stations[i].name);
                                   console.log(data.stations[i].code);
                                  // this.arr.push('ji');
                                  }
                                     console.log(this.arr.length)
                              }
                            
                            });
                          }


  }
  
   
  
  //get the trains
   gettrains= async ()=>{
     this.datepic='';
    var $input = $('#datepicker').pickadate()
    // Use the picker object directly.
     var picker = $input.pickadate('picker');
     this.datepic= picker.get('select', 'dd-mm-yyyy');
   // console.log('the date is '+picker.get('view', 'dd-mm-yyyy'));



    let scode= this.source.split('-',1);
    let dcode=this.destination.split('-',1);
    let date =this.datepic;
   // console.log('the hadgdgdgdgdgdgdgdgdgdgdgdg'+scode+dcode);
   await this.train.getstation(scode,dcode,date).subscribe((data)=>{
     if(data.response_code==200){
       this.status=2;
       this.trains = [];
       this.trains= JSON.parse(JSON.stringify(data));
       //this.trains= data;
     //  console.log('the data ishhhhhhhhhhhhh ');
       console.log('the data is '+this.trains);
       //this.trains=JSON.stringify(data);
      } else {
        console.log('err')
      }
     });
     
    //  console.log('the data total is'+this.trains);
  }

}
