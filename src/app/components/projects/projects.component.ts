import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Subscription } from 'rxjs';

export interface Projeto {
  nome: string;
  imagemUrl: string;
  descricao: string;
  topics: string[];
  urlProjeto?: string;
  urlCodigo: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(private cdr: ChangeDetectorRef, private github: GithubService) {}
  projetosRecentes: Projeto[] = [];
  private subscription: Subscription = new Subscription();

  projetos: Projeto[] = [
    {
      nome: 'Pokedéx',
      imagemUrl: '/assets/pokedex.png',
      descricao: 'Primeiríssimo projeto. Simples mas mora no meu ❤️',
      topics: ['HTML', 'CSS', 'JavaScript'],
      urlProjeto: 'https://daaaiii.github.io/Pokedex/',
      urlCodigo: 'https://github.com/Daaaiii/Pokedex',
    },
    {
      nome: 'PDV-PowerPuffGirls',
      imagemUrl: '/assets/powerpuff.png',
      descricao:
        'Projeto Backend desenvolvido em equipe para conclusão do curso de Backend da Cubos Academy',
      topics: [
        'JavaScript',
        'Nodejs',
        'Express',
        'Postman',
        'PostgreSQL',
        'Knex',
        'Swagger',
        'JWT',
        'AWS sdk',
        'Multer',
        'Nodemailer',
        'Joi',
        'Handlebars',
      ],
      urlProjeto: 'https://faithful-bonnet-elk.cyclic.app/doc/',
      urlCodigo: 'https://github.com/Daaaiii/PDV-PowerPuffGirls',
    },
    {
      nome: 'Aprove-me',
      imagemUrl: '/assets/logo-bankme.png',
      descricao: 'Projeto Full Stack',
      topics: [
        'TypeScript',
        'Nodejs',
        'Nestjs',
        'Postman',
        'PostgreSQL',
        'Prisma',
        'Swagger',
        'JWT',
        'React',
        'Nextjs',
      ],
      urlProjeto: 'https://aprove-me.vercel.app/',
      urlCodigo: 'https://github.com/Daaaiii/aprove-me',
    },
  ];

  ngOnInit() {
    this.subscription.add(
      this.github.getProjects().subscribe({
        next: (projetos: Projeto[]) => {
          this.projetosRecentes = projetos;
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Erro ao buscar repositórios:', err),
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
