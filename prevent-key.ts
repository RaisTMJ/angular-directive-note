import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[prevent-keys]',

})
export class PreventKeysDirective {
    @Input('prevent-keys') preventKeys;

    @HostListener('keydown', ['$event'])
    onKeyUp($event) {
        if (this.preventKeys && this.preventKeys.includes($event.keyCode)) {
            $event.preventDefault();
        }
    }
}
