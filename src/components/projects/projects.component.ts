import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-6xl mx-auto w-full">
        <div [@fadeInUp]="'in'">
          <h2 
            class="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center"
            [@slideInLeft]="'in'">
            <span class="text-green font-mono text-lg mr-4">03.</span>
            Some Things I've Built
          </h2>

          <div 
            class="space-y-24 mt-16"
            [@projectsAnimation]="'in'">
            <div 
              *ngFor="let project of projects; let i = index"
              [@projectAnimation]="'in'"
              [style.animation-delay.ms]="i * 200"
              class="grid md:grid-cols-2 gap-8 items-center"
              [ngClass]="{'md:flex-row-reverse': i % 2 === 1}">
              <div 
                [ngClass]="{'md:order-2': i % 2 === 1}"
                class="hover:scale-105 transition-transform duration-300">
                <div class="relative bg-light-navy rounded-lg overflow-hidden group">
                  <div class="aspect-video bg-gradient-to-br from-green/20 to-blue-500/20 flex items-center justify-center">
                    <span class="text-slate text-sm">Project Image</span>
                  </div>
                  <div class="absolute inset-0 bg-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div [ngClass]="{'md:order-1': i % 2 === 1}">
                <p class="text-green font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 class="text-2xl font-bold text-white mb-4">
                  {{ project.title }}
                </h3>
                <div class="bg-light-navy rounded-lg p-6 mb-4">
                  <p class="text-slate text-sm leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>
                <ul class="flex flex-wrap gap-4 mb-4 font-mono text-xs text-slate">
                  <li *ngFor="let tech of project.tech">{{ tech }}</li>
                </ul>
                <div class="flex gap-4">
                  <a
                    [href]="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate hover:text-green transition-colors hover:-translate-y-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    [href]="project.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate hover:text-green transition-colors hover:-translate-y-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                  </a>
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
    trigger('projectsAnimation', [
      transition(':enter', [
        query('div', [
          stagger(200, [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('projectAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, featuring SSR, optimized performance, and smooth animations. Includes product catalog, shopping cart, and checkout flow.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and beautiful UI transitions. Built with React and Firebase.',
      tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects with smooth scroll animations, interactive components, and responsive design. Built with Next.js and Framer Motion.',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];
}
