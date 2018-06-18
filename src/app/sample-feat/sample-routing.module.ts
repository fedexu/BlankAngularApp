import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SampleViewComponent } from "./sample-view/sample-view.component";

const sampleRoutes: Routes = [
    {path:'sample', component: SampleViewComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(sampleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SampleRoutingModule{}