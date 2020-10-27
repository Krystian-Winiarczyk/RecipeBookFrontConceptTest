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
import {EditorComponent} from './editor/editor.component';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  declarations: [
    AppComponent,
    DclWrapperComponent,
    GalleryComponent,
    ImageComponent,
    SectionComponent,
    ListComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent, GalleryComponent, ListComponent, SectionComponent]
})
export class AppModule {
}
