import { Component, inject, OnInit } from '@angular/core';
import { NgxSkeletonService } from '@hugodcrq/ngx-skeleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-skeleton';
  skeleton = inject(NgxSkeletonService);

  ngOnInit() {
    this.skeleton.show();

    // simulate long task (3s) and hide
    setTimeout(() => {
      this.skeleton.hide();
    }, 3000);
  }

  reload() {
    window.location.reload();
  }
}
