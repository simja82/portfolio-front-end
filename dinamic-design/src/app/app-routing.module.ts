import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './services/guard.guard';
import { FormsModule } from '@angular/forms';

import { AudiovisualComponent } from './pages/audiovisual/audiovisual.component';
import { BloopersComponent } from './pages/bloopers/bloopers.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataComponent } from './pages/data/data.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { ErrorComponent } from './pages/error/error.component';
import { IndexComponent } from './pages/index/index.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LinksComponent } from './pages/links/links.component';
import { LoginComponent } from './pages/login/login.component';
import { PlusComponent } from './pages/plus/plus.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RegisterComponent } from './pages/register/register.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { SerieComponent } from './components/sections/audiovisual/projects-series/serie/serie.component';
import { LongshotComponent } from './components/sections/audiovisual/projects-longshots/longshot/longshot.component';
import { OtherComponent } from './components/sections/audiovisual/projects-others/other/other.component';
import { ProofreaderComponent } from './pages/proofreader/proofreader.component';

const routes: Routes = [
  { path: '', component:IndexComponent },
  { path: 'intro', component:IntroComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'credits', component:CreditsComponent },
  { path: 'bloopers', component:BloopersComponent },
  { path: 'plus', component:PlusComponent },
  { path: 'audiovisual/intro', component:AudiovisualComponent },
  { path: 'audiovisual/projects', component:ProjectsComponent },
  { path: 'audiovisual/projects/series/serie/:id', component: SerieComponent },
  { path: 'audiovisual/projects/others/other/:id', component: OtherComponent },
  { path: 'audiovisual/projects/longshots/longshot/:id', component: LongshotComponent },
  { path: 'audiovisual/samples', component:SamplesComponent },
  { path: 'audiovisual/data', component:DataComponent },
  { path: 'audiovisual/links', component:LinksComponent },
  { path: 'developer/intro', component:DeveloperComponent },
  { path: 'admin/dashboard', component:DashboardComponent, /*canActivate:[GuardGuard]*/ },
  { path: 'proofreader', component:ProofreaderComponent},
  { path: '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
