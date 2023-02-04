import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { WhiteBackComponent } from './components/footer/left/white/back/white-back.component';
import { BlackSessionComponent } from './components/navbar/session/black/black.component';
import { WhiteSessionComponent } from './components/navbar/session/white/white.component';
import { BlackPlusComponent } from './components/sidebars/left/plus/black/black.component';
import { BlackLogoComponent } from './components/navbar/logo/black/black.component';
import { BlackGeneralComponent } from './components/sidebars/right/black/general/black-general/black-general.component';
import { WhiteGeneralComponent } from './components/sidebars/right/white/general/white-general/white-general.component';
import { WhiteFooterPlusComponent } from './components/footer/right/white/plus/plus.component';
import { DeveloperIntroComponent } from './components/sections/developer/developer-intro/developer-intro.component';
import { DeveloperProfileComponent } from './components/sections/developer/developer-profile/developer-profile.component';
import { DeveloperEducationComponent } from './components/sections/developer/developer-education/developer-education.component';
import { DeveloperExperienceComponent } from './components/sections/developer/developer-experience/developer-experience.component';
import { DeveloperProjectsComponent } from './components/sections/developer/developer-projects/developer-projects.component';
import { DeveloperTechnicalSkillsComponent } from './components/sections/developer/developer-skills/developer-technical-skills/developer-technical-skills.component';
import { DeveloperSoftSkillsComponent } from './components/sections/developer/developer-skills/developer-soft-skills/developer-soft-skills.component';
import { DeveloperLanguagesComponent } from './components/sections/developer/developer-languages/developer-languages.component';
import { DeveloperHobbiesComponent } from './components/sections/developer/developer-hobbies/developer-hobbies.component';
import { DeveloperReferencesComponent } from './components/sections/developer/developer-references/developer-references.component';
import { DeveloperContactComponent } from './components/sections/developer/developer-contact/developer-contact.component';
import { DeveloperToCvComponent } from './components/sections/developer/developer-to-cv/developer-to-cv.component';
import { BlackDeveloperComponent } from './components/sidebars/right/black/developer/black-developer/black-developer.component';
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
import { EditBannerModalComponent } from './modals/dashboard/banners-modal/edit-banner-modal/edit-banner-modal.component';
import { EditTitleCreditModalComponent } from './modals/dashboard/credits-modal/edit-title-credit-modal/edit-title-credit-modal.component';
import { EditSingleCreditModalComponent } from './modals/dashboard/credits-modal/edit-single-credit-modal/edit-single-credit-modal.component';
import { DeleteSingleCreditModalComponent } from './modals/dashboard/credits-modal/delete-single-credit-modal/delete-single-credit-modal.component';
import { CreateSingleCreditModalComponent } from './modals/dashboard/credits-modal/create-single-credit-modal/create-single-credit-modal.component';
import { CreateDoubleCreditModalComponent } from './modals/dashboard/credits-modal/create-double-credit-modal/create-double-credit-modal.component';
import { CreateTripleCreditModalComponent } from './modals/dashboard/credits-modal/create-triple-credit-modal/create-triple-credit-modal.component';
import { EditThanksModalComponent } from './modals/dashboard/credits-modal/edit-thanks-modal/edit-thanks-modal.component';
import { CreateThanksModalComponent } from './modals/dashboard/credits-modal/create-thanks-modal/create-thanks-modal.component';
import { EditMadeModalComponent } from './modals/dashboard/credits-modal/edit-made-modal/edit-made-modal.component';
import { EditMusicCreditModalComponent } from './modals/dashboard/credits-modal/edit-music-credit-modal/edit-music-credit-modal.component';
import { EditBloopersCreditModalComponent } from './modals/dashboard/credits-modal/edit-bloopers-credit-modal/edit-bloopers-credit-modal.component';
import { EditBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-blooper-modal/edit-blooper-modal.component';
import { DeleteBlooperModalComponent } from './modals/dashboard/bloopers-modal/delete-blooper-modal/delete-blooper-modal.component';
import { EditDivisorBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-divisor-blooper-modal/edit-divisor-blooper-modal.component';
import { EditEndBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-end-blooper-modal/edit-end-blooper-modal.component';
import { AudiovisualCoverModalComponent } from './modals/dashboard/audiovisual-cover-modal/audiovisual-cover-modal.component';
import { AudiovisualProfileModalComponent } from './modals/dashboard/audiovisual-profile-modal/audiovisual-profile-modal.component';
import { AudiovisualDivisorsModalComponent } from './modals/dashboard/audiovisual-divisors-modal/audiovisual-divisors-modal.component';
import { AudiovisualPresentationModalComponent } from './modals/dashboard/audiovisual-presentation-modal/audiovisual-presentation-modal.component';
import { AudiovisualProjectsModalComponent } from './modals/dashboard/audiovisual-projects-modal/audiovisual-projects-modal.component';
import { AudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/audiovisual-feedback-modal.component';
import { AudiovisualQuotesModalComponent } from './modals/dashboard/audiovisual-quotes-modal/audiovisual-quotes-modal.component';
import { AudiovisualClosingModalComponent } from './modals/dashboard/audiovisual-closing-modal/audiovisual-closing-modal.component';
import { AudiovisualLinksModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-links-modal.component';
import { EditAudiovisualCoverModalComponent } from './modals/dashboard/audiovisual-cover-modal/edit-audiovisual-cover-modal/edit-audiovisual-cover-modal.component';
import { EditAudiovisualProfileModalComponent } from './modals/dashboard/audiovisual-profile-modal/edit-audiovisual-profile-modal/edit-audiovisual-profile-modal.component';
import { EditAudiovisualPresentationModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-presentation-modal/edit-audiovisual-presentation-modal.component';
import { EditAudiovisualMinibioModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-minibio-modal/edit-audiovisual-minibio-modal.component';
import { EditAudiovisualWorkModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-work-modal/edit-audiovisual-work-modal.component';
import { EditAudiovisualWantModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-want-modal/edit-audiovisual-want-modal.component';
import { EditAudiovisualProjectsModalComponent } from './modals/dashboard/audiovisual-projects-modal/edit-audiovisual-projects-modal/edit-audiovisual-projects-modal.component';
import { EditAudiovisualLinksModalComponent } from './modals/dashboard/audiovisual-links-modal/edit-audiovisual-links-modal/edit-audiovisual-links-modal.component';
import { AudiovisualProjectsPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/audiovisual-projects-page-modal.component';
import { AudiovisualSamplesPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/audiovisual-samples-page-modal.component';
import { AudiovisualDataPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/audiovisual-data-page-modal.component';
import { EditAudiovisualProjectsPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-projects-page-presentation-modal/edit-audiovisual-projects-page-presentation-modal.component';
import { CreateAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-series-modal/create-audiovisual-series-modal.component';
import { EditAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-series-modal/edit-audiovisual-series-modal.component';
import { DeleteAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-series-modal/delete-audiovisual-series-modal.component';
import { EditAudiovisualSamplesPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/edit-audiovisual-samples-page-presentation-modal/edit-audiovisual-samples-page-presentation-modal.component';
import { CreateAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/create-audiovisual-sample-modal/create-audiovisual-sample-modal.component';
import { EditAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/edit-audiovisual-sample-modal/edit-audiovisual-sample-modal.component';
import { DeleteAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/delete-audiovisual-sample-modal/delete-audiovisual-sample-modal.component';
import { EditAudiovisualDataPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-data-page-presentation-modal/edit-audiovisual-data-page-presentation-modal.component';
import { EditAudiovisualDownloadableDocumentsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-documents-modal/edit-audiovisual-downloadable-documents-modal.component';
import { EditAudiovisualDownloadableProjectsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-projects-modal/edit-audiovisual-downloadable-projects-modal.component';
import { EditAudiovisualDownloadableSamplesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-samples-modal/edit-audiovisual-downloadable-samples-modal.component';
import { EditIntroAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/edit-intro-audiovisual-feedback-modal/edit-intro-audiovisual-feedback-modal.component';
import { CreateAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/create-audiovisual-feedback-modal/create-audiovisual-feedback-modal.component';
import { EditAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/edit-audiovisual-feedback-modal/edit-audiovisual-feedback-modal.component';
import { DeleteAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/delete-audiovisual-feedback-modal/delete-audiovisual-feedback-modal.component';
import { EditIntroAudiovisualQuotesModalComponent } from './modals/dashboard/audiovisual-quotes-modal/edit-intro-audiovisual-quotes-modal/edit-intro-audiovisual-quotes-modal.component';
import { CreateAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/create-audiovisual-quote-modal/create-audiovisual-quote-modal.component';
import { EditAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/edit-audiovisual-quote-modal/edit-audiovisual-quote-modal.component';
import { DeleteAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/delete-audiovisual-quote-modal/delete-audiovisual-quote-modal.component';
import { EditAudiovisualClosingModalComponent } from './modals/dashboard/audiovisual-closing-modal/edit-audiovisual-closing-modal/edit-audiovisual-closing-modal.component';
import { DeveloperIntroModalComponent } from './modals/dashboard/developer-intro-modal/developer-intro-modal.component';
import { DeveloperProfileModalComponent } from './modals/dashboard/developer-profile-modal/developer-profile-modal.component';
import { DeveloperProjectsModalComponent } from './modals/dashboard/developer-projects-modal/developer-projects-modal.component';
import { DeveloperEducationModalComponent } from './modals/dashboard/developer-education-modal/developer-education-modal.component';
import { DeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/developer-experience-modal.component';
import { DeveloperSkillsModalComponent } from './modals/dashboard/developer-skills-modal/developer-skills-modal.component';
import { DeveloperCommentsModalComponent } from './modals/dashboard/developer-comments-modal/developer-comments-modal.component';
import { DeveloperHobbiesModalComponent } from './modals/dashboard/developer-hobbies-modal/developer-hobbies-modal.component';
import { DeveloperCvModalComponent } from './modals/dashboard/developer-cv-modal/developer-cv-modal.component';
import { EditDeveloperIntroModalComponent } from './modals/dashboard/developer-intro-modal/edit-developer-intro-modal/edit-developer-intro-modal.component';
import { EditDeveloperProfileModalComponent } from './modals/dashboard/developer-profile-modal/edit-developer-profile-modal/edit-developer-profile-modal.component';
import { CreateDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/create-developer-project-modal/create-developer-project-modal.component';
import { EditDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/edit-developer-project-modal/edit-developer-project-modal.component';
import { DeleteDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/delete-developer-project-modal/delete-developer-project-modal.component';
import { CreateDeveloperEducationModalComponent } from './modals/dashboard/developer-education-modal/create-developer-education-modal/create-developer-education-modal.component';
import { EditDeveloperEducationModalComponent } from './modals/dashboard/developer-education-modal/edit-developer-education-modal/edit-developer-education-modal.component';
import { DeleteDeveloperEducationModalComponent } from './modals/dashboard/developer-education-modal/delete-developer-education-modal/delete-developer-education-modal.component';
import { CreateDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/create-developer-experience-modal/create-developer-experience-modal.component';
import { EditDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/edit-developer-experience-modal/edit-developer-experience-modal.component';
import { DeleteDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/delete-developer-experience-modal/delete-developer-experience-modal.component';
import { CreateDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-technical-skill-modal/create-developer-technical-skill-modal.component';
import { EditDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-technical-skill-modal/edit-developer-technical-skill-modal.component';
import { CreateDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-soft-skill-modal/create-developer-soft-skill-modal.component';
import { EditDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-soft-skill-modal/edit-developer-soft-skill-modal.component';
import { CreateDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-language-skill-modal/create-developer-language-skill-modal.component';
import { EditDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-language-skill-modal/edit-developer-language-skill-modal.component';
import { CreateDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/create-developer-hobby-modal/create-developer-hobby-modal.component';
import { EditDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/edit-developer-hobby-modal/edit-developer-hobby-modal.component';
import { DeleteDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/delete-developer-hobby-modal/delete-developer-hobby-modal.component';
import { CreateDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/create-developer-comment-modal/create-developer-comment-modal.component';
import { EditDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/edit-developer-comment-modal/edit-developer-comment-modal.component';
import { DeleteDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/delete-developer-comment-modal/delete-developer-comment-modal.component';
import { PhotoCvModalComponent } from './modals/dashboard/developer-cv-modal/photo-cv-modal/photo-cv-modal.component';
import { InfoCvModalComponent } from './modals/dashboard/developer-cv-modal/info-cv-modal/info-cv-modal.component';
import { EducationCvModalComponent } from './modals/dashboard/developer-cv-modal/education-cv-modal/education-cv-modal.component';
import { SkillsCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/skills-cv-modal.component';
import { HobbiesCvModalComponent } from './modals/dashboard/developer-cv-modal/hobbies-cv-modal/hobbies-cv-modal.component';
import { NameCvModalComponent } from './modals/dashboard/developer-cv-modal/name-cv-modal/name-cv-modal.component';
import { PositionCvModalComponent } from './modals/dashboard/developer-cv-modal/position-cv-modal/position-cv-modal.component';
import { ContactCvModalComponent } from './modals/dashboard/developer-cv-modal/contact-cv-modal/contact-cv-modal.component';
import { SocialCvModalComponent } from './modals/dashboard/developer-cv-modal/social-cv-modal/social-cv-modal.component';
import { ExperienceCvModalComponent } from './modals/dashboard/developer-cv-modal/experience-cv-modal/experience-cv-modal.component';
import { ProjectsCvModalComponent } from './modals/dashboard/developer-cv-modal/projects-cv-modal/projects-cv-modal.component';
import { ReferencesCvModalComponent } from './modals/dashboard/developer-cv-modal/references-cv-modal/references-cv-modal.component';
import { EditPhotoCvModalComponent } from './modals/dashboard/developer-cv-modal/photo-cv-modal/edit-photo-cv-modal/edit-photo-cv-modal.component';
import { EditInfoCvModalComponent } from './modals/dashboard/developer-cv-modal/info-cv-modal/edit-info-cv-modal/edit-info-cv-modal.component';
import { CreateEducationCvModalComponent } from './modals/dashboard/developer-cv-modal/education-cv-modal/create-education-cv-modal/create-education-cv-modal.component';
import { EditEducationCvModalComponent } from './modals/dashboard/developer-cv-modal/education-cv-modal/edit-education-cv-modal/edit-education-cv-modal.component';
import { DeleteEducationCvModalComponent } from './modals/dashboard/developer-cv-modal/education-cv-modal/delete-education-cv-modal/delete-education-cv-modal.component';
import { CreateTechnicalSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/create-technical-skill-cv-modal/create-technical-skill-cv-modal.component';
import { EditTechnicalSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/edit-technical-skill-cv-modal/edit-technical-skill-cv-modal.component';
import { CreateSoftSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/create-soft-skill-cv-modal/create-soft-skill-cv-modal.component';
import { EditSoftSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/edit-soft-skill-cv-modal/edit-soft-skill-cv-modal.component';
import { CreateLanguageSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/create-language-skill-cv-modal/create-language-skill-cv-modal.component';
import { EditLanguageSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/edit-language-skill-cv-modal/edit-language-skill-cv-modal.component';
import { CreateHobbyCvModalComponent } from './modals/dashboard/developer-cv-modal/hobbies-cv-modal/create-hobby-cv-modal/create-hobby-cv-modal.component';
import { EditHobbyCvModalComponent } from './modals/dashboard/developer-cv-modal/hobbies-cv-modal/edit-hobby-cv-modal/edit-hobby-cv-modal.component';
import { DeleteHobbyCvModalComponent } from './modals/dashboard/developer-cv-modal/hobbies-cv-modal/delete-hobby-cv-modal/delete-hobby-cv-modal.component';
import { EditNameCvModalComponent } from './modals/dashboard/developer-cv-modal/name-cv-modal/edit-name-cv-modal/edit-name-cv-modal.component';
import { EditPositionCvModalComponent } from './modals/dashboard/developer-cv-modal/position-cv-modal/edit-position-cv-modal/edit-position-cv-modal.component';
import { EditPhoneContactCvModalComponent } from './modals/dashboard/developer-cv-modal/contact-cv-modal/edit-phone-contact-cv-modal/edit-phone-contact-cv-modal.component';
import { EditEmailContactCvModalComponent } from './modals/dashboard/developer-cv-modal/contact-cv-modal/edit-email-contact-cv-modal/edit-email-contact-cv-modal.component';
import { EditAvailabilityContactCvModalComponent } from './modals/dashboard/developer-cv-modal/contact-cv-modal/edit-availability-contact-cv-modal/edit-availability-contact-cv-modal.component';
import { EditSocialCvModalComponent } from './modals/dashboard/developer-cv-modal/social-cv-modal/edit-social-cv-modal/edit-social-cv-modal.component';
import { EditExperienceCvModalComponent } from './modals/dashboard/developer-cv-modal/experience-cv-modal/edit-experience-cv-modal/edit-experience-cv-modal.component';
import { EditProjectsCvModalComponent } from './modals/dashboard/developer-cv-modal/projects-cv-modal/edit-projects-cv-modal/edit-projects-cv-modal.component';
import { EditDataReferencesCvModalComponent } from './modals/dashboard/developer-cv-modal/references-cv-modal/edit-data-references-cv-modal/edit-data-references-cv-modal.component';
import { WhiteAudiovisualComponent } from './components/sidebars/right/white/audiovisual/white-audiovisual/white-audiovisual.component';
import { SerieComponent } from './components/sections/audiovisual/projects-series/serie/serie.component';
import { OtherComponent } from './components/sections/audiovisual/projects-others/other/other.component';
import { LongshotComponent } from './components/sections/audiovisual/projects-longshots/longshot/longshot.component';
import { AudiovisualCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-credits.component';
import { AudiovisualSingleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-single-credits/audiovisual-single-credits.component';
import { AudiovisualDoubleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-double-credits/audiovisual-double-credits.component';
import { AudiovisualTripleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-triple-credits/audiovisual-triple-credits.component';
import { AudiovisualThanksCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-thanks-credits/audiovisual-thanks-credits.component';
import { AudiovisualMadeCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-made-credits/audiovisual-made-credits.component';
import { AudiovisualMusicCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-music-credits/audiovisual-music-credits.component';
import { AudiovisualMoreCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-more-credits/audiovisual-more-credits.component';
import { AudiovisualBloopersCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-bloopers-credits/audiovisual-bloopers-credits.component';
import { AudiovisualBloopersComponent } from './components/sections/audiovisual/audiovisual-bloopers/audiovisual-bloopers.component';
import { DeveloperSkillsComponent } from './components/sections/developer/developer-skills/developer-skills.component';
import { CvNameComponent } from './components/sections/developer/cv-profile/cv-name/cv-name.component';
import { CvPositionComponent } from './components/sections/developer/cv-profile/cv-position/cv-position.component';
import { CreateBannerModalComponent } from './modals/dashboard/banners-modal/create-banner-modal/create-banner-modal.component';
import { CreateHeroModalComponent } from './modals/dashboard/heroes-modal/create-hero-modal/create-hero-modal.component';
import { EditHeroModalComponent } from './modals/dashboard/heroes-modal/edit-hero-modal/edit-hero-modal.component';
import { WhiteOrangeSessionComponent } from './components/navbar/session/white-orange/white-orange.component';
import { CreateAudiovisualSocialModalComponent } from './modals/dashboard/social-modal/create-audiovisual-social-modal/create-audiovisual-social-modal.component';
import { CreateDeveloperSocialModalComponent } from './modals/dashboard/social-modal/create-developer-social-modal/create-developer-social-modal.component';
import { CreateGeneralSocialModalComponent } from './modals/dashboard/social-modal/create-general-social-modal/create-general-social-modal.component';
import { DeleteAudiovisualSocialModalComponent } from './modals/dashboard/social-modal/delete-audiovisual-social-modal/delete-audiovisual-social-modal.component';
import { DeleteDeveloperSocialModalComponent } from './modals/dashboard/social-modal/delete-developer-social-modal/delete-developer-social-modal.component';
import { DeleteGeneralSocialModalComponent } from './modals/dashboard/social-modal/delete-general-social-modal/delete-general-social-modal.component';
import { EditAudiovisualSocialModalComponent } from './modals/dashboard/social-modal/edit-audiovisual-social-modal/edit-audiovisual-social-modal.component';
import { EditDeveloperSocialModalComponent } from './modals/dashboard/social-modal/edit-developer-social-modal/edit-developer-social-modal.component';
import { EditGeneralSocialModalComponent } from './modals/dashboard/social-modal/edit-general-social-modal/edit-general-social-modal.component';
import { EditDoubleCreditModalComponent } from './modals/dashboard/credits-modal/edit-double-credit-modal/edit-double-credit-modal.component';
import { DeleteDoubleCreditModalComponent } from './modals/dashboard/credits-modal/delete-double-credit-modal/delete-double-credit-modal.component';
import { EditTripleCreditModalComponent } from './modals/dashboard/credits-modal/edit-triple-credit-modal/edit-triple-credit-modal.component';
import { DeleteTripleCreditModalComponent } from './modals/dashboard/credits-modal/delete-triple-credit-modal/delete-triple-credit-modal.component';
import { DeleteThanksModalComponent } from './modals/dashboard/credits-modal/delete-thanks-modal/delete-thanks-modal.component';
import { CreateMadeModalComponent } from './modals/dashboard/credits-modal/create-made-modal/create-made-modal.component';
import { DeleteMadeModalComponent } from './modals/dashboard/credits-modal/delete-made-modal/delete-made-modal.component';
import { CreateMoreModalComponent } from './modals/dashboard/credits-modal/create-more-modal/create-more-modal.component';
import { EditMoreModalComponent } from './modals/dashboard/credits-modal/edit-more-modal/edit-more-modal.component';
import { DeleteMoreModalComponent } from './modals/dashboard/credits-modal/delete-more-modal/delete-more-modal.component';
import { EditAudiovisualDivisorModalComponent } from './modals/dashboard/audiovisual-divisors-modal/edit-audiovisual-divisor-modal/edit-audiovisual-divisor-modal.component';
import { CreateAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-longshots-modal/create-audiovisual-longshots-modal.component';
import { EditAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-longshots-modal/edit-audiovisual-longshots-modal.component';
import { DeleteAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-longshots-modal/delete-audiovisual-longshots-modal.component';
import { CreateAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-others-modal/create-audiovisual-others-modal.component';
import { EditAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-others-modal/edit-audiovisual-others-modal.component';
import { DeleteAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-others-modal/delete-audiovisual-others-modal.component';
import { ProofreaderComponent } from './pages/proofreader/proofreader.component';
import { DeleteDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-technical-skill-modal/delete-developer-technical-skill-modal.component';
import { DeleteDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-soft-skill-modal/delete-developer-soft-skill-modal.component';
import { DeleteDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-language-skill-modal/delete-developer-language-skill-modal.component';
import { DeleteTechnicalSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/delete-technical-skill-cv-modal/delete-technical-skill-cv-modal.component';
import { DeleteSoftSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/delete-soft-skill-cv-modal/delete-soft-skill-cv-modal.component';
import { DeleteLanguageSkillCvModalComponent } from './modals/dashboard/developer-cv-modal/skills-cv-modal/delete-language-skill-cv-modal/delete-language-skill-cv-modal.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

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
        EditGeneralSocialModalComponent,
        DeleteGeneralSocialModalComponent,
        CreateGeneralSocialModalComponent,
        EditAudiovisualSocialModalComponent,
        DeleteAudiovisualSocialModalComponent,
        CreateAudiovisualSocialModalComponent,
        EditDeveloperSocialModalComponent,
        DeleteDeveloperSocialModalComponent,
        CreateDeveloperSocialModalComponent,
        EditBannerModalComponent,
        EditHeroModalComponent,
        CreateHeroModalComponent,
        EditTitleCreditModalComponent,
        EditSingleCreditModalComponent,
        DeleteSingleCreditModalComponent,
        CreateSingleCreditModalComponent,
        CreateDoubleCreditModalComponent,
        CreateTripleCreditModalComponent,
        EditThanksModalComponent,
        CreateThanksModalComponent,
        EditMadeModalComponent,
        EditMusicCreditModalComponent,
        EditBloopersCreditModalComponent,
        EditBlooperModalComponent,
        DeleteBlooperModalComponent,
        EditDivisorBlooperModalComponent,
        EditEndBlooperModalComponent,
        AudiovisualCoverModalComponent,
        AudiovisualProfileModalComponent,
        AudiovisualDivisorsModalComponent,
        AudiovisualPresentationModalComponent,
        AudiovisualProjectsModalComponent,
        AudiovisualFeedbackModalComponent,
        AudiovisualQuotesModalComponent,
        AudiovisualClosingModalComponent,
        AudiovisualLinksModalComponent,
        EditAudiovisualCoverModalComponent,
        EditAudiovisualProfileModalComponent,
        EditAudiovisualPresentationModalComponent,
        EditAudiovisualMinibioModalComponent,
        EditAudiovisualWorkModalComponent,
        EditAudiovisualWantModalComponent,
        EditAudiovisualProjectsModalComponent,
        EditAudiovisualLinksModalComponent,
        AudiovisualProjectsPageModalComponent,
        AudiovisualSamplesPageModalComponent,
        AudiovisualDataPageModalComponent,
        EditAudiovisualProjectsPagePresentationModalComponent,
        CreateAudiovisualSeriesModalComponent,
        EditAudiovisualSeriesModalComponent,
        DeleteAudiovisualSeriesModalComponent,
        EditAudiovisualSamplesPagePresentationModalComponent,
        CreateAudiovisualSampleModalComponent,
        EditAudiovisualSampleModalComponent,
        DeleteAudiovisualSampleModalComponent,
        EditAudiovisualDataPagePresentationModalComponent,
        EditAudiovisualDownloadableDocumentsModalComponent,
        EditAudiovisualDownloadableProjectsModalComponent,
        EditAudiovisualDownloadableSamplesModalComponent,
        EditIntroAudiovisualFeedbackModalComponent,
        CreateAudiovisualFeedbackModalComponent,
        EditAudiovisualFeedbackModalComponent,
        DeleteAudiovisualFeedbackModalComponent,
        EditIntroAudiovisualQuotesModalComponent,
        CreateAudiovisualQuoteModalComponent,
        EditAudiovisualQuoteModalComponent,
        DeleteAudiovisualQuoteModalComponent,
        EditAudiovisualClosingModalComponent,
        DeveloperIntroModalComponent,
        DeveloperProfileModalComponent,
        DeveloperProjectsModalComponent,
        DeveloperEducationModalComponent,
        DeveloperExperienceModalComponent,
        DeveloperSkillsModalComponent,
        DeveloperCommentsModalComponent,
        DeveloperHobbiesModalComponent,
        DeveloperCvModalComponent,
        EditDeveloperIntroModalComponent,
        EditDeveloperProfileModalComponent,
        CreateDeveloperProjectModalComponent,
        EditDeveloperProjectModalComponent,
        DeleteDeveloperProjectModalComponent,
        CreateDeveloperEducationModalComponent,
        EditDeveloperEducationModalComponent,
        DeleteDeveloperEducationModalComponent,
        CreateDeveloperExperienceModalComponent,
        EditDeveloperExperienceModalComponent,
        DeleteDeveloperExperienceModalComponent,
        CreateDeveloperTechnicalSkillModalComponent,
        EditDeveloperTechnicalSkillModalComponent,
        CreateDeveloperSoftSkillModalComponent,
        EditDeveloperSoftSkillModalComponent,
        CreateDeveloperLanguageSkillModalComponent,
        EditDeveloperLanguageSkillModalComponent,
        CreateDeveloperHobbyModalComponent,
        EditDeveloperHobbyModalComponent,
        DeleteDeveloperHobbyModalComponent,
        CreateDeveloperCommentModalComponent,
        EditDeveloperCommentModalComponent,
        DeleteDeveloperCommentModalComponent,
        PhotoCvModalComponent,
        InfoCvModalComponent,
        EducationCvModalComponent,
        SkillsCvModalComponent,
        HobbiesCvModalComponent,
        NameCvModalComponent,
        PositionCvModalComponent,
        ContactCvModalComponent,
        SocialCvModalComponent,
        ExperienceCvModalComponent,
        ProjectsCvModalComponent,
        ReferencesCvModalComponent,
        EditPhotoCvModalComponent,
        EditInfoCvModalComponent,
        CreateEducationCvModalComponent,
        EditEducationCvModalComponent,
        DeleteEducationCvModalComponent,
        CreateTechnicalSkillCvModalComponent,
        EditTechnicalSkillCvModalComponent,
        CreateSoftSkillCvModalComponent,
        EditSoftSkillCvModalComponent,
        CreateLanguageSkillCvModalComponent,
        EditLanguageSkillCvModalComponent,
        CreateHobbyCvModalComponent,
        EditHobbyCvModalComponent,
        DeleteHobbyCvModalComponent,
        EditNameCvModalComponent,
        EditPositionCvModalComponent,
        EditPhoneContactCvModalComponent,
        EditEmailContactCvModalComponent,
        EditAvailabilityContactCvModalComponent,
        EditSocialCvModalComponent,
        EditExperienceCvModalComponent,
        EditProjectsCvModalComponent,
        EditDataReferencesCvModalComponent,
        SerieComponent,
        OtherComponent,
        LongshotComponent,
        AudiovisualCreditsComponent,
        AudiovisualSingleCreditsComponent,
        AudiovisualDoubleCreditsComponent,
        AudiovisualTripleCreditsComponent,
        AudiovisualThanksCreditsComponent,
        AudiovisualMadeCreditsComponent,
        AudiovisualMusicCreditsComponent,
        AudiovisualMoreCreditsComponent,
        AudiovisualBloopersCreditsComponent,
        AudiovisualBloopersComponent,
        DeveloperSkillsComponent,
        CvNameComponent,
        CvPositionComponent,
        CreateBannerModalComponent,
        WhiteOrangeSessionComponent,
        EditDoubleCreditModalComponent,
        DeleteDoubleCreditModalComponent,
        EditTripleCreditModalComponent,
        DeleteTripleCreditModalComponent,
        DeleteThanksModalComponent,
        CreateMadeModalComponent,
        DeleteMadeModalComponent,
        CreateMoreModalComponent,
        EditMoreModalComponent,
        DeleteMoreModalComponent,
        EditAudiovisualDivisorModalComponent,
        CreateAudiovisualLongshotsModalComponent,
        EditAudiovisualLongshotsModalComponent,
        DeleteAudiovisualLongshotsModalComponent,
        CreateAudiovisualOthersModalComponent,
        EditAudiovisualOthersModalComponent,
        DeleteAudiovisualOthersModalComponent,
        ProofreaderComponent,
        DeleteDeveloperTechnicalSkillModalComponent,
        DeleteDeveloperSoftSkillModalComponent,
        DeleteDeveloperLanguageSkillModalComponent,
        DeleteTechnicalSkillCvModalComponent,
        DeleteSoftSkillCvModalComponent,
        DeleteLanguageSkillCvModalComponent,
        FeedbackComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
