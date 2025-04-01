import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailedprojectComponent } from './projects/detailedproject/detailedproject.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';

export const routes: Routes = [
    { path: "", component: MainComponent},
    { path: "project/:id", component: DetailedprojectComponent},
    { path: "moreProjects", component: AllProjectsComponent},
    { path: "privacyPolicy", component: PrivacyPolicyComponent},
    { path: "imprint", component: ImprintComponent},
];
