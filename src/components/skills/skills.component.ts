import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto w-full">
        <div [style.opacity]="containerOpacity()" [style.transform]="containerTransform()">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center justify-center"
            [style.opacity]="titleOpacity()"
            [style.transform]="titleTransform()">
            <span class="text-green font-mono text-lg mr-4">05.</span>
            Skills & Technologies
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div 
              *ngFor="let skillGroup of skills; let i = index"
              class="bg-light-navy rounded-lg p-6 hover:scale-105 transition-transform"
              [style.opacity]="skillCardOpacity(i)()"
              [style.transform]="skillCardTransform(i)()">
              <h3 class="text-green font-semibold mb-4">{{ skillGroup.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let skill of skillGroup.items"
                  class="px-3 py-1 bg-navy text-slate rounded text-sm font-mono hover:bg-green hover:text-navy transition-colors cursor-pointer">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skills: SkillGroup[] = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Frameworks', items: ['React', 'Angular', 'Next.js', 'Vue.js'] },
    { category: 'Styling', items: ['Tailwind CSS', 'SASS', 'Bootstrap', 'Styled Components'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Jest', 'ESLint'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'CI/CD', 'Docker'] },
  ];

  // Signal-based animations
  containerOpacity = signal(0);
  containerTransform = computed(() => `translateY(${50 * (1 - this.containerOpacity())}px)`);

  titleOpacity = signal(0);
  titleTransform = computed(() => `translateX(${-20 * (1 - this.titleOpacity())}px)`);

  skillCardOpacity = (index: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), index * 100);
    return opacity;
  };

  skillCardTransform = (index: number) => {
    const transform = signal('translateY(30px)');
    setTimeout(() => transform.set('translateY(0)'), index * 100);
    return transform;
  };

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.titleOpacity.set(1);
    }, 0);
  }
}
