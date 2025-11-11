import { Component, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20">
      <div class="max-w-4xl mx-auto text-center">
        <p 
          class="text-green font-mono text-sm sm:text-base mb-4"
          [style.opacity]="greetingOpacity()"
          [style.transform]="greetingTransform()">
          Hi, my name is
        </p>
        
        <h1 
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          [style.opacity]="nameOpacity()"
          [style.transform]="nameTransform()">
          Your Name.
        </h1>
        
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
          [style.opacity]="taglineOpacity()"
          [style.transform]="taglineTransform()">
          I build things for the web.
        </h2>
        
        <p 
          class="text-slate max-w-2xl mx-auto mb-12 text-lg"
          [style.opacity]="descriptionOpacity()"
          [style.transform]="descriptionTransform()">
          I'm a frontend developer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, performant, and beautifully animated web applications 
          using modern technologies like React, Angular, and Next.js.
        </p>
        
        <div 
          [style.opacity]="buttonOpacity()"
          [style.transform]="buttonTransform()">
          <a
            href="#projects"
            class="inline-block border border-green text-green px-8 py-4 rounded font-mono text-sm hover:bg-green-tint transition-colors hover:scale-105">
            Check out my work!
          </a>
        </div>

        <div 
          class="mt-20"
          [style.opacity]="arrowContainerOpacity()">
          <a
            href="#about"
            class="inline-block text-slate hover:text-green transition-colors">
            <span 
              [style.transform]="arrowTransform()"
              [style.animation]="arrowAnimation()">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent implements OnDestroy {
  // Signal-based animation states
  greetingOpacity = signal(0);
  greetingTransform = computed(() => `translateY(${20 * (1 - this.greetingOpacity())}px)`);

  nameOpacity = signal(0);
  nameTransform = computed(() => `translateY(${20 * (1 - this.nameOpacity())}px)`);

  taglineOpacity = signal(0);
  taglineTransform = computed(() => `translateY(${20 * (1 - this.taglineOpacity())}px)`);

  descriptionOpacity = signal(0);
  descriptionTransform = computed(() => `translateY(${20 * (1 - this.descriptionOpacity())}px)`);

  buttonOpacity = signal(0);
  buttonTransform = computed(() => `translateY(${20 * (1 - this.buttonOpacity())}px)`);

  arrowContainerOpacity = signal(0);
  arrowY = signal(0);
  arrowTransform = computed(() => `translateY(${this.arrowY()}px)`);
  arrowAnimation = computed(() => this.arrowContainerOpacity() > 0 ? 'bounce 2s ease-in-out infinite' : 'none');

  private bounceInterval?: number;

  constructor() {
    // Staggered entrance animations
    setTimeout(() => this.greetingOpacity.set(1), 0);
    setTimeout(() => this.nameOpacity.set(1), 100);
    setTimeout(() => this.taglineOpacity.set(1), 200);
    setTimeout(() => this.descriptionOpacity.set(1), 300);
    setTimeout(() => this.buttonOpacity.set(1), 400);
    setTimeout(() => {
      this.arrowContainerOpacity.set(1);
      // Bounce animation
      this.bounceInterval = window.setInterval(() => {
        this.arrowY.update(y => y === 0 ? 10 : 0);
      }, 1000);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.bounceInterval) {
      clearInterval(this.bounceInterval);
    }
  }
}
