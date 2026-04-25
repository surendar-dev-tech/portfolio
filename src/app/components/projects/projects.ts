import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltDirective } from '../../shared/directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  showImage = false;
  selectedImage = 'mysaleza.png';

  projects = [
    {
      title: 'MySaleza - CRM Management System',
      image: 'mysaleza.png',
      summary: 'Built a full-stack CRM platform for leads, customers, products, and sales workflows.',
      points: [
        '20+ REST APIs using Spring Boot',
        'JWT authentication and role-based authorization',
        'Optimized JPA query performance',
        'MariaDB relational schema with indexing'
      ],
      tags: ['Spring Boot', 'Angular', 'Microservices', 'JWT', 'MariaDB'],
      repo: 'https://github.com/surendar-dev-tech'
    },
    {
      title: 'Job Transition Assistant',
      image: 'Job Transition Assistant.png',
      summary: 'Built a secure platform to track learning, applications, and career transition activities.',
      points: [
        'Spring Security with RBAC',
        'Layered REST API architecture',
        'Dynamic Angular forms and validation',
        'Centralized exception responses'
      ],
      tags: ['Spring Security', 'REST API', 'Angular Forms', 'JWT'],
      repo: 'https://github.com/surendar-dev-tech'
    },
    {
      title: 'MyShop – Full Stack E-commerce Application',
      image: 'Myshop.png',
      summary: 'Built a full-stack e-commerce application with secure authentication, REST APIs, and production deployment.',
      points: [
      'Implemented JWT-based authentication using Spring Security',
      'Developed RESTful APIs with Spring Boot',
      'Integrated PostgreSQL database hosted on Render',
      'Deployed backend on Render and frontend on Netlify',
      'Configured environment variables for production setup'
  ],
  tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Angular', 'JWT', 'Render', 'Netlify'],
  repo: 'https://github.com/surendar-dev-tech/myshop',
  live: 'https://invenza-app.netlify.app'
}
  ];

  openImage(event: Event, image: string) {
    event.stopPropagation();
    this.selectedImage = image;
    this.showImage = true;
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.showImage = false;
    document.body.style.overflow = 'auto';
  }
}