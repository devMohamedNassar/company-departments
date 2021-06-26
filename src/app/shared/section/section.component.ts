import { Component, Input } from "@angular/core";
import { faLightbulb, faExpand, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-section',
    templateUrl: 'section.component.html'
})
export class SectionComponent {
    @Input() title: string;
    @Input() date: string;
    light = faLightbulb;
    expand = faExpand;
    menu = faEllipsisV;
}