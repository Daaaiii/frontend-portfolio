import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Habilidade {
  nome: string;
  icone: string;
  id: string;
}

@Component({
  selector: 'app-habilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.css',
})
export class HabilitiesComponent {
  habilidadesBackend: Habilidade[] = [
    { nome: 'JavaScript', icone: 'devicon-javascript-plain', id: 'javascript' },
    { nome: 'Typescript', icone: 'devicon-typescript-plain', id: 'typescript' },
    { nome: 'Node.js', icone: 'devicon-nodejs-plain', id: 'nodejs' },
    { nome: 'Nest.js', icone: 'devicon-nestjs-plain', id: 'nestjs' },
    { nome: 'Express', icone: 'devicon-express-original', id: 'express' },
    { nome: 'C#', icone: 'devicon-csharp-plain', id: 'csharp' },
    { nome: 'Python', icone: 'devicon-python-plain', id: 'python' },
    { nome: 'Java', icone: 'devicon-java-plain', id: 'java' },
    { nome: 'Spring', icone: 'devicon-spring-plain', id: 'spring' },
  ];
  habilidadesFrontend: Habilidade[] = [
    { nome: 'Vue.js', icone: 'devicon-vuejs-plain', id: 'vue' },
    { nome: 'Angular', icone: 'devicon-angularjs-plain', id: 'angular' },
    { nome: 'React.js', icone: 'devicon-react-original', id: 'react' },
    { nome: 'Redux', icone: 'devicon-redux-original', id: 'redux' },
    { nome: 'Next.js', icone: 'devicon-nextjs-original', id: 'nextjs' },
    { nome: 'Bootstrap', icone: 'devicon-bootstrap-plain', id: 'bootstrap' },
    { nome: 'Tailwind', icone: 'devicon-tailwindcss-original-wordmark', id: 'tailwind' },
    { nome: 'HTML5', icone: 'devicon-html5-plain-wordmark', id: 'html' },
    { nome: 'CSS3', icone: 'devicon-css3-plain-wordmark', id: 'css' },
  ];
  outrasHabilidades: Habilidade[] = [
    { nome: 'Docker', icone: 'devicon-docker-plain', id: 'docker' },
    { nome: 'GitHub', icone: 'devicon-github-original', id: 'github' },
    { nome: 'Git', icone: 'devicon-git-plain', id: 'git' },
    { nome: 'Jest', icone: 'devicon-jest-plain', id: 'jest' },
    { nome: 'Bash', icone: 'devicon-bash-plain', id: 'bash' },
    { nome: 'Eslint', icone: 'devicon-eslint-plain', id: 'eslint' },
    { nome: 'Figma', icone: 'devicon-figma-plain', id: 'figma' },
    { nome: 'Jira', icone: 'devicon-jira-plain', id: 'jira' },
    { nome: 'NPM', icone: 'devicon-npm-original-wordmark', id: 'npm' },
    { nome: 'VSCode', icone: 'devicon-vscode-plain', id: 'vscode' },

  ];
  db: Habilidade[] = [
    { nome: 'MongoDB', icone: 'devicon-mongodb-plain', id: 'mongodb' },
    { nome: 'MySQL', icone: 'devicon-mysql-plain', id: 'mysql' },
    { nome: 'sqlite', icone: 'devicon-sqlite-plain', id: 'sqlite' },
    { nome: 'PostgreSQL', icone: 'devicon-postgresql-plain', id: 'postgresql' },
  ]
}
