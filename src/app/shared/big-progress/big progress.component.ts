import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-big-progress',
    templateUrl: 'big-progress.component.html'
})
export class BigProgressComponent {
    @Input() title: string;
    @Input() growthRate: string;
    @Input() actualPercentage: string;
    @Input() plannedPercentage: string;
    @Input() color: string;

    setStyle(bg: HTMLElement): boolean{
        const widthActualPercentage = bg.offsetWidth * (+this.actualPercentage / 100);
        const widthPlannedPercentage = bg.offsetWidth * (+this.plannedPercentage / 100);
        if((widthPlannedPercentage - widthActualPercentage) > 90) return false;
        return true
    }

}