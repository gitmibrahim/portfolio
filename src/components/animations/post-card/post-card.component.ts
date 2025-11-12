import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-light-navy rounded-lg p-6">
      <h3 class="text-white font-semibold mb-4 text-center">Post Card</h3>
      <article
        class="bg-navy rounded-lg overflow-hidden cursor-pointer h-full flex flex-col"
        (mouseenter)="isHovered.set(true)"
        (mouseleave)="isHovered.set(false)"
        [style.transform]="cardTransform()">
        <div 
          class="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30"
          [style.transform]="imageTransform()"></div>
        
        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-center gap-4 mb-3 text-xs text-slate">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Jan 15, 2024
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Author Name
            </span>
          </div>
          
          <h4 class="text-white font-semibold mb-2 text-lg">
            Building Modern Web Applications
          </h4>
          <p class="text-slate text-sm mb-4 flex-1">
            Learn how to create beautiful, performant web applications with modern frameworks
            and best practices. This guide covers everything from setup to deployment.
          </p>
          
          <a
            href="#"
            class="flex items-center gap-2 text-green font-mono text-sm group"
            [style.transform]="linkTransform()">
            Read More
            <span [style.transform]="arrowTransform()">
              →
            </span>
          </a>
        </div>
      </article>
    </div>
  `,
})
export class PostCardComponent {
  isHovered = signal(false);

  // Signal-based animations
  cardTransform = computed(() => {
    const y = this.isHovered() ? -5 : 0;
    return `translateY(${y}px)`;
  });

  imageTransform = computed(() => {
    const scale = this.isHovered() ? 1.05 : 1;
    return `scale(${scale})`;
  });

  linkTransform = computed(() => {
    const x = this.isHovered() ? 5 : 0;
    return `translateX(${x}px)`;
  });

  arrowTransform = computed(() => {
    const x = this.isHovered() ? 5 : 0;
    return `translateX(${x}px)`;
  });
}
