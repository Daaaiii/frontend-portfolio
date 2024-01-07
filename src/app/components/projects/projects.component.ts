import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

interface Projeto {
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
  constructor(private cdr: ChangeDetectorRef) {}

  projetos: Projeto[] = [
    {
      nome: 'Pokedéx',
      imagemUrl: '/assets/pokedex.png',
      descricao:
        'Primeiríssimo projeto. Simples mas mora no meu ❤️',
      topics: ['HTML', 'CSS', 'JavaScript'],
      urlProjeto: 'https://daaaiii.github.io/Pokedex/',
      urlCodigo: 'https://github.com/Daaaiii/Pokedex',
    },
    {
      nome: 'PDV-PowerPuffGirls',
      imagemUrl: '/assets/powerpuff.png',
      descricao:
        'Projeto Backend desenvolvido em equipe para conclusão do curso de Backend da Cubos Academy',
        topics: ['JavaScript', 'Nodejs', 'Express', 'Postman', 'PostgreSQL', 'Knex', 'Swagger', 'JWT', 'AWS sdk', 'Multer', 'Nodemailer', 'Joi', 'Handlebars'],
      urlProjeto: 'https://faithful-bonnet-elk.cyclic.app/doc/',
      urlCodigo: 'https://github.com/Daaaiii/PDV-PowerPuffGirls',
    },
    {
      nome: 'Aprove-me',
      imagemUrl: '/assets/logo-bankme.png',
      descricao:
        'Projeto Full Stack',
        topics: ['TypeScript', 'Nodejs', 'Nestjs', 'Postman', 'PostgreSQL', 'Prisma', 'Swagger', 'JWT', 'React', 'Nextjs'],
      urlProjeto: 'https://aprove-me.vercel.app/',
      urlCodigo: 'https://github.com/Daaaiii/aprove-me',
    },
  ];

  projetosRecentes: Projeto[] = [];
  ngOnInit() {
    this.getProjects();
  }
  username: string = 'Daaaiii';
  url: string = `https://api.github.com/users/${this.username}/repos?sort=updated&direction=desc`;

  async getProjects() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();

      this.projetosRecentes = data.slice(0, 3).map((proj: any) => ({
        nome: proj.name,
        imagemUrl: 'assets/github.png',
        descricao: proj.description || 'Sem descrição disponível.',
        topics: proj.topics,
        urlProjeto: proj.homepage || 'Sem deploy disponível',
        urlCodigo: proj.html_url,
      }));
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    }
    this.cdr.detectChanges();
  }
}
