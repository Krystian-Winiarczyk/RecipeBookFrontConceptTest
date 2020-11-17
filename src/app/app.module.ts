import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppComponent} from './app.component';
import {DclWrapperComponent} from './components/dcl-wrapper/dcl-wrapper.component';
import {GalleryComponent} from './components/creator/parts/gallery/gallery.component';
import {ImageComponent} from './components/creator/parts/image/image.component';
import {SectionComponent} from './components/creator/parts/section/section.component';
import {ListComponent} from './components/creator/parts/list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ObserversModule} from '@angular/cdk/observers';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatorComponent } from './components/creator/creator.component';
import { TitleComponent } from './components/creator/parts/title/title.component';

const routes: Routes = [
  { path: "", component: CreatorComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DclWrapperComponent,
    GalleryComponent,
    ImageComponent,
    SectionComponent,
    ListComponent,
    HomeComponent,
    CreatorComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ObserversModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent, GalleryComponent, ListComponent, SectionComponent]
})
export class AppModule {
}
