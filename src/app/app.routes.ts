import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'habilities',
    loadComponent: () =>
      import('./components/habilities/habilities.component').then(
        (m) => m.HabilitiesComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'stats',
    loadComponent: () =>
      import('./components/stats/stats.component').then(
        (m) => m.StatsComponent
      ),
  },
];
