import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto">
        <div 
          class="grid md:grid-cols-[3fr_2fr] gap-12 items-center"
          [style.opacity]="containerOpacity()"
          [style.transform]="containerTransform()">
          <div>
            <h2 
              class="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center"
              [style.opacity]="titleOpacity()"
              [style.transform]="titleTransform()">
              <span class="text-green font-mono text-lg mr-4">01.</span>
              About Me
            </h2>
            
            <div 
              class="text-slate space-y-4"
              [style.opacity]="contentOpacity()">
              <p>
                Hello! I'm a passionate frontend developer with 3+ years of experience building 
                modern web applications. I specialize in creating pixel-perfect, interactive, and 
                scalable user interfaces using React, Angular, and Next.js.
              </p>
              <p>
                I'm particularly interested in leveraging AI tools to code smarter and faster, 
                whether for generation, debugging, or performance optimization. I enjoy building 
                accessible, SEO-friendly applications with smooth animations and polished UI transitions.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul 
                class="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                <li 
                  *ngFor="let tech of technologies; let i = index"
                  class="text-slate before:content-['▹'] before:text-green before:mr-2"
                  [style.opacity]="techItemOpacity(i)()"
                  [style.transform]="techItemTransform(i)()">
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            class="relative"
            [style.opacity]="imageOpacity()"
            [style.transform]="imageTransform()">
            <div class="relative w-full max-w-sm mx-auto">
              <div class="absolute inset-0 border-2 border-green rounded-lg transform rotate-6 hover:rotate-3 transition-transform duration-300"></div>
              <div class="relative bg-light-navy rounded-lg p-4">
                <div class="aspect-square bg-gradient-to-br from-green/20 to-blue-500/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Angular',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'SASS'
  ];

  // Signal-based animations
  containerOpacity = signal(0);
  containerTransform = computed(() => `translateY(${50 * (1 - this.containerOpacity())}px)`);

  titleOpacity = signal(0);
  titleTransform = computed(() => `translateX(${-20 * (1 - this.titleOpacity())}px)`);

  contentOpacity = signal(0);
  
  imageOpacity = signal(0);
  imageTransform = computed(() => {
    const scale = 0.9 + (this.imageOpacity() * 0.1);
    return `scale(${scale})`;
  });

  techItemOpacity = (index: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), 300 + index * 50);
    return opacity;
  };

  techItemTransform = (index: number) => {
    const transform = signal('translateX(-10px)');
    setTimeout(() => transform.set('translateX(0)'), 300 + index * 50);
    return transform;
  };

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.titleOpacity.set(1);
      this.contentOpacity.set(1);
      this.imageOpacity.set(1);
    }, 0);
  }
}
