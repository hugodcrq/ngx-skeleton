import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[hdSkeleton]',
})
export class NgxSkeletonDirective {
  @HostBinding('class') elementClass = 'hd-skeleton';
}
