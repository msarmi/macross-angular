import { Component, OnInit } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  isOn:boolean=true;
  constructor() { }

  ngOnInit() {
    
  }

}
