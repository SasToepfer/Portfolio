import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailedprojectComponent } from './projects/detailedproject/detailedproject.component';

export const routes: Routes = [
    { path: "", component: MainComponent},
    { path: "project/:id", component: DetailedprojectComponent}
];
