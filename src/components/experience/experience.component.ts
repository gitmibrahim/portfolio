import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

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
        <div [@fadeInUp]="'in'">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center"
            [@slideInLeft]="'in'">
            <span class="text-green font-mono text-lg mr-4">02.</span>
            Where I've Worked
          </h2>

          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-lightest-navy"></div>
            
            <div class="space-y-12" [@timelineAnimation]="'in'">
              <div 
                *ngFor="let exp of experiences; let i = index"
                class="relative pl-20"
                [@timelineItemAnimation]="'in'"
                [style.animation-delay.ms]="i * 200">
                <!-- Timeline dot -->
                <div class="absolute left-6 top-2 w-4 h-4 bg-green rounded-full border-4 border-navy"></div>
                
                <div 
                  class="bg-light-navy/50 rounded-lg p-6 hover:bg-light-navy transition-colors hover:scale-105"
                  [@cardHover]="'in'">
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
                  <ul class="space-y-2" [@listAnimation]="'in'">
                    <li 
                      *ngFor="let item of exp.description; let j = index"
                      class="text-slate text-sm flex items-start"
                      [@listItemAnimation]="'in'"
                      [style.animation-delay.ms]="j * 100">
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
    trigger('timelineAnimation', [
      transition(':enter', [
        query('div', [
          stagger(200, [
            style({ opacity: 0, transform: 'translateX(-50px)' }),
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ])
      ])
    ]),
    trigger('timelineItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('cardHover', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('300ms ease-out')
      ])
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        query('li', [
          stagger(100, [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('listItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
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

  formatDate(dateString: string): string {
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}
