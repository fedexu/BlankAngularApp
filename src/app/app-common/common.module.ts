
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';
import { CardHeaderComponent } from './card/card-header.component';
import { CardBodyComponent } from './card/card-body.component';
import { CardFooterComponent } from './card/card-footer.component';
import { HilightDirective } from './directives/hilight.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule
    ],
    declarations: [
        ModalComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        CardFooterComponent,
        HilightDirective
    ],
    providers: [
        ModalService
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        ModalComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        CardFooterComponent,
        HilightDirective
    ]
})
export class AppCommonModule { constructor() { console.info('CommonModule loaded') } }