import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ArchNodeDetail {
  id: string;
  name: string;
  subtitle: string;
  tech: string;
  metrics: string;
  specs: string[];
}

export interface ApiEndpointSample {
  method: string;
  path: string;
  description: string;
  status: number;
  latency: number;
  responseBody: any;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  isEmailCopied = false;
  emailAddress = 'kannansurendar70@gmail.com';
  heroViewMode: 'portrait' | 'architecture' = 'portrait';

  // Interactive Architecture State
  activeNodeId = 'gateway';
  isPinging = false;
  activeEndpointIndex = 0;
  copiedResponse = false;

  archNodes: ArchNodeDetail[] = [
    {
      id: 'client',
      name: 'Client Tier',
      subtitle: 'Modern Responsive SPA',
      tech: 'Angular 20 Standalone & TypeScript',
      metrics: 'First Paint < 0.6s • PWA Ready',
      specs: [
        'Component Signals & RxJS State',
        'Strict Type-Checking & Lazy Modules',
        'Mobile-First SCSS Responsive Design'
      ]
    },
    {
      id: 'gateway',
      name: 'API Gateway & Security',
      subtitle: 'Stateless Microservices Routing',
      tech: 'Spring Boot 3.x & Spring Security 6',
      metrics: 'Sub-50ms Response • 99.9% SLA',
      specs: [
        'Stateless JWT Token Bearer Validation',
        'Granular MethodSecurity (@PreAuthorize)',
        'CORS Configuration & Rate Limiting'
      ]
    },
    {
      id: 'db',
      name: 'Persistence Tier',
      subtitle: 'ACID Relational Storage',
      tech: 'MariaDB / MySQL & JPA Hibernate',
      metrics: 'HikariCP Pool • Sub-15ms Queries',
      specs: [
        'Composite B-Tree Query Indexing',
        'Optimistic Locking (@Version) for Invoices',
        'Second-Level Caching & Connection Pools'
      ]
    },
    {
      id: 'vps',
      name: 'Infrastructure & Ops',
      subtitle: 'Containerized Linux Host',
      tech: 'Ubuntu VPS • Docker • Nginx',
      metrics: 'Zero-Downtime Deploys • SSL Enabled',
      specs: [
        'Multi-Stage Minimal Docker Containers',
        'Nginx Reverse Proxy with Brotli/Gzip',
        'Automated Daily Cron Backup Dumps'
      ]
    }
  ];

  apiEndpoints: ApiEndpointSample[] = [
    {
      method: 'GET',
      path: '/api/v1/system/health',
      description: 'Gateway Telemetry & Microservices Health Probe',
      status: 200,
      latency: 21,
      responseBody: {
        status: "UP",
        service: "spring-cloud-gateway",
        timestamp: "2026-11-13T16:48:00Z",
        nodes: {
          authService: "HEALTHY (JWT active)",
          salesService: "HEALTHY (RabbitMQ connected)",
          persistence: "CONNECTED (MariaDB 11.2, latency 11ms)"
        },
        uptime: "99.94%"
      }
    },
    {
      method: 'POST',
      path: '/api/v1/invoices/quote',
      description: 'Real-time B2B Wholesale Pricing Calculation',
      status: 200,
      latency: 34,
      responseBody: {
        orderRef: "UB-8942-QUOTE",
        category: "Oversized Heavyweight T-Shirt (240 GSM)",
        quantity: 250,
        unitTierPrice: "₹290 / piece",
        bulkDiscount: "22% Applied",
        estimatedTurnaround: "3 Business Days"
      }
    },
    {
      method: 'GET',
      path: '/api/v1/jobs/talent-match',
      description: 'Candidate Requisition Matching Engine',
      status: 200,
      latency: 42,
      responseBody: {
        candidateId: "SK-2025-DEV",
        profile: "Surendar Kannan (Full-Stack Engineer)",
        skillsMatched: ["Java 17", "Spring Boot 3", "Angular 20", "MariaDB", "Docker"],
        fitScore: "98.5%",
        authorization: "ROLE_RECRUITER_VERIFIED"
      }
    }
  ];

  get activeNode(): ArchNodeDetail {
    return this.archNodes.find(n => n.id === this.activeNodeId) || this.archNodes[1];
  }

  get activeEndpoint(): ApiEndpointSample {
    return this.apiEndpoints[this.activeEndpointIndex];
  }

  copyEmail() {
    navigator.clipboard.writeText(this.emailAddress).then(() => {
      this.isEmailCopied = true;
      setTimeout(() => {
        this.isEmailCopied = false;
      }, 2500);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  }

  setViewMode(mode: 'portrait' | 'architecture') {
    this.heroViewMode = mode;
  }

  selectNode(nodeId: string) {
    this.activeNodeId = nodeId;
  }

  selectEndpoint(index: number) {
    this.activeEndpointIndex = index;
  }

  simulatePing() {
    this.isPinging = true;
    setTimeout(() => {
      this.isPinging = false;
    }, 600);
  }

  copyResponseJson() {
    const jsonStr = JSON.stringify(this.activeEndpoint.responseBody, null, 2);
    navigator.clipboard.writeText(jsonStr).then(() => {
      this.copiedResponse = true;
      setTimeout(() => {
        this.copiedResponse = false;
      }, 2000);
    });
  }
}
