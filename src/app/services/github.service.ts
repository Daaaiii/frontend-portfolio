import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../enviroment';
import { Projeto } from '../components/projects/projects.component';

export interface ProjetoGithub {
  name: string;
  description: string;
  topics: string[];
  homepage: string;
  html_url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  username: string = 'Daaaiii';
  url: string = `https://api.github.com/users/${this.username}/repos?sort=updated&direction=desc`;
  headers = new HttpHeaders({
    'Authorization': environment.token_github
  });

  getProjects(): Observable<Projeto[]> {
    return this.http.get<any>(this.url, {headers:this.headers}).pipe(
      map(response => {
        return response.slice(0,3).map((item:ProjetoGithub) =>
        ({
          nome: item.name,
          imagemUrl: 'assets/github.png',
          descricao: item.description,
          topics: item.topics,
          urlProjeto: item.homepage,
          urlCodigo: item.html_url
        })
        );
      })
    );
  }

}
