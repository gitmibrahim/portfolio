import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { AnimationsShowcaseComponent } from '../components/animations-showcase/animations-showcase.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SocialLinksComponent } from '../components/social-links/social-links.component';
import { EmailSidebarComponent } from '../components/email-sidebar/email-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    AnimationsShowcaseComponent,
    SkillsComponent,
    ContactComponent,
    SocialLinksComponent,
    EmailSidebarComponent
  ],
  template: `
    <app-nav></app-nav>
    <app-social-links></app-social-links>
    <app-email-sidebar></app-email-sidebar>
    <main class="min-h-screen">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-animations-showcase></app-animations-showcase>
      <app-skills></app-skills>
      <app-contact></app-contact>
    </main>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
