import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

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
            [@spinner]="'rotate'">
          </div>
          <span class="text-slate text-sm">Spinner</span>
        </div>

        <!-- Dots -->
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-2">
            <div 
              *ngFor="let dot of [0, 1, 2]; let i = index"
              class="w-3 h-3 bg-green rounded-full"
              [@bounceDot]="'bounce'"
              [style.animation-delay.ms]="i * 100">
            </div>
          </div>
          <span class="text-slate text-sm">Bouncing Dots</span>
        </div>

        <!-- Pulse -->
        <div class="flex flex-col items-center gap-4">
          <div 
            class="w-16 h-16 bg-green rounded-full"
            [@pulse]="'pulse'">
          </div>
          <span class="text-slate text-sm">Pulse</span>
        </div>

        <!-- Progress Bar -->
        <div class="flex flex-col gap-2">
          <div class="w-full h-2 bg-lightest-navy rounded-full overflow-hidden">
            <div 
              class="h-full bg-green"
              [@progressBar]="'progress'">
            </div>
          </div>
          <span class="text-slate text-sm text-center">Progress Bar</span>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('spinner', [
      transition('* => rotate', [
        animate('1000ms linear infinite', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(360deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger('bounceDot', [
      transition('* => bounce', [
        animate('600ms ease-in-out infinite', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-10px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ]),
    trigger('pulse', [
      transition('* => pulse', [
        animate('1500ms ease-in-out infinite', keyframes([
          style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
          style({ transform: 'scale(1.2)', opacity: 0.7, offset: 0.5 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('progressBar', [
      transition('* => progress', [
        animate('2000ms linear infinite', keyframes([
          style({ width: '0%', offset: 0 }),
          style({ width: '100%', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class LoadingAnimationComponent {}
