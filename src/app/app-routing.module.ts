import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'bookmarks', component: BookmarksPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }