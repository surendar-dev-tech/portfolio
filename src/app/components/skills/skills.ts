import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SkillItem {
  name: string;
  tag: string;
  proficiency: string;
  years: string;
  usageDescription: string;
  linkedProjects: string[];
}

export interface TechCategory {
  id: string;
  num: string;
  category: string;
  subheading: string;
  items: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  activeCategoryFilter: string = 'all';
  skillSearchQuery: string = '';
  selectedSkill: SkillItem | null = null;

  categories: TechCategory[] = [
    {
      id: 'backend',
      num: '01',
      category: 'Backend & Server Runtime',
      subheading: 'Spring Boot 3, Java, and Distributed APIs',
      items: [
        {
          name: 'Java 17 / 21',
          tag: 'Language',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Core language for enterprise microservices, OOP design patterns, Streams API, Records, and multithreading.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)', 'Pico United']
        },
        {
          name: 'Spring Boot 3.x',
          tag: 'Framework',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Architected microservices, REST controllers, dependency injection, and auto-configuration on Spring Boot 3.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)', 'MyShop & Urban Bloom']
        },
        {
          name: 'Spring Cloud Gateway',
          tag: 'Microservices',
          proficiency: 'Proficient',
          years: '1+ Years',
          usageDescription: 'Configured API Gateway routing, request rate-limiting, CORS policies, and centralized auth filtering.',
          linkedProjects: ['Enterprise CRM (MySaleza)', 'Pico United']
        },
        {
          name: 'Spring Security 6',
          tag: 'Auth & RBAC',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Implemented SecurityFilterChain, JWT authentication filters, and @PreAuthorize method-level RBAC.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)']
        },
        {
          name: 'JWT & OAuth2',
          tag: 'Security',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Engineered stateless bearer token issuance, signature validation, and refresh token rotation pipelines.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)']
        },
        {
          name: 'RESTful Architecture',
          tag: 'APIs',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Designed 50+ REST endpoints adhering to idempotent HTTP verbs, status code contracts, and JSON standards.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)', 'MyShop & Urban Bloom']
        },
        {
          name: 'RabbitMQ',
          tag: 'Messaging',
          proficiency: 'Proficient',
          years: '1+ Years',
          usageDescription: 'Decoupled asynchronous billing events, order notification workers, and invoice PDF dispatch queues.',
          linkedProjects: ['Enterprise CRM (MySaleza)']
        },
        {
          name: 'Maven',
          tag: 'Build',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Managed multi-module project POMs, dependency scopes, plugins, and clean production build artifacts.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)', 'Pico United']
        }
      ]
    },
    {
      id: 'frontend',
      num: '02',
      category: 'Frontend Engineering',
      subheading: 'Angular, Reactive State, and Modern CSS',
      items: [
        {
          name: 'Angular 20 Standalone',
          tag: 'Framework',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Built modern SPAs using standalone components, Angular routing, view encapsulation, and signals.',
          linkedProjects: ['JobOptima', 'MyShop & Urban Bloom', 'Surendar Portfolio']
        },
        {
          name: 'TypeScript',
          tag: 'Language',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Utilized strict typing, generic interfaces, type guards, and enums across all frontend data contracts.',
          linkedProjects: ['JobOptima', 'MyShop & Urban Bloom']
        },
        {
          name: 'RxJS & Observables',
          tag: 'Reactive',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Handled asynchronous event streams, pipe operators (switchMap, debounceTime), and HTTP subscriptions.',
          linkedProjects: ['JobOptima', 'MyShop & Urban Bloom']
        },
        {
          name: 'Reactive Forms',
          tag: 'Validation',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Engineered dynamic multi-step forms with custom asynchronous validators and real-time sanitization.',
          linkedProjects: ['JobOptima', 'MyShop & Urban Bloom']
        },
        {
          name: 'SCSS & Design Tokens',
          tag: 'Styling',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Structured maintainable SCSS variables, responsive mixins, and design tokens for clean UI consistency.',
          linkedProjects: ['MyShop & Urban Bloom', 'Surendar Portfolio']
        },
        {
          name: 'Responsive Layouts',
          tag: 'Mobile-First',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Engineered fluid responsive layouts with zero horizontal scroll across mobile, tablet, and ultra-wide screens.',
          linkedProjects: ['MyShop & Urban Bloom', 'JobOptima']
        },
        {
          name: 'Bootstrap 5',
          tag: 'Grid',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Leveraged 12-column flexbox grid, utilities, modal dialogs, and responsive navigation components.',
          linkedProjects: ['JobOptima', 'MyShop & Urban Bloom']
        },
        {
          name: 'HTML5 Semantic',
          tag: 'Standards',
          proficiency: 'Advanced',
          years: '3+ Years',
          usageDescription: 'Authored semantic accessible DOM structures with proper ARIA attributes, landmarks, and SEO metadata.',
          linkedProjects: ['MyShop & Urban Bloom', 'JobOptima']
        }
      ]
    },
    {
      id: 'database',
      num: '03',
      category: 'Database & Persistence',
      subheading: 'MariaDB, MySQL, and High-Throughput JPA',
      items: [
        {
          name: 'MariaDB',
          tag: 'RDBMS',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Primary production RDBMS: designed schema normalization, foreign keys, and high-concurrency InnoDB engines.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)', 'Pico United']
        },
        {
          name: 'MySQL',
          tag: 'RDBMS',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Configured relational databases, user privileges, replication configurations, and automated SQL scripts.',
          linkedProjects: ['Techietact Projects', 'Enterprise CRM']
        },
        {
          name: 'PostgreSQL',
          tag: 'RDBMS',
          proficiency: 'Proficient',
          years: '1+ Years',
          usageDescription: 'Experience with ACID transactions, JSONB columns, sequences, and relational constraints.',
          linkedProjects: ['Softtwig Research']
        },
        {
          name: 'JPA / Hibernate ORM',
          tag: 'Data Tier',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Modeled complex @OneToMany/@ManyToMany mappings, solved N+1 query issues with fetch joins, and tuned batch sizes.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)']
        },
        {
          name: 'SQL Query Tuning',
          tag: 'Optimization',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Used EXPLAIN ANALYZE to eliminate full table scans, reducing database latency by 45% on CRM query loads.',
          linkedProjects: ['Enterprise CRM (MySaleza)']
        },
        {
          name: 'Composite Indexing',
          tag: 'Indexing',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Designed multi-column composite B-Tree indexes matching high-frequency search and filter patterns.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)']
        },
        {
          name: 'HikariCP Pool',
          tag: 'Connection',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Tuned connection pool sizes, idle timeouts, and max lifetime to prevent connection starvation.',
          linkedProjects: ['JobOptima', 'Enterprise CRM (MySaleza)']
        },
        {
          name: 'ACID Transactions',
          tag: 'Integrity',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Managed @Transactional boundaries, rollback rules, and isolation levels for sensitive financial operations.',
          linkedProjects: ['Enterprise CRM (MySaleza)']
        }
      ]
    },
    {
      id: 'infrastructure',
      num: '04',
      category: 'Infrastructure & DevOps',
      subheading: 'Containerization, VPS Host, and Web Servers',
      items: [
        {
          name: 'Docker Engine',
          tag: 'Containers',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Created multi-stage Dockerfiles, Docker Compose service meshes, volume mounts, and bridge networks.',
          linkedProjects: ['Pico United', 'Surendar VPS Deployments']
        },
        {
          name: 'Linux VPS (Ubuntu)',
          tag: 'OS',
          proficiency: 'Advanced',
          years: '2+ Years',
          usageDescription: 'Managed production Ubuntu VPS hosts: user permissions, systemd services, firewall (UFW), and swap memory.',
          linkedProjects: ['Pico United', 'Client VPS Hosts']
        },
        {
          name: 'Nginx Reverse Proxy',
          tag: 'Gateway',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Configured reverse proxy blocks, upstream load balances, SSL/TLS termination, and gzip compression.',
          linkedProjects: ['Pico United']
        },
        {
          name: 'HestiaCP Panel',
          tag: 'Server Ops',
          proficiency: 'Proficient',
          years: '1+ Years',
          usageDescription: 'Maintained DNS zones, mail servers, domain routing, and web domains on self-hosted control panels.',
          linkedProjects: ['VPS Server Management']
        },
        {
          name: 'Git & GitHub',
          tag: 'VCS',
          proficiency: 'Advanced',
          years: '3+ Years',
          usageDescription: 'Proficient in branching workflows, PR reviews, rebasing, semantic commit conventions, and GitHub Actions.',
          linkedProjects: ['All Repositories']
        },
        {
          name: 'SSL / TLS Config',
          tag: 'Security',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Installed and configured Let’s Encrypt automated Certbot SSL renewals for secure HTTPS traffic.',
          linkedProjects: ['Pico United', 'Production VPS']
        },
        {
          name: 'SSH & Bash',
          tag: 'Automation',
          proficiency: 'Proficient',
          years: '2+ Years',
          usageDescription: 'Authored shell scripts for automated database backups, log rotation, and server health monitoring.',
          linkedProjects: ['Pico United']
        },
        {
          name: 'AWS EC2 Deployment',
          tag: 'Cloud',
          proficiency: 'Working Knowledge',
          years: '1+ Years',
          usageDescription: 'Configured EC2 instances, security groups, elastic IPs, and deployed containerized applications.',
          linkedProjects: ['Cloud Infrastructure Experiments']
        }
      ]
    }
  ];

  get filteredCategories(): TechCategory[] {
    return this.categories
      .filter(cat => this.activeCategoryFilter === 'all' || cat.id === this.activeCategoryFilter)
      .map(cat => {
        const q = this.skillSearchQuery.toLowerCase().trim();
        if (!q) return cat;

        const matchingItems = cat.items.filter(item => 
          item.name.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q) ||
          item.usageDescription.toLowerCase().includes(q)
        );

        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter(cat => cat.items.length > 0);
  }

  get totalVisibleSkillsCount(): number {
    return this.filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }

  selectSkill(item: SkillItem) {
    this.selectedSkill = item;
  }

  closeSkillInspector() {
    this.selectedSkill = null;
  }
}
