import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="fixed right-8 bottom-0 z-40 hidden lg:block"
      [style.opacity]="containerOpacity()">
      <div class="flex flex-col items-center">
        <a
          href="mailto:your.email@example.com"
          class="text-slate hover:text-green transition-colors mb-6 font-mono text-sm hover:-translate-y-1"
          [style.writing-mode]="'vertical-rl'"
          [style.opacity]="emailOpacity()"
          [style.transform]="emailTransform()">
          your.email@example.com
        </a>
        <div 
          class="h-24 w-px bg-slate"
          [style.transform]="lineTransform()">
        </div>
      </div>
    </div>
  `,
})
export class EmailSidebarComponent {
  // Signal-based animations
  containerOpacity = signal(0);
  
  emailOpacity = signal(0);
  emailTransform = computed(() => `translateY(${20 * (1 - this.emailOpacity())}px)`);

  lineScale = signal(0);
  lineTransform = computed(() => `scaleY(${this.lineScale()})`);

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.emailOpacity.set(1);
      this.lineScale.set(1);
    }, 1000);
  }
}
