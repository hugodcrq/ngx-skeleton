import { Component, inject, OnInit } from '@angular/core';
import { NgxSkeletonService } from '@hugodcrq/ngx-skeleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-skeleton';
  skeletonService = inject(NgxSkeletonService);

  ngOnInit() {
    this.skeletonService.show();
    this.hide();
  }

  hide() {
    setTimeout(() => {
      this.skeletonService.hide();
    }, 2000);
  }
}
