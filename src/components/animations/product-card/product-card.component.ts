import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-light-navy rounded-lg p-6">
      <h3 class="text-white font-semibold mb-4 text-center">Product Card</h3>
      <div 
        class="bg-navy rounded-lg overflow-hidden cursor-pointer"
        (mouseenter)="isHovered.set(true)"
        (mouseleave)="isHovered.set(false)"
        [style.transform]="cardTransform()">
        <div 
          class="aspect-square bg-gradient-to-br from-green/30 to-blue-500/30 relative"
          [style.transform]="imageTransform()">
          <button
            class="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
            (click)="toggleLike($event)"
            [style.transform]="heartTransform()"
            [style.color]="heartColor()">
            <svg 
              class="w-5 h-5"
              [attr.fill]="isLiked() ? 'currentColor' : 'none'"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        <div class="p-4">
          <h4 class="text-white font-semibold mb-2">Premium Product</h4>
          <p class="text-slate text-sm mb-4">Beautiful design with smooth animations</p>
          
          <div class="flex items-center justify-between">
            <span class="text-green font-bold text-xl">$99.99</span>
            <button
              class="flex items-center gap-2 bg-green text-navy px-4 py-2 rounded font-semibold text-sm hover:scale-105 transition-transform">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductCardComponent {
  isLiked = signal(false);
  isHovered = signal(false);
  heartScale = signal(1);

  // Signal-based animations
  cardTransform = computed(() => {
    const y = this.isHovered() ? -5 : 0;
    return `translateY(${y}px)`;
  });

  imageTransform = computed(() => {
    const scale = this.isHovered() ? 1.05 : 1;
    return `scale(${scale})`;
  });

  heartTransform = computed(() => {
    const scale = this.heartScale();
    return `scale(${scale})`;
  });

  heartColor = computed(() => this.isLiked() ? '#ef4444' : '#8892b0');

  toggleLike(event: Event) {
    event.stopPropagation();
    this.isLiked.update(v => !v);
    
    // Animate heart
    if (this.isLiked()) {
      this.heartScale.set(1.3);
      setTimeout(() => this.heartScale.set(1.2), 100);
    } else {
      this.heartScale.set(0.9);
      setTimeout(() => this.heartScale.set(1), 100);
    }
  }
}
