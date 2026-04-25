import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  standalone: true, 
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  titles: string[] = [
    "JAVA FULL STACK DEVELOPER",
    "ENTERPRISE SOFTWARE ENGINEER",
    "ANGULAR & SPRING BOOT EXPERT"
  ];
  currentTitle = "";
  titleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  private typingInterval: any;

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearTimeout(this.typingInterval);
  }

  typeEffect() {
    const currentFullTitle = this.titles[this.titleIndex];
    
    if (this.isDeleting) {
      this.currentTitle = currentFullTitle.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 50; // delete faster
    } else {
      this.currentTitle = currentFullTitle.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100; // type normal
    }

    if (!this.isDeleting && this.charIndex === currentFullTitle.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // pause at end
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.typingSpeed = 500; // pause before next word
    }

    this.typingInterval = setTimeout(() => this.typeEffect(), this.typingSpeed);
  }
}