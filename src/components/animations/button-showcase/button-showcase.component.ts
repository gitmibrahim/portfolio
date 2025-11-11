import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
          (mouseenter)="hoverState = 'hovered'"
          (mouseleave)="hoverState = 'normal'"
          [@hoverButton]="hoverState">
          Hover Me
        </button>

        <!-- Ripple Button -->
        <button
          class="w-full bg-lightest-navy text-white font-semibold py-3 rounded relative overflow-hidden"
          (click)="triggerRipple()"
          [@rippleButton]="rippleState">
          <span class="relative z-10">Click for Ripple</span>
          <span 
            *ngIf="showRipple"
            class="absolute inset-0 bg-green/30 rounded-full"
            [@ripple]="'active'">
          </span>
        </button>

        <!-- Gradient Button -->
        <button
          class="w-full bg-gradient-to-r from-green to-blue-500 text-white font-semibold py-3 rounded"
          (mouseenter)="gradientState = 'hovered'"
          (mouseleave)="gradientState = 'normal'"
          [@gradientButton]="gradientState">
          Gradient Button
        </button>

        <!-- Border Animation Button -->
        <button
          class="w-full border-2 border-green text-green font-semibold py-3 rounded relative overflow-hidden"
          (mouseenter)="borderState = 'hovered'"
          (mouseleave)="borderState = 'normal'"
          [@borderButton]="borderState">
          <span 
            class="absolute inset-0 bg-green-tint"
            [@borderFill]="borderState">
          </span>
          <span class="relative z-10">Border Animation</span>
        </button>
      </div>
    </div>
  `,
  animations: [
    trigger('hoverButton', [
      state('normal', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hovered', style({ 
        transform: 'scale(1.05)', 
        boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)' 
      })),
      transition('normal <=> hovered', [animate('200ms ease-in-out')])
    ]),
    trigger('rippleButton', [
      state('normal', style({ transform: 'scale(1)' })),
      state('clicked', style({ transform: 'scale(0.98)' })),
      transition('normal => clicked', [
        animate('100ms ease-out', style({ transform: 'scale(0.98)' })),
        animate('100ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('ripple', [
      transition(':enter', [
        animate('600ms ease-out', keyframes([
          style({ transform: 'scale(0)', opacity: 1, offset: 0 }),
          style({ transform: 'scale(4)', opacity: 0, offset: 1 })
        ]))
      ])
    ]),
    trigger('gradientButton', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', [animate('200ms ease-in-out')])
    ]),
    trigger('borderButton', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', [animate('200ms ease-in-out')])
    ]),
    trigger('borderFill', [
      state('normal', style({ transform: 'translateX(-100%)' })),
      state('hovered', style({ transform: 'translateX(0)' })),
      transition('normal => hovered', [animate('300ms ease-in-out')]),
      transition('hovered => normal', [animate('300ms ease-in-out')])
    ])
  ]
})
export class ButtonShowcaseComponent {
  hoverState = 'normal';
  rippleState = 'normal';
  showRipple = false;
  gradientState = 'normal';
  borderState = 'normal';

  triggerRipple() {
    this.rippleState = 'clicked';
    this.showRipple = true;
    setTimeout(() => {
      this.rippleState = 'normal';
      this.showRipple = false;
    }, 600);
  }
}
