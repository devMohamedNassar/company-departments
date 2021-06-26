import { Component, Input } from "@angular/core";
import { Department } from "../models/department.model";

@Component({
    selector: 'app-department-preview',
    templateUrl: 'department-preview.component.html'
})
export class DepartmentPreviewComponent {
    @Input() department: Department = <Department>{};

    isIcon(icon){
        return typeof icon === 'object';
    }
    
}