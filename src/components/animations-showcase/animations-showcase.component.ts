import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../animations/product-card/product-card.component';
import { PostCardComponent } from '../animations/post-card/post-card.component';
import { ButtonShowcaseComponent } from '../animations/button-showcase/button-showcase.component';
import { LoadingAnimationComponent } from '../animations/loading-animation/loading-animation.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-animations-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    PostCardComponent,
    ButtonShowcaseComponent,
    LoadingAnimationComponent
  ],
  template: `
    <section id="animations" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-6xl mx-auto w-full">
        <div [@fadeInUp]="'in'">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center"
            [@slideInLeft]="'in'">
            <span class="text-green font-mono text-lg mr-4">04.</span>
            Animation Showcase
          </h2>
          <p 
            class="text-slate mb-12 max-w-2xl"
            [@fadeIn]="'in'"
            [style.animation-delay.ms]="100">
            Interactive components demonstrating smooth animations, transitions, and polished UI interactions.
            These showcase my ability to create engaging user experiences with attention to detail.
          </p>

          <div 
            class="grid md:grid-cols-2 gap-8 mb-12"
            [@gridAnimation]="'in'">
            <div [@itemAnimation]="'in'" [style.animation-delay.ms]="200">
              <app-product-card></app-product-card>
            </div>
            
            <div [@itemAnimation]="'in'" [style.animation-delay.ms]="300">
              <app-post-card></app-post-card>
            </div>
          </div>

          <div 
            class="grid md:grid-cols-2 gap-8"
            [@gridAnimation]="'in'">
            <div [@itemAnimation]="'in'" [style.animation-delay.ms]="400">
              <app-button-showcase></app-button-showcase>
            </div>
            
            <div [@itemAnimation]="'in'" [style.animation-delay.ms]="500">
              <app-loading-animation></app-loading-animation>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('gridAnimation', [
      transition(':enter', [
        query('div', [
          stagger(100, [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AnimationsShowcaseComponent {}
