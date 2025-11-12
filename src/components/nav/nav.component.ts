import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{'bg-navy/90 backdrop-blur-md shadow-lg': isScrolled(), 'bg-transparent': !isScrolled()}">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex items-center justify-between h-16">
          <a 
            href="/"
            class="text-green text-xl font-mono font-bold hover:scale-105 transition-transform"
            [style.opacity]="logoOpacity()"
            [style.transform]="logoTransform()">
            &lt;YourName /&gt;
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <ol class="flex items-center space-x-8">
              <li *ngFor="let item of navItems; let i = index">
                <a
                  [href]="item.href"
                  class="text-light-slate hover:text-green transition-colors text-sm font-mono"
                  [style.opacity]="navItemOpacity(i)()"
                  [style.transform]="navItemTransform(i)()">
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
              [style.opacity]="buttonOpacity()"
              [style.transform]="buttonTransform()">
              Resume
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden text-light-slate hover:text-green transition-colors"
            (click)="toggleMobileMenu()"
            [attr.aria-label]="'Toggle menu'">
            <span *ngIf="!mobileMenuOpen()">☰</span>
            <span *ngIf="mobileMenuOpen()">✕</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        *ngIf="mobileMenuOpen()"
        class="md:hidden bg-light-navy border-t border-lightest-navy transition-all duration-300"
        [style.height]="mobileMenuHeight()"
        [style.opacity]="mobileMenuOpacity()">
        <div class="px-6 py-4 space-y-4">
          <a
            *ngFor="let item of navItems; let i = index"
            [href]="item.href"
            class="block text-light-slate hover:text-green transition-colors text-sm font-mono"
            (click)="closeMobileMenu()"
            [style.opacity]="mobileMenuItemOpacity(i)()"
            [style.transform]="mobileMenuItemTransform(i)()">
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
})
export class NavComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Animations', href: '#animations' },
    { name: 'Contact', href: '#contact' },
  ];

  // Signal-based animations
  logoOpacity = signal(0);
  logoTransform = computed(() => `translateY(${-20 * (1 - this.logoOpacity())}px)`);

  navItemOpacities = this.navItems.map((_, i) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), i * 100);
    return opacity;
  });

  navItemOpacity = (index: number) => this.navItemOpacities[index];

  navItemTransforms = this.navItems.map((_, i) => {
    const transform = signal('translateY(-20px)');
    setTimeout(() => transform.set('translateY(0)'), i * 100);
    return transform;
  });

  navItemTransform = (index: number) => this.navItemTransforms[index];

  buttonOpacity = signal(0);
  buttonTransform = computed(() => {
    const scale = 0.8 + (this.buttonOpacity() * 0.2);
    return `scale(${scale})`;
  });

  mobileMenuHeight = computed(() => this.mobileMenuOpen() ? 'auto' : '0');
  mobileMenuOpacity = computed(() => this.mobileMenuOpen() ? 1 : 0);

  mobileMenuItemOpacities = this.navItems.map(() => signal(0));
  mobileMenuItemOpacity = (index: number) => this.mobileMenuItemOpacities[index];

  mobileMenuItemTransforms = this.navItems.map(() => signal('translateX(-20px)'));
  mobileMenuItemTransform = (index: number) => this.mobileMenuItemTransforms[index];

  constructor() {
    // Initialize animations
    setTimeout(() => {
      this.logoOpacity.set(1);
      this.buttonOpacity.set(1);
    }, 0);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (this.mobileMenuOpen()) {
      // Animate menu items in
      this.navItems.forEach((_, i) => {
        setTimeout(() => {
          this.mobileMenuItemOpacities[i].set(1);
          this.mobileMenuItemTransforms[i].set('translateX(0)');
        }, i * 100);
      });
    } else {
      // Reset menu items
      this.mobileMenuItemOpacities.forEach(opacity => opacity.set(0));
      this.mobileMenuItemTransforms.forEach(transform => transform.set('translateX(-20px)'));
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    // Reset menu items
    this.mobileMenuItemOpacities.forEach(opacity => opacity.set(0));
    this.mobileMenuItemTransforms.forEach(transform => transform.set('translateX(-20px)'));
  }
}
