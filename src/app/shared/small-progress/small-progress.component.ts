import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-small-progress',
    templateUrl: 'small-progress.component.html'
})
export class SmallProgressComponent {
    @Input() title: string;
    @Input() color: string;
    @Input() percentage: string;
}