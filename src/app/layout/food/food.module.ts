import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatModule, FoodService } from '../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
        NgbModule.forRoot(),
        FoodRoutingModule,
        StatModule,
        Ng2SmartTableModule,
        Ng2Charts
    ],
    declarations: [
        FoodComponent
    ],
    providers: [FoodService],
})
export class FoodModule { }
