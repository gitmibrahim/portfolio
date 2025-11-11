import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-email-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="fixed right-8 bottom-0 z-40 hidden lg:block"
      [@fadeIn]="'in'">
      <div class="flex flex-col items-center">
        <a
          href="mailto:your.email@example.com"
          class="text-slate hover:text-green transition-colors mb-6 font-mono text-sm hover:-translate-y-1"
          [style.writing-mode]="'vertical-rl'"
          [@emailAnimation]="'in'"
          [style.animation-delay.ms]="1000">
          your.email@example.com
        </a>
        <div 
          class="h-24 w-px bg-slate"
          [@lineAnimation]="'in'"
          [style.animation-delay.ms]="1400">
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('emailAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('lineAnimation', [
      transition(':enter', [
        style({ transform: 'scaleY(0)' }),
        animate('500ms ease-out', style({ transform: 'scaleY(1)' }))
      ])
    ])
  ]
})
export class EmailSidebarComponent {}
