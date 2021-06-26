import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-circle-chart',
    templateUrl: 'circle-chart.component.html'
})
export class CircleChartComponent {
    @Input() percentage: string | number;
    @Input() text: string;

}