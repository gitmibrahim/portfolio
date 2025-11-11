import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto">
        <div 
          class="grid md:grid-cols-[3fr_2fr] gap-12 items-center"
          [@fadeInUp]="'in'">
          <div>
            <h2 
              class="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center"
              [@slideInLeft]="'in'">
              <span class="text-green font-mono text-lg mr-4">01.</span>
              About Me
            </h2>
            
            <div 
              class="text-slate space-y-4"
              [@fadeIn]="'in'"
              [style.animation-delay.ms]="200">
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
                class="grid grid-cols-2 gap-2 mt-4 font-mono text-sm"
                [@listAnimation]="'in'">
                <li 
                  *ngFor="let tech of technologies; let i = index"
                  class="text-slate before:content-['▹'] before:text-green before:mr-2"
                  [@listItemAnimation]="'in'"
                  [style.animation-delay.ms]="300 + i * 50">
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            class="relative"
            [@scaleIn]="'in'"
            [style.animation-delay.ms]="300">
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
    trigger('listAnimation', [
      transition(':enter', [
        query('li', [
          stagger(50, [
            style({ opacity: 0, transform: 'translateX(-10px)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ])
      ])
    ]),
    trigger('listItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
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
}
