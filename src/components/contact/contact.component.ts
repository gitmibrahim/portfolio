import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto w-full">
        <div 
          class="text-center"
          [@fadeInUp]="'in'">
          <p 
            class="text-green font-mono text-sm mb-4"
            [@fadeIn]="'in'">
            06. What's Next?
          </p>
          
          <h2 
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            [@fadeInUp]="'in'"
            [style.animation-delay.ms]="100">
            Get In Touch
          </h2>
          
          <p 
            class="text-slate mb-12 max-w-2xl mx-auto"
            [@fadeInUp]="'in'"
            [style.animation-delay.ms]="200">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <form
            (ngSubmit)="handleSubmit($event)"
            class="max-w-lg mx-auto space-y-6"
            [@formAnimation]="'in'"
            [style.animation-delay.ms]="300">
            <div>
              <input
                type="text"
                placeholder="Name"
                [(ngModel)]="formData.name"
                name="name"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                [@inputAnimation]="'in'">
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                [(ngModel)]="formData.email"
                name="email"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                [@inputAnimation]="'in'"
                [style.animation-delay.ms]="50">
            </div>
            <div>
              <textarea
                placeholder="Message"
                [(ngModel)]="formData.message"
                name="message"
                rows="6"
                required
                class="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors resize-none"
                [@inputAnimation]="'in'"
                [style.animation-delay.ms]="100">
              </textarea>
            </div>
            <button
              type="submit"
              class="border border-green text-green px-8 py-3 rounded font-mono text-sm hover:bg-green-tint transition-colors hover:scale-105"
              [@buttonAnimation]="'in'"
              [style.animation-delay.ms]="150">
              Send Message
            </button>
          </form>

          <div 
            class="mt-16"
            [@fadeIn]="'in'"
            [style.animation-delay.ms]="500">
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
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('formAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('inputAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // Handle form submission
  }
}
