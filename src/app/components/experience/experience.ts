import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  id: string;
  type: 'work' | 'education' | 'certification';
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  bulletPoints: string[];
  techTags: string[];
  metrics: { label: string; value: string }[];
  keyArchitectureDecisions?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
  activeTypeFilter: 'all' | 'work' | 'education' = 'all';
  expandedItems: { [id: string]: boolean } = {
    'softtwig': true // Open by default to showcase impact
  };

  timeline: TimelineItem[] = [
    {
      id: 'softtwig',
      type: 'work',
      role: 'Java Full Stack Developer',
      organization: 'Softtwig Technology Solutions',
      period: 'April 2025 — Present',
      location: 'Chennai, Tamil Nadu',
      summary: 'Architecting distributed Spring Boot microservices, high-throughput MariaDB persistence, and responsive Angular SPAs for enterprise client platforms.',
      bulletPoints: [
        'Architected 30+ secure Spring Boot REST microservices for pricing, invoicing, and sales workflows.',
        'Implemented Spring Cloud Gateway with JWT stateless authentication and granular RBAC authorization.',
        'Engineered responsive Angular SPA screens, improving page speed by ~30% with reactive forms.',
        'Configured RabbitMQ asynchronous messaging pipelines for automated invoice generation.'
      ],
      techTags: ['Java 17', 'Spring Boot 3', 'Angular', 'MariaDB', 'RabbitMQ', 'JWT', 'REST APIs', 'Docker'],
      metrics: [
        { label: 'Microservices', value: '30+' },
        { label: 'DB Query Latency', value: '-45%' },
        { label: 'Page Load Speed', value: '+30%' },
        { label: 'SLA Uptime', value: '99.9%' }
      ],
      keyArchitectureDecisions: [
        'Adopted Spring Cloud Gateway + OncePerRequestFilter for centralized token validation before traffic reaches downstream domain microservices.',
        'Separated compute-heavy PDF and GST invoice rendering into an asynchronous RabbitMQ queue worker, preventing HTTP gateway timeouts.',
        'Configured MariaDB composite indexing and HikariCP connection tuning to support high-concurrency peak sales periods.'
      ]
    },
    {
      id: 'techietact',
      type: 'certification',
      role: 'Java Full Stack Developer Certification',
      organization: 'Techietact Solutions',
      period: '2023 — 2024',
      location: 'Tamil Nadu, India',
      summary: 'Completed comprehensive industry training across full-stack Java engineering, architectural patterns, and database design.',
      bulletPoints: [
        'Intensive hands-on training across enterprise Java, Spring Boot, Hibernate ORM, and relational databases.',
        'Developed end-to-end RESTful web services with JUnit test coverage and Angular SPA integration.'
      ],
      techTags: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Angular', 'MySQL', 'REST APIs', 'Git'],
      metrics: [
        { label: 'Curriculum Focus', value: 'Enterprise Java' },
        { label: 'Projects Built', value: '4 Full-Stack' },
        { label: 'Test Coverage', value: 'JUnit & REST' }
      ]
    },
    {
      id: 'mca',
      type: 'education',
      role: 'Master of Computer Applications (MCA)',
      organization: 'Mohamed Sathak College of Arts and Science',
      period: '2023 — 2025 | CGPA: 7.96',
      location: 'Chennai, Tamil Nadu',
      summary: 'Postgraduate computer science degree with academic focus on distributed computing, algorithms, database normalization, and system architecture.',
      bulletPoints: [
        'Specialized in Advanced Java, Distributed Systems, Relational Database Architecture, and Data Structures.',
        'Graduated with distinction with a cumulative CGPA of 7.96 / 10.0.'
      ],
      techTags: ['Enterprise Computing', 'Database Systems', 'Distributed Architecture', 'Algorithms'],
      metrics: [
        { label: 'Cumulative CGPA', value: '7.96 / 10' },
        { label: 'Degree Distinction', value: 'First Class' },
        { label: 'Specialization', value: 'Advanced Software' }
      ]
    }
  ];

  get filteredTimeline(): TimelineItem[] {
    if (this.activeTypeFilter === 'all') {
      return this.timeline;
    }
    if (this.activeTypeFilter === 'work') {
      return this.timeline.filter(t => t.type === 'work');
    }
    return this.timeline.filter(t => t.type === 'education' || t.type === 'certification');
  }

  isExpanded(id: string): boolean {
    return !!this.expandedItems[id];
  }

  toggleExpand(id: string) {
    this.expandedItems[id] = !this.expandedItems[id];
  }

  expandAll() {
    this.timeline.forEach(t => this.expandedItems[t.id] = true);
  }

  collapseAll() {
    this.expandedItems = {};
  }
}
