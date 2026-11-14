import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ProjectShowcase {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: 'all' | 'fullstack' | 'microservices' | 'enterprise';
  categoryLabel: string;
  role: string;
  architecture: string;
  image?: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  endpoints: { method: string; path: string; desc: string; sampleResponse?: string }[];
  challenges: string;
  archDetails: { layer: string; detail: string }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  selectedCategory: string = 'all';
  searchQuery: string = '';
  activeLightboxImg: string | null = null;
  activeProjectModal: ProjectShowcase | null = null;

  // Active tab per project: 'overview' | 'architecture' | 'endpoints'
  projectTabs: { [id: string]: 'overview' | 'architecture' | 'endpoints' } = {};
  copiedCurlMap: { [endpointKey: string]: boolean } = {};

  projects: ProjectShowcase[] = [
    {
      id: 'joboptima',
      num: '01',
      title: 'JobOptima',
      subtitle: 'Career Transition & Recruitment Platform',
      category: 'fullstack',
      categoryLabel: 'Full-Stack',
      role: 'Full-Stack Software Engineer',
      architecture: 'Angular 20 Standalone + Spring Boot 3 + MariaDB',
      image: 'Job Transition Assistant.png',
      summary: 'Enterprise career recruitment platform bridging candidates with hiring employers through isolated role-based portals and automated application tracking.',
      highlights: [
        'Spring Security 6 with stateless JWT session management and RBAC',
        'Sub-100ms talent matching queries with indexed MariaDB schemas',
        'Multi-step reactive forms with dynamic resume upload validation'
      ],
      techStack: ['Angular 20', 'Spring Boot 3', 'Spring Security', 'MariaDB', 'JWT', 'REST APIs'],
      repoUrl: 'https://github.com/surendar-dev-tech',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          desc: 'Authenticates candidates and employers; issues stateless Bearer JWT',
          sampleResponse: '{\n  "token": "eyJhbGciOiJIUzI1NiIsInR5...",\n  "role": "ROLE_CANDIDATE",\n  "expiresIn": 86400\n}'
        },
        {
          method: 'GET',
          path: '/api/v1/jobs/search',
          desc: 'Filtered query matching titles and skills with composite MariaDB indexes',
          sampleResponse: '{\n  "totalElements": 24,\n  "page": 0,\n  "jobs": [\n    { "title": "Java Engineer", "match": "96%" }\n  ]\n}'
        },
        {
          method: 'POST',
          path: '/api/v1/applications/apply',
          desc: 'Multi-part candidate resume submission with file format validation',
          sampleResponse: '{\n  "applicationId": "APP-2025-09",\n  "status": "UNDER_REVIEW"\n}'
        }
      ],
      challenges: 'Designed fine-grained Spring Security MethodSecurity (@PreAuthorize) so employers only access candidate data submitted to their specific job requisitions.',
      archDetails: [
        { layer: 'Frontend Tier', detail: 'Angular 20 Standalone Components with RxJS Reactive Forms & JWT Interceptor' },
        { layer: 'Security Filter', detail: 'OncePerRequestFilter validating Bearer tokens against Redis/Memory blacklist' },
        { layer: 'Data Tier', detail: 'MariaDB 11.2 with B-Tree composite indexes on (category_id, experience_years)' }
      ]
    },
    {
      id: 'mysaleza',
      num: '02',
      title: 'Enterprise CRM Platform (MySaleza)',
      subtitle: 'Sales Order Automation & Dynamic Payment Links',
      category: 'enterprise',
      categoryLabel: 'Enterprise CRM',
      role: 'Backend & Database Architect',
      architecture: 'Spring Boot Microservices + RabbitMQ + MariaDB',
      image: 'mysaleza.png',
      summary: 'B2B sales management portal automating quotation pipelines, GST-compliant invoicing, dynamic payment links, and webhook revenue reconciliation.',
      highlights: [
        'Automated payment link generation and signature verification',
        'Decoupled microservices communicating asynchronously via RabbitMQ',
        'Optimized JPA/Hibernate queries reducing database latency by 45%'
      ],
      techStack: ['Spring Boot', 'Microservices', 'RabbitMQ', 'MariaDB', 'Payment Webhooks', 'JPA/Hibernate'],
      repoUrl: 'https://github.com/surendar-dev-tech',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/invoices/payment-link',
          desc: 'Dispatches dynamic payment links with HMAC-SHA256 signature tokens',
          sampleResponse: '{\n  "invoiceNumber": "INV-2025-441",\n  "paymentUrl": "https://pay.gateway.com/p/89x2",\n  "amountDue": 145000.00\n}'
        },
        {
          method: 'POST',
          path: '/api/v1/payments/webhook',
          desc: 'Reconciles payment gateway callbacks with idempotent signature verification',
          sampleResponse: '{\n  "status": "RECONCILED",\n  "credited": true,\n  "ledgerRef": "LDG-8821"\n}'
        },
        {
          method: 'GET',
          path: '/api/v1/leads/pipeline-velocity',
          desc: 'Aggregated conversion rates and sales rep commission velocity metrics',
          sampleResponse: '{\n  "totalActiveDeals": 142,\n  "weightedPipelineValue": "₹42,80,000"\n}'
        }
      ],
      challenges: 'Handled high-volume concurrent invoice generation using optimistic locking (@Version) and idempotent webhook reconciliation to eliminate double-crediting.',
      archDetails: [
        { layer: 'Messaging Bus', detail: 'RabbitMQ exchange routing order.placed events to automated PDF invoice generator' },
        { layer: 'Concurrency', detail: 'JPA @Version optimistic locking preventing conflicting invoice status mutations' },
        { layer: 'Database Tuning', detail: 'HikariCP connection pool tuned to max 25 connections for sub-12ms queries' }
      ]
    },
    {
      id: 'myshop',
      num: '03',
      title: 'MyShop & Urban Bloom',
      subtitle: 'B2B Wholesale Apparel E-Commerce Platform',
      category: 'fullstack',
      categoryLabel: 'Full-Stack',
      role: 'Full-Stack Architect',
      architecture: 'Angular 20 SPA + Spring Boot REST APIs',
      image: 'Myshop.png',
      summary: 'High-conversion B2B wholesale platform for apparel manufacturers, featuring real-time bulk tier pricing calculations and direct catalogue requests.',
      highlights: [
        'Dynamic volume discount engine for wholesale bulk tiers',
        'Responsive mobile drawer and touch-friendly controls',
        'Integrated catalogue request modal connected to Spring Boot REST'
      ],
      techStack: ['Angular 20', 'Spring Boot', 'SCSS Tokens', 'Reactive Forms', 'REST APIs'],
      repoUrl: 'https://github.com/surendar-dev-tech',
      liveUrl: 'https://invenza-app.netlify.app',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/enquiries/quote',
          desc: 'Calculates dynamic volume discount tiers in real-time based on quantity',
          sampleResponse: '{\n  "sku": "UB-OVERSIZE-240",\n  "tierApplied": "Tier 3 (200-500 pcs)",\n  "netUnitPrice": 285.00\n}'
        },
        {
          method: 'POST',
          path: '/api/v1/catalogue/request',
          desc: 'Triggers instant digital wholesale lookbook PDF dispatch to buyer email',
          sampleResponse: '{\n  "dispatched": true,\n  "recipient": "buyer@apparel.com"\n}'
        },
        {
          method: 'GET',
          path: '/api/v1/products/categories',
          desc: 'Fetches apparel taxonomies: Oversized T-Shirts, Polos, Custom Branding',
          sampleResponse: '[\n  { "name": "Oversized", "gsm": [220, 240] },\n  { "name": "Polo", "fabric": "Matty Cotton" }\n]'
        }
      ],
      challenges: 'Engineered an interactive reactive pricing matrix that dynamically calculates wholesale discount rates with zero horizontal overflow on mobile viewports.',
      archDetails: [
        { layer: 'UI Architecture', detail: 'Angular Standalone structure with modular feature components and SCSS tokens' },
        { layer: 'State & Cache', detail: 'In-memory client caching of category taxonomies to prevent repeated REST calls' },
        { layer: 'Backend Service', detail: 'Spring Boot REST controller with Jakarta validation on all quote payloads' }
      ]
    },
    {
      id: 'pico-united',
      num: '04',
      title: 'Pico United',
      subtitle: 'Dockerized Microservices on Production Linux VPS',
      category: 'microservices',
      categoryLabel: 'Microservices',
      role: 'Backend & DevOps Engineer',
      architecture: 'Docker Multi-Stage + Nginx Proxy + Linux VPS',
      summary: 'Containerized microservices deployed on an independent Ubuntu Linux VPS behind an Nginx reverse proxy gateway with automated SSL.',
      highlights: [
        'Minimal multi-stage Dockerfiles reducing image footprint by 65%',
        'Nginx reverse proxy with SSL termination and gzip compression',
        'Automated shell scripts for zero-downtime updates'
      ],
      techStack: ['Docker Engine', 'Linux VPS', 'Nginx', 'Spring Boot 3', 'MariaDB', 'Bash'],
      repoUrl: 'https://github.com/surendar-dev-tech',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/health',
          desc: 'Microservice node health probe reporting JVM heap, CPU, and DB status',
          sampleResponse: '{\n  "status": "UP",\n  "diskSpace": "18.2GB Free",\n  "jvmHeap": "184MB / 512MB"\n}'
        },
        {
          method: 'POST',
          path: '/api/v1/services/orchestrate',
          desc: 'Isolated bridge container routing and health monitoring triggers',
          sampleResponse: '{\n  "containersHealthy": 4,\n  "network": "pico-internal-bridge"\n}'
        }
      ],
      challenges: 'Configured Docker volume persistence, automated cron database dumps, and Nginx rate limiting to ensure uninterrupted service availability on a self-hosted VPS.',
      archDetails: [
        { layer: 'Docker Optimization', detail: 'Multi-stage builds using Eclipse Temurin JRE 17 reducing images from 450MB to 160MB' },
        { layer: 'Reverse Proxy', detail: 'Nginx SSL termination with HTTP/2 and gzip compression on all JSON responses' },
        { layer: 'Cron Automation', detail: 'Automated nightly mysqldump scripts with 14-day retention cycle' }
      ]
    }
  ];

  get filteredProjects(): ProjectShowcase[] {
    return this.projects.filter(p => {
      const matchesCategory = this.selectedCategory === 'all' || p.category === this.selectedCategory;
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }

  getProjectTab(id: string): 'overview' | 'architecture' | 'endpoints' {
    return this.projectTabs[id] || 'overview';
  }

  setProjectTab(id: string, tab: 'overview' | 'architecture' | 'endpoints') {
    this.projectTabs[id] = tab;
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  copyCurl(endpointKey: string, method: string, path: string) {
    const curlCmd = `curl -X ${method} https://api.surendar.dev${path} -H "Authorization: Bearer <TOKEN>"`;
    navigator.clipboard.writeText(curlCmd).then(() => {
      this.copiedCurlMap[endpointKey] = true;
      setTimeout(() => {
        this.copiedCurlMap[endpointKey] = false;
      }, 2000);
    });
  }

  openLightbox(event: Event, img: string) {
    event.stopPropagation();
    this.activeLightboxImg = img;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.activeLightboxImg = null;
    if (!this.activeProjectModal) {
      document.body.style.overflow = 'auto';
    }
  }

  openSpecsModal(event: Event, proj: ProjectShowcase) {
    event.stopPropagation();
    this.activeProjectModal = proj;
    document.body.style.overflow = 'hidden';
  }

  closeSpecsModal() {
    this.activeProjectModal = null;
    document.body.style.overflow = 'auto';
  }
}
