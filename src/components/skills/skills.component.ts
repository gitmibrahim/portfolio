import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

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
        <div [@fadeInUp]="'in'">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center justify-center"
            [@slideInLeft]="'in'">
            <span class="text-green font-mono text-lg mr-4">05.</span>
            Skills & Technologies
          </h2>

          <div 
            class="grid md:grid-cols-2 gap-6"
            [@gridAnimation]="'in'">
            <div 
              *ngFor="let skillGroup of skills; let i = index"
              class="bg-light-navy rounded-lg p-6 hover:scale-105 transition-transform"
              [@skillCardAnimation]="'in'"
              [style.animation-delay.ms]="i * 100">
              <h3 class="text-green font-semibold mb-4">{{ skillGroup.category }}</h3>
              <div class="flex flex-wrap gap-2" [@tagsAnimation]="'in'">
                <span 
                  *ngFor="let skill of skillGroup.items"
                  class="px-3 py-1 bg-navy text-slate rounded text-sm font-mono hover:bg-green hover:text-navy transition-colors cursor-pointer"
                  [@tagAnimation]="'in'">
                  {{ skill }}
                </span>
              </div>
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
    trigger('skillCardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('tagsAnimation', [
      transition(':enter', [
        query('span', [
          stagger(50, [
            style({ opacity: 0, transform: 'scale(0.8)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ]),
    trigger('tagAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
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
}
