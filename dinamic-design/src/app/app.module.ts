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
import { WhiteLogoComponent } from './components/navbar/logo/white/white.component';
import { CameraComponent } from './components/sidebars/left/camera/camera.component';
import { CodeComponent } from './components/sidebars/left/code/code.component';
import { BlackBackComponent } from './components/footer/left/black/back/back.component';
import { BugComponent } from './components/footer/right/white/bug/bug.component';
import { WhiteFastForwardComponent } from './components/footer/right/white/fast-forward/fast-forward.component';
import { BlackFastForwardComponent } from './components/footer/right/black/fast-forward/fast-forward.component';
import { MinibioComponent } from './modals/audiovisual/minibio/minibio.component';
import { IWantComponent } from './modals/audiovisual/i-want/i-want.component';
import { MyWorkComponent } from './modals/audiovisual/my-work/my-work.component';
import { WhitePlusComponent } from './components/sidebars/left/plus/white/white.component';
import { WhiteBackComponent } from './components/footer/left/white/back/back.component';
import { BlackSessionComponent } from './components/navbar/session/black/black.component';
import { WhiteSessionComponent } from './components/navbar/session/white/white.component';
import { BlackPlusComponent } from './components/sidebars/left/plus/black/black.component';
import { BlackLogoComponent } from './components/navbar/logo/black/black.component';
import { BlackGeneralComponent } from './components/sidebars/right/black/general/black-general/black-general.component';
import { WhiteGeneralComponent } from './components/sidebars/right/white/general/white-general/white-general.component';
import { WhiteAudiovisualComponent } from './components/sidebars/right/black/audiovisual/white-audiovisual/white-audiovisual.component';
import { WhiteFooterPlusComponent } from './components/footer/right/white/plus/plus.component';
import { DeveloperIntroComponent } from './components/sections/developer/developer-intro/developer-intro.component';
import { DeveloperProfileComponent } from './components/sections/developer/developer-profile/developer-profile.component';
import { DeveloperEducationComponent } from './components/sections/developer/developer-education/developer-education.component';
import { DeveloperExperienceComponent } from './components/sections/developer/developer-experience/developer-experience.component';
import { DeveloperProjectsComponent } from './components/sections/developer/developer-projects/developer-projects.component';
import { DeveloperTechnicalSkillsComponent } from './components/sections/developer/developer-technical-skills/developer-technical-skills.component';
import { DeveloperSoftSkillsComponent } from './components/sections/developer/developer-soft-skills/developer-soft-skills.component';
import { DeveloperLanguagesComponent } from './components/sections/developer/developer-languages/developer-languages.component';
import { DeveloperHobbiesComponent } from './components/sections/developer/developer-hobbies/developer-hobbies.component';
import { DeveloperReferencesComponent } from './components/sections/developer/developer-references/developer-references.component';
import { DeveloperContactComponent } from './components/sections/developer/developer-contact/developer-contact.component';
import { DeveloperToCvComponent } from './components/sections/developer/developer-to-cv/developer-to-cv.component';
import { BlackDeveloperComponent } from './components/sidebars/right/black/developer/black-developer/black-developer.component';
import { OrangeSessionComponent } from './components/navbar/session/orange/orange-session/orange-session.component';

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
        BlackSessionComponent,
        WhiteLogoComponent,
        BlackLogoComponent,
        WhitePlusComponent,
        BlackPlusComponent,
        BlackGeneralComponent,
        WhiteGeneralComponent,
        CameraComponent,
        CodeComponent,
        BugComponent,
        BlackFastForwardComponent,
        WhiteFastForwardComponent,
        MinibioComponent,
        IWantComponent,
        MyWorkComponent,
        PlusComponent,
        WhiteBackComponent,
        BlackBackComponent,
        WhiteSessionComponent,
        BlackGeneralComponent,
        WhiteAudiovisualComponent,
        WhiteFooterPlusComponent,
        DeveloperIntroComponent,
        DeveloperProfileComponent,
        DeveloperEducationComponent,
        DeveloperExperienceComponent,
        DeveloperProjectsComponent,
        DeveloperTechnicalSkillsComponent,
        DeveloperSoftSkillsComponent,
        DeveloperLanguagesComponent,
        DeveloperHobbiesComponent,
        DeveloperReferencesComponent,
        DeveloperContactComponent,
        DeveloperToCvComponent,
        BlackDeveloperComponent,
        OrangeSessionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
