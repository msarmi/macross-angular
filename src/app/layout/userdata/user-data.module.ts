import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import {
    SwitchComponent
//    UserTimelineComponent
//     ,
//     NotificationComponent,
//     ChatComponent
} from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
        NgbModule.forRoot(),
        UserDataRoutingModule,
        StatModule,
    ],
    declarations: [
        UserDataComponent,
        SwitchComponent
        //,
        //UserTimelineComponent
        // NotificationComponent,
        // ChatComponent
    ]
})
export class UserDataModule { }
