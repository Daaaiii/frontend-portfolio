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

  projetosIniciais: Projeto[] = [
    {
      nome: 'Pokedéx',
      imagemUrl: '/assets/pokedex.png',
      descricao: 'Primeiríssimo projeto. Simples mas mora no meu ❤️',
      topics: ['HTML', 'CSS', 'JavaScript'],
      urlProjeto: 'https://daaaiii.github.io/Pokedex/',
      urlCodigo: 'https://github.com/Daaaiii/Pokedex',
    },    
  ];
  projetosCSharp: Projeto[] = [
    {
      nome: 'Auction',
      imagemUrl: '/assets/csharp.png',
      descricao: 'Projeto de um leilão',
      topics: ['C#'],
      urlCodigo: 'https://github.com/Daaaiii/RocketseatAuction',
    },
    {
      nome: 'Apollo Bank',
      imagemUrl: '/assets/apollo.jpg',
      descricao: 'Projeto de fintech desenvolvido com a equipe Apollo Coders',
      topics: [
        'C#',
        'ASP.NET',
        'Entity Framework',
        'SQL Server',
        'Swagger',
        'JWT',
      ],
      urlCodigo: 'https://github.com/Apollo-Coders/apollobank-backend',
    },
  ];
  projetosReact: Projeto[] = [
    {
      nome: 'Aprove-me',
      imagemUrl: '/assets/logo-bankme.png',
      descricao: 'Projeto Full Stack',
      topics: ['TypeScript', 'React', 'Nextjs'],
      urlProjeto: 'https://aprove-me.vercel.app/',
      urlCodigo: 'https://github.com/Daaaiii/aprove-me',
    },
    {
      nome: 'Divina Caneca',
      imagemUrl: '/assets/divinaCaneca.jpeg',
      descricao: 'Projeto FrontEnd de uma cerveijaria artesanal',
      topics: ['TypeScript', 'React', 'Nextjs'],
      urlProjeto: 'https://teste-aqui-dev.vercel.app/',
      urlCodigo: 'https://github.com/Daaaiii/teste-AquiDev',
    },
    {
      nome: 'FullStack Trips',
      imagemUrl: '',
      descricao: 'Projeto FrontEnd de uma empresa de viagens',
      topics: ['TypeScript', 'React', 'Nextjs'],
      urlCodigo: 'https://github.com/Daaaiii/fullstack-trips',
    },
    {
      nome: 'Dindin',
      imagemUrl: '',
      descricao: 'Projeto FrontEnd de um banco',
      topics: ['TypeScript', 'React', 'Nextjs'],
      urlCodigo: 'https://github.com/HandsOnMarcaJa/dindin-front',
      urlProjeto: '',
    },
  ];
  projetosAngular: Projeto[] = [
    {
      nome: 'Apollo Bank',
      imagemUrl: '/assets/apollo.jpg',
      descricao: 'Fintech desenvolvido em Angular com a equipe Apollo Coders',
      topics: ['Typescript', 'Angular', 'HTML', 'CSS'],
      urlCodigo: 'https://github.com/Apollo-Coders/ApolloBank',
      urlProjeto: 'https://apollo-bank.vercel.app/home',
    },
    {
      nome: 'Blog Angular',
      imagemUrl: '/assets/logo-bankme.png',
      descricao: 'Blog desenvolvido com Angular',
      topics: ['TypeScript', 'Angular', 'HTML', 'CSS'],
      urlCodigo: 'https://github.com/Daaaiii/blog-angular-diana',
    },
    {
      nome: 'Clone Buzzfeed',
      imagemUrl: '/assets/BuzzFeed.png',
      descricao: 'Clone do BuzzFeed desenvolvido em Angular',
      topics: ['Typescript', 'Angular', 'HTML', 'CSS'],
      urlCodigo: 'https://github.com/Daaaiii/projeto-buzzfeed',
    },
    {
      nome: 'Clone Playstation Store',
      imagemUrl: '/assets/playstation.png',
      descricao: 'Clone da PlayStation Store desenvolvido em Angular',
      topics: ['Typescript', 'Angular', 'HTML', 'CSS'],
      urlCodigo: 'https://github.com/Daaaiii/playstation-store',
      urlProjeto: 'https://daaaiii.github.io/playstation-store/',
    },
    {
      nome: 'Blog Angular',
      imagemUrl: '/assets/daiFamily.png',
      descricao: 'Blog desenvolvido em Angular',
      topics: ['Typescript', 'Angular', 'HTML', 'CSS'],
      urlCodigo: 'https://github.com/Daaaiii/angular-blog',
      urlProjeto: 'https://daaaiii.github.io/angular-blog/',
    },
  ];
  projetosJS: Projeto[] = [
    {
      nome: 'Aprove-me',
      imagemUrl: '/assets/logo-bankme.png',
      descricao: 'API desenvolvida com Nestjs',
      topics: [
        'Typescript',
        'Nestjs',
        'PostgreSQL',
        'Prisma',
        'Swagger',
        'JWT',
      ],
      urlCodigo: 'https://github.com/Daaaiii/backend-bankme',
    },
    {
      nome: 'Marca Já',
      imagemUrl: '/assets/logo-bankme.png',
      descricao:
        'API desenvolvida com Nestjs para marcação de consultas médicas',
      topics: [
        'Typescript',
        'Nestjs',
        'PostgreSQL',
        'Prisma',
        'Swagger',
        'JWT',
      ],
      urlCodigo: 'https://github.com/Marca-Ja/marca-jah',
      urlProjeto: 'https://marca-ja.onrender.com/',
    },
    {
      nome: 'PDV-PowerPuffGirls',
      imagemUrl: '/assets/powerpuff.png',
      descricao:
        'Projeto Backend desenvolvido em equipe para um PDV',
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
      nome: 'LoryBlu',
      imagemUrl: '/assets/logo-bankme.png',
      descricao: 'API desenvolvida com Nestjs com a equipe da  LoryBlu',
      topics: [
        'Typescript',
        'Nestjs',
        'PostgreSQL',
        'Prisma',
        'Swagger',
        'JWT',
      ],
      urlCodigo: 'https://github.com/loryblu/loryblu-api',
      urlProjeto: 'https://loryblu-homologation.onrender.com/#/',
    },
    {
      nome: 'Dindin',
      imagemUrl: '',
      descricao: 'API desenvolvida com Nestjs com a equipe HandsOnMarcaJa',
      topics: [
        'Typescript',
        'Nestjs',
        'PostgreSQL',
        'Prisma',
        'Swagger',
        'JWT',
      ],
      urlCodigo: 'https://github.com/HandsOnMarcaJa/dindin',
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
