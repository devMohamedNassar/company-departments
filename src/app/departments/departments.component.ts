import { Component } from "@angular/core";
import { Department } from "../models/department.model";


@Component({
    selector: 'app-departments',
    templateUrl: 'departments.component.html'
})
export class DepartmentsComponent {
    
    constructor(){
        this.loadIcons();
    }
    
    departments: Department[] = [
        {name: 'delivery', topIcon: 'faHandHolding', bottomIcon: 'department-1', path: 'delivery'},
        {name: 'service assurance', topIcon: 'faSearch', bottomIcon: 'department-2', path: 'service-assurance'},
        {name: 'performance', topIcon: 'faTools', bottomIcon: 'department-3', path: 'performance'},
        {name: 'financial', topIcon: 'faCoins', bottomIcon: 'department-4', path: 'financial'},
        {name: 'strategy execution', topIcon: 'faChessQueen', bottomIcon: 'department-5', path: 'strategy-execution'}
    ];

    async loadIcons(){
        const fontAwesome = await import("@fortawesome/free-solid-svg-icons");

        this.departments.forEach(item => {
            item.topIcon = fontAwesome[item.topIcon];
        })
    }
}