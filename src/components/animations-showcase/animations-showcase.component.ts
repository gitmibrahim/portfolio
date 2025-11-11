import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../animations/product-card/product-card.component';
import { PostCardComponent } from '../animations/post-card/post-card.component';
import { ButtonShowcaseComponent } from '../animations/button-showcase/button-showcase.component';
import { LoadingAnimationComponent } from '../animations/loading-animation/loading-animation.component';

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
        <div [style.opacity]="containerOpacity()" [style.transform]="containerTransform()">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center"
            [style.opacity]="titleOpacity()"
            [style.transform]="titleTransform()">
            <span class="text-green font-mono text-lg mr-4">04.</span>
            Animation Showcase
          </h2>
          <p 
            class="text-slate mb-12 max-w-2xl"
            [style.opacity]="descriptionOpacity()">
            Interactive components demonstrating smooth animations, transitions, and polished UI interactions.
            These showcase my ability to create engaging user experiences with attention to detail.
          </p>

          <div 
            class="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              [style.opacity]="itemOpacity(0)()"
              [style.transform]="itemTransform(0)()">
              <app-product-card></app-product-card>
            </div>
            
            <div 
              [style.opacity]="itemOpacity(1)()"
              [style.transform]="itemTransform(1)()">
              <app-post-card></app-post-card>
            </div>
          </div>

          <div 
            class="grid md:grid-cols-2 gap-8">
            <div 
              [style.opacity]="itemOpacity(2)()"
              [style.transform]="itemTransform(2)()">
              <app-button-showcase></app-button-showcase>
            </div>
            
            <div 
              [style.opacity]="itemOpacity(3)()"
              [style.transform]="itemTransform(3)()">
              <app-loading-animation></app-loading-animation>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AnimationsShowcaseComponent {
  // Signal-based animations
  containerOpacity = signal(0);
  containerTransform = computed(() => `translateY(${50 * (1 - this.containerOpacity())}px)`);

  titleOpacity = signal(0);
  titleTransform = computed(() => `translateX(${-20 * (1 - this.titleOpacity())}px)`);

  descriptionOpacity = signal(0);

  itemOpacity = (index: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), 200 + index * 100);
    return opacity;
  };

  itemTransform = (index: number) => {
    const transform = signal('translateY(30px)');
    setTimeout(() => transform.set('translateY(0)'), 200 + index * 100);
    return transform;
  };

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.titleOpacity.set(1);
      this.descriptionOpacity.set(1);
    }, 0);
  }
}
