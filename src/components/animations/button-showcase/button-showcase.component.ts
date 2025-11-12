import { Component, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-light-navy rounded-lg p-6">
      <h3 class="text-white font-semibold mb-4 text-center">Button Animations</h3>
      <div class="space-y-6">
        <!-- Hover Button -->
        <button
          class="w-full bg-green text-navy font-semibold py-3 rounded"
          (mouseenter)="hoverState.set('hovered')"
          (mouseleave)="hoverState.set('normal')"
          [style.transform]="hoverButtonTransform()"
          [style.box-shadow]="hoverButtonShadow()">
          Hover Me
        </button>

        <!-- Ripple Button -->
        <button
          class="w-full bg-lightest-navy text-white font-semibold py-3 rounded relative overflow-hidden"
          (click)="triggerRipple()"
          [style.transform]="rippleButtonTransform()">
          <span class="relative z-10">Click for Ripple</span>
          <span 
            *ngIf="showRipple()"
            class="absolute inset-0 bg-green/30 rounded-full"
            [style.transform]="rippleTransform()"
            [style.opacity]="rippleOpacity()">
          </span>
        </button>

        <!-- Gradient Button -->
        <button
          class="w-full bg-gradient-to-r from-green to-blue-500 text-white font-semibold py-3 rounded"
          (mouseenter)="gradientState.set('hovered')"
          (mouseleave)="gradientState.set('normal')"
          [style.transform]="gradientButtonTransform()">
          Gradient Button
        </button>

        <!-- Border Animation Button -->
        <button
          class="w-full border-2 border-green text-green font-semibold py-3 rounded relative overflow-hidden"
          (mouseenter)="borderState.set('hovered')"
          (mouseleave)="borderState.set('normal')"
          [style.transform]="borderButtonTransform()">
          <span 
            class="absolute inset-0 bg-green-tint"
            [style.transform]="borderFillTransform()">
          </span>
          <span class="relative z-10">Border Animation</span>
        </button>
      </div>
    </div>
  `,
})
export class ButtonShowcaseComponent implements OnDestroy {
  hoverState = signal<'normal' | 'hovered'>('normal');
  rippleState = signal<'normal' | 'clicked'>('normal');
  showRipple = signal(false);
  rippleScale = signal(0);
  rippleOpacity = signal(1);
  gradientState = signal<'normal' | 'hovered'>('normal');
  borderState = signal<'normal' | 'hovered'>('normal');
  borderFillX = signal(-100);

  // Signal-based animations
  hoverButtonTransform = computed(() => {
    const scale = this.hoverState() === 'hovered' ? 1.05 : 1;
    return `scale(${scale})`;
  });

  hoverButtonShadow = computed(() => {
    return this.hoverState() === 'hovered' 
      ? '0 10px 30px rgba(100, 255, 218, 0.3)' 
      : 'none';
  });

  rippleButtonTransform = computed(() => {
    if (this.rippleState() === 'clicked') {
      return 'scale(0.98)';
    }
    return 'scale(1)';
  });

  rippleTransform = computed(() => `scale(${this.rippleScale()})`);

  gradientButtonTransform = computed(() => {
    const scale = this.gradientState() === 'hovered' ? 1.05 : 1;
    return `scale(${scale})`;
  });

  borderButtonTransform = computed(() => {
    const scale = this.borderState() === 'hovered' ? 1.05 : 1;
    return `scale(${scale})`;
  });

  borderFillTransform = computed(() => `translateX(${this.borderFillX()}%)`);

  triggerRipple() {
    this.rippleState.set('clicked');
    this.showRipple.set(true);
    this.rippleScale.set(0);
    this.rippleOpacity.set(1);

    // Animate ripple
    setTimeout(() => {
      this.rippleScale.set(4);
      this.rippleOpacity.set(0);
    }, 10);

    setTimeout(() => {
      this.rippleState.set('normal');
      this.showRipple.set(false);
      this.rippleScale.set(0);
      this.rippleOpacity.set(1);
    }, 600);
  }

  private borderFillInterval?: number;

  constructor() {
    // Watch border state for fill animation using requestAnimationFrame
    const animateBorderFill = () => {
      if (this.borderState() === 'hovered' && this.borderFillX() < 0) {
        this.borderFillX.update(x => Math.min(0, x + 5));
        this.borderFillInterval = window.requestAnimationFrame(animateBorderFill);
      } else if (this.borderState() === 'normal' && this.borderFillX() > -100) {
        this.borderFillX.update(x => Math.max(-100, x - 5));
        this.borderFillInterval = window.requestAnimationFrame(animateBorderFill);
      }
    };
    this.borderFillInterval = window.requestAnimationFrame(animateBorderFill);
  }

  ngOnDestroy() {
    if (this.borderFillInterval) {
      window.cancelAnimationFrame(this.borderFillInterval);
    }
  }
}
