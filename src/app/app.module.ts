import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppComponent} from './app.component';
import {DclWrapperComponent} from './dcl-wrapper/dcl-wrapper.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageComponent} from './image/image.component';
import {SectionComponent} from './section/section.component';
import {ListComponent} from './list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ObserversModule} from '@angular/cdk/observers';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatorComponent } from './creator/creator.component';

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
    CreatorComponent
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
