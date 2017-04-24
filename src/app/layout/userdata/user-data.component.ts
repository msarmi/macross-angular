import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
    selector: 'app-user-data',
    templateUrl: './user-data.component.html',
    styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
    //model: any = 1;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    //public radioGroupForm: FormGroup;

    isMale: boolean = false;
    age: number = 20;
    height: number = 170;
    weight: number = 70;
    activity: number = 1;

    constructor() {
        
    }
    ngOnInit() {
        //this.radioGroupForm = this.formBuilder.group({
        //    model: 1
        //});
    }
    
    getTMB(){
        if (this.isMale){
            return (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
        }
        else {
            return (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
        }
         
    }
}
