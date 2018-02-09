import { Component, OnInit ,AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  , AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
 ngAfterViewInit(){
  $('.collapsible').collapsible();

  $('ul.tabs').tabs();
  
  $('select').material_select();
  
  $('.modal').modal();
 }
}
