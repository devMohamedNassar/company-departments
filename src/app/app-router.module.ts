import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StrategyExecutionComponent } from "./departments/strategy-execution/strategy-execution.component";
import { ComingSoonComponent } from "./shared/coming-soon/coming-soon.component";

const routes: Routes = [
    {path: 'strategy-execution', component: StrategyExecutionComponent},
    {path: 'service-assurance', component: ComingSoonComponent},
    {path: 'performance', component: ComingSoonComponent},
    {path: 'financial', component: ComingSoonComponent},
    {path: 'delivery', component: ComingSoonComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {

}