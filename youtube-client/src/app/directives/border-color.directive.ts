import { Directive, HostBinding, Input } from '@angular/core';
import { getItemBottomBorderColor } from '../common/helper';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  @HostBinding('style.border-bottom') public borderBottom: string = '';

  @Input('appBorderColor') public set borderColor(publishedDate: string) {
    if (publishedDate) {
      this.borderBottom = `7px solid ${getItemBottomBorderColor(
        publishedDate
      )}`;
    }
  }
}
