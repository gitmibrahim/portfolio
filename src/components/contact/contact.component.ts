import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto w-full">
        <div 
          class="text-center"
          [style.opacity]="containerOpacity()"
          [style.transform]="containerTransform()">
          <p 
            class="text-green font-mono text-sm mb-4"
            [style.opacity]="subtitleOpacity()">
            06. What's Next?
          </p>
          
          <h2 
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            [style.opacity]="titleOpacity()"
            [style.transform]="titleTransform()">
            Get In Touch
          </h2>
          
          <p 
            class="text-slate mb-12 max-w-2xl mx-auto"
            [style.opacity]="descriptionOpacity()"
            [style.transform]="descriptionTransform()">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <form
            (ngSubmit)="handleSubmit($event)"
            class="max-w-lg mx-auto space-y-6"
            [style.opacity]="formOpacity()"
            [style.transform]="formTransform()">
            <div>
              <input
                type="text"
                placeholder="Name"
                [(ngModel)]="formData.name"
                name="name"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                [style.opacity]="inputOpacity(0)()"
                [style.transform]="inputTransform(0)()">
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                [(ngModel)]="formData.email"
                name="email"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                [style.opacity]="inputOpacity(1)()"
                [style.transform]="inputTransform(1)()">
            </div>
            <div>
              <textarea
                placeholder="Message"
                [(ngModel)]="formData.message"
                name="message"
                rows="6"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors resize-none"
                [style.opacity]="inputOpacity(2)()"
                [style.transform]="inputTransform(2)()">
              </textarea>
            </div>
            <button
              type="submit"
              class="border border-green text-green px-8 py-3 rounded font-mono text-sm hover:bg-green-tint transition-colors hover:scale-105"
              [style.opacity]="buttonOpacity()"
              [style.transform]="buttonTransform()">
              Send Message
            </button>
          </form>

          <div 
            class="mt-16"
            [style.opacity]="emailOpacity()">
            <a
              href="mailto:your.email@example.com"
              class="text-green font-mono text-sm hover:underline inline-flex items-center gap-2 hover:-translate-y-1 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Signal-based animations
  containerOpacity = signal(0);
  containerTransform = computed(() => `translateY(${50 * (1 - this.containerOpacity())}px)`);

  subtitleOpacity = signal(0);
  
  titleOpacity = signal(0);
  titleTransform = computed(() => `translateY(${20 * (1 - this.titleOpacity())}px)`);

  descriptionOpacity = signal(0);
  descriptionTransform = computed(() => `translateY(${20 * (1 - this.descriptionOpacity())}px)`);

  formOpacity = signal(0);
  formTransform = computed(() => `translateY(${20 * (1 - this.formOpacity())}px)`);

  inputOpacity = (index: number) => {
    const opacity = signal(0);
    setTimeout(() => opacity.set(1), 300 + index * 50);
    return opacity;
  };

  inputTransform = (index: number) => {
    const transform = signal('translateY(10px)');
    setTimeout(() => transform.set('translateY(0)'), 300 + index * 50);
    return transform;
  };

  buttonOpacity = signal(0);
  buttonTransform = computed(() => {
    const scale = 0.8 + (this.buttonOpacity() * 0.2);
    return `scale(${scale})`;
  });

  emailOpacity = signal(0);

  constructor() {
    setTimeout(() => {
      this.containerOpacity.set(1);
      this.subtitleOpacity.set(1);
      this.titleOpacity.set(1);
      this.descriptionOpacity.set(1);
      this.formOpacity.set(1);
      this.buttonOpacity.set(1);
      this.emailOpacity.set(1);
    }, 0);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // Handle form submission
  }
}
