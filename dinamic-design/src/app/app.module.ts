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
import { CvEducationComponent } from './components/sections/developer/cv-education/cv-education.component';
import { CvProfileComponent } from './components/sections/developer/cv-profile/cv-profile.component';
import { CvExperienceComponent } from './components/sections/developer/cv-experience/cv-experience.component';
import { CvSocialComponent } from './components/sections/developer/cv-social/cv-social.component';
import { CvHobbiesComponent } from './components/sections/developer/cv-hobbies/cv-hobbies.component';
import { CvContactComponent } from './components/sections/developer/cv-contact/cv-contact.component';
import { CvProjectsComponent } from './components/sections/developer/cv-projects/cv-projects.component';
import { CvReferencesComponent } from './components/sections/developer/cv-references/cv-references.component';
import { CvLanguagesComponent } from './components/sections/developer/cv-languages/cv-languages.component';
import { CvTechnicalSkillsComponent } from './components/sections/developer/cv-technical-skills/cv-technical-skills.component';
import { CvSoftSkillsComponent } from './components/sections/developer/cv-soft-skills/cv-soft-skills.component';
import { CvToDeveloperComponent } from './components/sections/developer/cv-to-developer/cv-to-developer.component';
import { BlackAudiovisualComponent } from './components/sidebars/right/black/audiovisual/black-audiovisual/black-audiovisual.component';
import { OrangeCreditsComponent } from './components/footer/right/orange/orange-credits/orange-credits.component';
import { OrangeIndexComponent } from './components/footer/left/orange/orange-index/orange-index.component';
import { OrangeTotopComponent } from './components/footer/right/orange/orange-totop/orange-totop.component';
import { BlackOrangeSessionComponent } from './components/navbar/session/black-orange/black-orange.component';
import { BlackOrangeBackComponent } from './components/footer/left/black-orange-back/black-orange-back.component';
import { AudiovisualIntroComponent } from './components/sections/audiovisual/audiovisual-intro/audiovisual-intro.component';
import { AudiovisualNextComponent } from './components/sections/audiovisual/audiovisual-next/audiovisual-next.component';
import { AudiovisualOneComponent } from './components/sections/audiovisual/audiovisual-one/audiovisual-one.component';
import { AudiovisualTwoComponent } from './components/sections/audiovisual/audiovisual-two/audiovisual-two.component';
import { AudiovisualThreeComponent } from './components/sections/audiovisual/audiovisual-three/audiovisual-three.component';
import { AudiovisualFourComponent } from './components/sections/audiovisual/audiovisual-four/audiovisual-four.component';
import { AudiovisualFiveComponent } from './components/sections/audiovisual/audiovisual-five/audiovisual-five.component';
import { AudiovisualProfileComponent } from './components/sections/audiovisual/audiovisual-profile/audiovisual-profile.component';
import { AudiovisualDocumentsComponent } from './components/sections/audiovisual/audiovisual-documents/audiovisual-documents.component';
import { AudiovisualProjectsComponent } from './components/sections/audiovisual/audiovisual-projects/audiovisual-projects.component';
import { AudiovisualFeedbackComponent } from './components/sections/audiovisual/audiovisual-feedback/audiovisual-feedback.component';
import { AudiovisualQuotesComponent } from './components/sections/audiovisual/audiovisual-quotes/audiovisual-quotes.component';
import { AudiovisualClosingComponent } from './components/sections/audiovisual/audiovisual-closing/audiovisual-closing.component';
import { ProjectsIntroComponent } from './components/sections/audiovisual/projects-intro/projects-intro.component';
import { ProjectsSeriesComponent } from './components/sections/audiovisual/projects-series/projects-series.component';
import { ProjectsLongshotsComponent } from './components/sections/audiovisual/projects-longshots/projects-longshots.component';
import { ProjectsOthersComponent } from './components/sections/audiovisual/projects-others/projects-others.component';
import { ProjectsToIntroComponent } from './components/sections/audiovisual/projects-to-intro/projects-to-intro.component';
import { ProjectIntroComponent } from './components/sections/audiovisual/project-intro/project-intro.component';
import { ProjectToProjectsComponent } from './components/sections/audiovisual/project-to-projects/project-to-projects.component';
import { SamplesIntroComponent } from './components/sections/audiovisual/samples-intro/samples-intro.component';
import { SamplesToIntroComponent } from './components/sections/audiovisual/samples-to-intro/samples-to-intro.component';
import { SamplesListComponent } from './components/sections/audiovisual/samples-list/samples-list.component';
import { DataToIntroComponent } from './components/sections/audiovisual/data-to-intro/data-to-intro.component';
import { DataIntroComponent } from './components/sections/audiovisual/data-intro/data-intro.component';
import { DataListComponent } from './components/sections/audiovisual/data-list/data-list.component';
import { LogoutComponent } from './components/navbar/session/logout/logout.component';
import { LogoutModalComponent } from './modals/dashboard/logout-modal/logout-modal.component';
import { DashboardGeneralComponent } from './components/dashboard/dashboard-general/dashboard-general.component';
import { DashboardAudiovisualComponent } from './components/dashboard/dashboard-audiovisual/dashboard-audiovisual.component';
import { DashboardDeveloperComponent } from './components/dashboard/dashboard-developer/dashboard-developer.component';
import { SocialModalComponent } from './modals/dashboard/social-modal/social-modal.component';
import { BannersModalComponent } from './modals/dashboard/banners-modal/banners-modal.component';
import { HeroesModalComponent } from './modals/dashboard/heroes-modal/heroes-modal.component';
import { CreditsModalComponent } from './modals/dashboard/credits-modal/credits-modal.component';
import { BloopersModalComponent } from './modals/dashboard/bloopers-modal/bloopers-modal.component';
import { EditSocialModalComponent } from './modals/dashboard/social-modal/edit-social-modal/edit-social-modal.component';
import { DeleteSocialModalComponent } from './modals/dashboard/social-modal/delete-social-modal/delete-social-modal.component';
import { CreateSocialModalComponent } from './modals/dashboard/social-modal/create-social-modal/create-social-modal.component';
import { EditBannerModalComponent } from './modals/dashboard/banners-modal/edit-banner-modal/edit-banner-modal.component';
import { EditHeroesModalComponent } from './modals/dashboard/heroes-modal/edit-heroes-modal/edit-heroes-modal.component';
import { EditTitleCreditModalComponent } from './modals/dashboard/credits-modal/edit-title-credit-modal/edit-title-credit-modal.component';
import { EditCreditModalComponent } from './modals/dashboard/credits-modal/edit-credit-modal/edit-credit-modal.component';
import { DeleteCreditModalComponent } from './modals/dashboard/credits-modal/delete-credit-modal/delete-credit-modal.component';
import { CreateSingleCreditModalComponent } from './modals/dashboard/credits-modal/create-single-credit-modal/create-single-credit-modal.component';
import { CreateDoubleCreditModalComponent } from './modals/dashboard/credits-modal/create-double-credit-modal/create-double-credit-modal.component';
import { CreateTripleCreditModalComponent } from './modals/dashboard/credits-modal/create-triple-credit-modal/create-triple-credit-modal.component';
import { EditThanksModalComponent } from './modals/dashboard/credits-modal/edit-thanks-modal/edit-thanks-modal.component';
import { CreateThanksModalComponent } from './modals/dashboard/credits-modal/create-thanks-modal/create-thanks-modal.component';
import { EditMadeModalComponent } from './modals/dashboard/credits-modal/edit-made-modal/edit-made-modal.component';
import { EditMusicCreditModalComponent } from './modals/dashboard/credits-modal/edit-music-credit-modal/edit-music-credit-modal.component';
import { EditBloopersCreditModalComponent } from './modals/dashboard/credits-modal/edit-bloopers-credit-modal/edit-bloopers-credit-modal.component';
import { EditTitleBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-title-blooper-modal/edit-title-blooper-modal.component';
import { EditBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-blooper-modal/edit-blooper-modal.component';
import { DeleteBlooperModalComponent } from './modals/dashboard/bloopers-modal/delete-blooper-modal/delete-blooper-modal.component';
import { EditDivisorBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-divisor-blooper-modal/edit-divisor-blooper-modal.component';
import { EditEndBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-end-blooper-modal/edit-end-blooper-modal.component';

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
        OrangeSessionComponent,
        CvEducationComponent,
        CvProfileComponent,
        CvExperienceComponent,
        CvSocialComponent,
        CvHobbiesComponent,
        CvContactComponent,
        CvProjectsComponent,
        CvReferencesComponent,
        CvLanguagesComponent,
        CvTechnicalSkillsComponent,
        CvSoftSkillsComponent,
        CvToDeveloperComponent,
        BlackAudiovisualComponent,
        OrangeCreditsComponent,
        OrangeIndexComponent,
        OrangeTotopComponent,
        BlackOrangeSessionComponent,
        BlackOrangeBackComponent,
        AudiovisualIntroComponent,
        AudiovisualNextComponent,
        AudiovisualOneComponent,
        AudiovisualTwoComponent,
        AudiovisualThreeComponent,
        AudiovisualFourComponent,
        AudiovisualFiveComponent,
        AudiovisualProfileComponent,
        AudiovisualDocumentsComponent,
        AudiovisualProjectsComponent,
        AudiovisualFeedbackComponent,
        AudiovisualQuotesComponent,
        AudiovisualClosingComponent,
        ProjectsIntroComponent,
        ProjectsSeriesComponent,
        ProjectsLongshotsComponent,
        ProjectsOthersComponent,
        ProjectsToIntroComponent,
        ProjectIntroComponent,
        ProjectToProjectsComponent,
        SamplesIntroComponent,
        SamplesToIntroComponent,
        SamplesListComponent,
        DataToIntroComponent,
        DataIntroComponent,
        DataListComponent,
        LogoutComponent,
        LogoutModalComponent,
        DashboardGeneralComponent,
        DashboardAudiovisualComponent,
        DashboardDeveloperComponent,
        SocialModalComponent,
        BannersModalComponent,
        HeroesModalComponent,
        CreditsModalComponent,
        BloopersModalComponent,
        EditSocialModalComponent,
        DeleteSocialModalComponent,
        CreateSocialModalComponent,
        EditBannerModalComponent,
        EditHeroesModalComponent,
        EditTitleCreditModalComponent,
        EditCreditModalComponent,
        DeleteCreditModalComponent,
        CreateSingleCreditModalComponent,
        CreateDoubleCreditModalComponent,
        CreateTripleCreditModalComponent,
        EditThanksModalComponent,
        CreateThanksModalComponent,
        EditMadeModalComponent,
        EditMusicCreditModalComponent,
        EditBloopersCreditModalComponent,
        EditTitleBlooperModalComponent,
        EditBlooperModalComponent,
        DeleteBlooperModalComponent,
        EditDivisorBlooperModalComponent,
        EditEndBlooperModalComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
