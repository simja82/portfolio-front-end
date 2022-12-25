import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { BloopersComponent } from './pages/bloopers/bloopers.component';
import { AudiovisualComponent } from './pages/audiovisual/audiovisual.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { CVComponent } from './pages/cv/cv.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { PlusComponent } from './pages/plus/plus.component';
import { LinksComponent } from './pages/links/links.component';
import { ProjectComponent } from './pages/project/project.component';
import { DataComponent } from './pages/data/data.component';
import { BlackComponent } from './components/navbar/logo/black/black.component';
import { WhiteComponent } from './components/navbar/logo/white/white.component';
import { GeneralComponent } from './components/sidebars/right/general/general.component';
import { CameraComponent } from './components/sidebars/left/camera/camera.component';
import { CodeComponent } from './components/sidebars/left/code/code.component';
import { BackComponent } from './components/footer/left/black/back/back.component';
import { BugComponent } from './components/footer/right/white/bug/bug.component';
import { FastForwardComponent } from './components/footer/right/white/fast-forward/fast-forward.component';
import { MinibioComponent } from './modals/audiovisual/minibio/minibio.component';
import { IWantComponent } from './modals/audiovisual/i-want/i-want.component';
import { MyWorkComponent } from './modals/audiovisual/my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ErrorComponent,
    CreditsComponent,
    BloopersComponent,
    AudiovisualComponent,
    DeveloperComponent,
    CVComponent,
    ProjectsComponent,
    SamplesComponent,
    PlusComponent,
    LinksComponent,
    ProjectComponent,
    DataComponent,
    BlackComponent,
    WhiteComponent,
    GeneralComponent,
    CameraComponent,
    CodeComponent,
    BackComponent,
    BugComponent,
    FastForwardComponent,
    MinibioComponent,
    IWantComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
