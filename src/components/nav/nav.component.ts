import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav 
      [@navAnimation]="isScrolled ? 'scrolled' : 'normal'"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{'bg-navy/90 backdrop-blur-md shadow-lg': isScrolled, 'bg-transparent': !isScrolled}">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex items-center justify-between h-16">
          <a 
            href="/"
            class="text-green text-xl font-mono font-bold hover:scale-105 transition-transform"
            [@logoAnimation]="'in'">
            &lt;YourName /&gt;
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <ol class="flex items-center space-x-8">
              <li *ngFor="let item of navItems; let i = index">
                <a
                  [href]="item.href"
                  class="text-light-slate hover:text-green transition-colors text-sm font-mono"
                  [@navItemAnimation]="'in'"
                  [style.animation-delay.ms]="i * 100">
                  <span class="text-green mr-2">0{{ i + 1 }}.</span>
                  {{ item.name }}
                </a>
              </li>
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-green text-green px-4 py-2 rounded text-sm font-mono hover:bg-green-tint transition-colors hover:scale-105"
              [@buttonAnimation]="'in'">
              Resume
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden text-light-slate hover:text-green transition-colors"
            (click)="toggleMobileMenu()"
            [attr.aria-label]="'Toggle menu'">
            <span *ngIf="!mobileMenuOpen">☰</span>
            <span *ngIf="mobileMenuOpen">✕</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        *ngIf="mobileMenuOpen"
        [@mobileMenuAnimation]="mobileMenuOpen ? 'open' : 'closed'"
        class="md:hidden bg-light-navy border-t border-lightest-navy">
        <div class="px-6 py-4 space-y-4">
          <a
            *ngFor="let item of navItems; let i = index"
            [href]="item.href"
            class="block text-light-slate hover:text-green transition-colors text-sm font-mono"
            (click)="closeMobileMenu()"
            [@mobileMenuItemAnimation]="'in'"
            [style.animation-delay.ms]="i * 100">
            <span class="text-green mr-2">0{{ i + 1 }}.</span>
            {{ item.name }}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="block border border-green text-green px-4 py-2 rounded text-sm font-mono hover:bg-green-tint transition-colors text-center"
            (click)="closeMobileMenu()">
            Resume
          </a>
        </div>
      </div>
    </nav>
  `,
  animations: [
    trigger('navAnimation', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('scrolled', style({ transform: 'translateY(0)' })),
      transition('* => *', [animate('300ms ease-in-out')])
    ]),
    trigger('logoAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('navItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, scale: 0.8 }),
        animate('500ms ease-out', style({ opacity: 1, scale: 1 }))
      ])
    ]),
    trigger('mobileMenuAnimation', [
      state('closed', style({ height: '0', opacity: 0 })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed <=> open', [animate('300ms ease-in-out')])
    ]),
    trigger('mobileMenuItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class NavComponent {
  isScrolled = false;
  mobileMenuOpen = false;
  navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Animations', href: '#animations' },
    { name: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
