import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SampleViewComponent } from "./sample-view/sample-view.component";
import { SampleFeatComponent } from "./sample-feat/sample-feat.component";

const sampleRoutes: Routes = [
    {path:'', component: SampleFeatComponent, 
    children: [
        {path:'', component: SampleViewComponent}
    ]}
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