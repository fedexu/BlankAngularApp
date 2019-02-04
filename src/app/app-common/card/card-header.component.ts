import { Component } from '@angular/core';

@Component({
    selector: 'card-header',
    template: '<ng-content></ng-content>',
    styles: ['background: #fff;']
})
export class CardHeaderComponent { }