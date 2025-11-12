import { Component, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-animation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-light-navy rounded-lg p-6">
      <h3 class="text-white font-semibold mb-4 text-center">Loading Animations</h3>
      <div class="space-y-8">
        <!-- Spinner -->
        <div class="flex flex-col items-center gap-4">
          <div 
            class="w-16 h-16 border-4 border-slate border-t-green rounded-full"
            [style.transform]="spinnerRotation()">
          </div>
          <span class="text-slate text-sm">Spinner</span>
        </div>

        <!-- Dots -->
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-2">
            <div 
              *ngFor="let dot of [0, 1, 2]; let i = index"
              class="w-3 h-3 bg-green rounded-full"
              [style.transform]="dotTransform(i)()"
              [style.animation-delay.ms]="i * 100">
            </div>
          </div>
          <span class="text-slate text-sm">Bouncing Dots</span>
        </div>

        <!-- Pulse -->
        <div class="flex flex-col items-center gap-4">
          <div 
            class="w-16 h-16 bg-green rounded-full"
            [style.transform]="pulseTransform()"
            [style.opacity]="pulseOpacity()">
          </div>
          <span class="text-slate text-sm">Pulse</span>
        </div>

        <!-- Progress Bar -->
        <div class="flex flex-col gap-2">
          <div class="w-full h-2 bg-lightest-navy rounded-full overflow-hidden">
            <div 
              class="h-full bg-green"
              [style.width]="progressWidth()">
            </div>
          </div>
          <span class="text-slate text-sm text-center">Progress Bar</span>
        </div>
      </div>
    </div>
  `,
})
export class LoadingAnimationComponent implements OnDestroy {
  spinnerRotation = signal(0);
  dotY = [signal(0), signal(0), signal(0)];
  pulseScale = signal(1);
  pulseOpacity = signal(1);
  progressWidth = signal('0%');
  animationTime = signal(0);
  private intervals: number[] = [];

  // Signal-based animations
  dotTransform = (index: number) => {
    return computed(() => `translateY(${this.dotY[index]()}px)`);
  };

  constructor() {
    // Spinner rotation
    const spinnerInterval = window.setInterval(() => {
      this.spinnerRotation.update(r => (r + 10) % 360);
    }, 16); // ~60fps
    this.intervals.push(spinnerInterval);

    // Bouncing dots
    const dotInterval = window.setInterval(() => {
      this.animationTime.update(t => t + 16);
      const time = this.animationTime();
      this.dotY.forEach((dot, i) => {
        const delay = i * 100;
        const cycle = (time - delay) % 600;
        if (cycle < 300) {
          dot.set(-10 * (cycle / 300));
        } else {
          dot.set(-10 + 10 * ((cycle - 300) / 300));
        }
      });
    }, 16);
    this.intervals.push(dotInterval);

    // Pulse animation
    const pulseInterval = window.setInterval(() => {
      const time = Date.now() % 1500;
      const progress = time / 1500;
      this.pulseScale.set(1 + 0.2 * Math.sin(progress * Math.PI * 2));
      this.pulseOpacity.set(1 - 0.3 * Math.abs(Math.sin(progress * Math.PI * 2)));
    }, 16);
    this.intervals.push(pulseInterval);

    // Progress bar
    const progressInterval = window.setInterval(() => {
      const time = Date.now() % 2000;
      this.progressWidth.set(`${(time / 2000) * 100}%`);
    }, 16);
    this.intervals.push(progressInterval);
  }

  ngOnDestroy() {
    this.intervals.forEach(interval => clearInterval(interval));
  }
}
