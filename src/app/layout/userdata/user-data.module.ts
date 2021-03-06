import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
        NgbModule.forRoot(),
        UserDataRoutingModule,
        StatModule,
        JWBootstrapSwitchModule
    ],
    declarations: [
        UserDataComponent        
    ]
})
export class UserDataModule { }
