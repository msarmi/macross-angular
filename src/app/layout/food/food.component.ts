import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { FoodService } from '../../shared/services/food.service';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit {
    settingsSelected = {
        columns: {            
            name: {
                title: 'Nombre'
            },
            amount: {
                title: 'Cantidad'                
            },
            protein_g: {
                title: 'Proteínas'
            },
            fat_g: {
                title: 'Grasas'
            },
            carbohydrates_g: {
                title: 'Carbohidratos'
            }
        },
        add : {
            addButtonContent : '<i class="fa fa-plus" aria-hidden="true"></i>',
            createButtonContent : '<i class="fa fa-check" aria-hidden="true"></i>',
            cancelButtonContent : '<i class="fa fa-times" aria-hidden="true"></i>'
        },
        edit : {
            editButtonContent : '<i class="fa fa-pencil" aria-hidden="true"></i>',
            saveButtonContent : '<i class="fa fa-check" aria-hidden="true"></i>',
            cancelButtonContent : '<i class="fa fa-times" aria-hidden="true"></i>'
        },
        delete:{
            deleteButtonContent: '<i class="fa fa-trash" aria-hidden="true"></i>',
            confirmDelete:true
        },
        attr: {
            class:"table table-hover"
        },
        hideSubHeader:true,
        noDataMessage:'Hoy no he comido na'
    };    
    settings = {
        columns: {            
            name: {
                title: 'Nombre'
            },
            protein_g: {
                title: 'Proteínas'
            },
            fat_g: {
                title: 'Grasas'
            },
            carbohydrates_g: {
                title: 'Carbohidratos'
            },
            amount: {
                title: 'Cantidad'
            },     
            unity: {
                title: 'Unidad'
            }
        },
        actions : {      
            delete: false
        },
        add : {
            addButtonContent : '<i class="fa fa-plus" aria-hidden="true"></i>',
            createButtonContent : '<i class="fa fa-check" aria-hidden="true"></i>',
            cancelButtonContent : '<i class="fa fa-times" aria-hidden="true"></i>'
        },
        edit : {
            editButtonContent : '<i class="fa fa-pencil" aria-hidden="true"></i>',
            saveButtonContent : '<i class="fa fa-check" aria-hidden="true"></i>',
            cancelButtonContent : '<i class="fa fa-times" aria-hidden="true"></i>'
        },
        attr: {
            class:"table table-hover"
        }
    };    
    
    errorMessage: string;
    foods: LocalDataSource = new LocalDataSource(); 
    foodsSelected: LocalDataSource = new LocalDataSource();
    
     // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['Proteínas', 'Grasas', 'Carbohidratos'];
    public barChartData: any[] = [
    {data: [0, 0,0], label: 'Conseguido'},
    {data: [144, 75, 160], label: 'Objetivo'}
    ];

    constructor(private foodService: FoodService) { }
    ngOnInit() { this.getFoods(); }
    getFoods() {
        this.foodService.getFoods()
            .subscribe(
            foods => this.foods.load(foods),
            error => this.errorMessage = <any>error);
    }
    addFood(name: string) {
        if (!name) { return; }
        this.foodService.create(name)
            .subscribe(
            food => this.foods.append(food),
            error => this.errorMessage = <any>error);
    }
    rowSelect(event){
        if(event.isSelected){
            this.foodsSelected.append(event.data);
            this.reloadBarChart();      
        }
        else{
            this.foodsSelected.remove(event.data);
            this.reloadBarChart();      
        }    
    }
     deleteConfirm(event){
        event.confirm.resolve();
        this.reloadBarChart();
    }

    public reloadBarChart(): void {        
        this.foodsSelected.getElements().then((elements) => {
            let protein = 0;
            let fat = 0;
            let carb = 0;
    
            for (let food of  elements){ 
                protein = protein + food.protein_g;
                fat = fat + food.fat_g;
                carb = carb + food.carbohydrates_g;           
            }
            const clone = JSON.parse(JSON.stringify(this.barChartData));
            clone[0].data = [ protein, fat, carb];        
            this.barChartData = clone;
        })
    }
}