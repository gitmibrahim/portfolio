import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20">
      <div class="max-w-4xl mx-auto text-center">
        <p 
          class="text-green font-mono text-sm sm:text-base mb-4"
          [@fadeInUp]="'in'">
          Hi, my name is
        </p>
        
        <h1 
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          [@fadeInUp]="'in'"
          [style.animation-delay.ms]="100">
          Your Name.
        </h1>
        
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
          [@fadeInUp]="'in'"
          [style.animation-delay.ms]="200">
          I build things for the web.
        </h2>
        
        <p 
          class="text-slate max-w-2xl mx-auto mb-12 text-lg"
          [@fadeInUp]="'in'"
          [style.animation-delay.ms]="300">
          I'm a frontend developer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, performant, and beautifully animated web applications 
          using modern technologies like React, Angular, and Next.js.
        </p>
        
        <div [@fadeInUp]="'in'" [style.animation-delay.ms]="400">
          <a
            href="#projects"
            class="inline-block border border-green text-green px-8 py-4 rounded font-mono text-sm hover:bg-green-tint transition-colors hover:scale-105">
            Check out my work!
          </a>
        </div>

        <div 
          class="mt-20"
          [@bounceAnimation]="'in'"
          [style.animation-delay.ms]="1000">
          <a
            href="#about"
            class="inline-block text-slate hover:text-green transition-colors">
            <span [@bounce]="'in'">↓</span>
          </a>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('bounceAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('bounce', [
      transition(':enter', [
        animate('2000ms ease-in-out infinite', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(10px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HeroComponent {}
