import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[hilight]'
})
export class HilightDirective {
    @Input() hilight: string;

    constructor(private element: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.hilight);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }
}