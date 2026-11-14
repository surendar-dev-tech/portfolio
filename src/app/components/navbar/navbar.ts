import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  activeSection = '';
  isMobileMenuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['projects', 'skills', 'experience', 'contact'];
    let current = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }

    if (current !== this.activeSection) {
      this.activeSection = current;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
