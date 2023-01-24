import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NgxSkeletonService } from '@hugodcrq/ngx-skeleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('progressValue') progressValue: ElementRef<HTMLElement>;

  title = 'ngx-skeleton';
  skeleton = inject(NgxSkeletonService);
  timerInterval;
  timerStart = 0;
  timerCurrentValue = 0;
  timerCurrentPercent: string = '';
  isReady = false;

  ngOnInit() {
    this.startTimer();
    this.skeleton.show();

    // simulate long task (3s) and hide
    setTimeout(() => {
      this.clearTimer();
      this.skeleton.hide();
      this.isReady = true;
    }, 4000);
  }

  reload() {
    window.location.reload();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timerCurrentValue += 1;
      this.progressValue.nativeElement.style.width = `${(this.timerCurrentValue * 100) / 3}%`;
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.timerInterval);
    this.timerCurrentValue = this.timerStart;
  }
}
