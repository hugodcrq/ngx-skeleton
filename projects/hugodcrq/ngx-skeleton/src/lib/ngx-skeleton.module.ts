import { NgModule } from '@angular/core';
import { NgxSkeletonDirective } from './ngx-skeleton.directive';
import { NgxSkeletonService } from './ngx-skeleton.service';

@NgModule({
  declarations: [NgxSkeletonDirective],
  imports: [],
  providers: [NgxSkeletonService],
  exports: [NgxSkeletonDirective],
})
export class NgxSkeletonModule {}
