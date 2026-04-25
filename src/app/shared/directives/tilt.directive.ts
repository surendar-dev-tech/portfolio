import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit {
  @Input() tiltMax = 15;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Enable 3d transforms
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform-style', 'preserve-3d');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation percentage (-1 to 1)
    const rotateX = ((y - centerY) / centerY) * -this.tiltMax;
    const rotateY = ((x - centerX) / centerX) * this.tiltMax;
    
    this.renderer.setStyle(el, 'transform', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'transition', 'transform 0.5s ease-out');
    this.renderer.setStyle(el, 'transform', `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    
    // Reset transition after animation
    setTimeout(() => {
      this.renderer.setStyle(el, 'transition', 'transform 0.1s ease-out');
    }, 500);
  }
}
