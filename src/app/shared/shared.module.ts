import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BigProgressComponent } from "./big-progress/big progress.component";
import { CircleChartComponent } from "./circle-chart/circle-chart.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { SectionComponent } from "./section/section.component";
import { SmallProgressComponent } from "./small-progress/small-progress.component";

const components = [
    SectionComponent,
    CircleChartComponent,
    BigProgressComponent,
    SmallProgressComponent,
    ComingSoonComponent
]

@NgModule({
    declarations: [...components],
    imports: [CommonModule, FontAwesomeModule],
    exports: [...components, FontAwesomeModule]
})
export class SharedModule {}