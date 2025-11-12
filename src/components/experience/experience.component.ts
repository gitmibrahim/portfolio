import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto w-full">
        <div [style.opacity]="containerOpacity()" [style.transform]="containerTransform()">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center"
            [style.opacity]="titleOpacity()"
            [style.transform]="titleTransform()">
            <span class="text-green font-mono text-lg mr-4">02.</span>
            Where I've Worked
          </h2>

          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-lightest-navy"></div>
            
            <div class="space-y-12">
              <div 
                *ngFor="let exp of experiences; let i = index"
                class="relative pl-20"
                [style.opacity]="experienceOpacity(i)()"
                [style.transform]="experienceTransform(i)()">
                <!-- Timeline dot -->
                <div class="absolute left-6 top-2 w-4 h-4 bg-green rounded-full border-4 border-navy"></div>
                
                <div 
                  class="bg-light-navy/50 rounded-lg p-6 hover:bg-light-navy transition-colors hover:scale-105">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 class="text-white font-semibold text-lg">
                      {{ exp.position }}
                    </h3>
                    <span class="text-green text-sm font-mono">
                      {{ formatDate(exp.startDate) }} - {{ exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate) }}
                    </span>
                  </div>
                  <p class="text-green text-sm font-mono mb-4">
                    {{ exp.company }} · {{ exp.location }}
                  </p>
                  <ul class="space-y-2">
                    <li 
                      *ngFor="let item of exp.description; let j = index"
                      class="text-slate text-sm flex items-start"
                      [style.opacity]="descriptionItemOpacity(i, j)()"
                      [style.transform]="descriptionItemTransform(i, j)()">
                      <span class="text-green mr-2">▹</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Company Name',
      position: 'Senior Frontend Developer',
      location: 'Remote',
      startDate: '2022-01',
      endDate: 'Present',
      description: [
        'Led frontend architecture decisions and contributed to overall system design',
        'Built pixel-perfect, interactive UIs using React and Angular',
        'Implemented SSR with Next.js and Angular Universal',
        'Collaborated with designers and PMs in an agile environment',
        'Optimized performance, accessibility, and SEO',
      ],
    },
    {
      company: 'Previous Company',
      position: 'Frontend Developer',
      location: 'San Francisco, CA',
      startDate: '2020-06',
      endDate: '2021-12',
      description: [
        'Developed reusable UI components with TypeScript and React',
        'Worked with REST APIs and async data flows',
        'Implemented responsive designs using Tailwind CSS and SASS',
        'Wrote tests using Jest and React Testing Library',
        'Supported CI/CD pipelines on AWS',
      ],
    },
  ];

  // Signal-based animations
  containerOpacity = signal(0);
  containerTransform = computed(() => `translateY(${50 * (1 - this.containerOpacity())}px)`);

  titleOpacity = signal(0);
  titleTransform = computed(() => `translateX(${-20 * (1 - this.titleOpacity())}px)`);

  experienceOpacity = (index: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), index * 200);
    return opacity;
  };

  experienceTransform = (index: number) => {
    const transform = signal('translateX(-50px)');
    setTimeout(() => transform.set('translateX(0)'), index * 200);
    return transform;
  };

  descriptionItemOpacity = (expIndex: number, itemIndex: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), expIndex * 200 + itemIndex * 100);
    return opacity;
  };

  descriptionItemTransform = (expIndex: number, itemIndex: number) => {
    const transform = signal('translateY(10px)');
    setTimeout(() => transform.set('translateY(0)'), expIndex * 200 + itemIndex * 100);
    return transform;
  };

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.titleOpacity.set(1);
    }, 0);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}
