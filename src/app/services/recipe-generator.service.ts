import {ComponentFactoryResolver, ComponentRef, Injectable} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {SectionComponent} from '../section/section.component';
import {ImageComponent} from '../image/image.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {faEdit, faEye, faImage, faImages, faList, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class RecipeGeneratorService {
  isRecipeEdited: boolean = true;
  editedComponentId: number = null;

  public icons: {} = {
    preview: faEye,
    edit: faEdit,
    list: faList,
    gallery: faImages,
    image: faImage,
    section: faPuzzlePiece
  };

  componentsToSelect = [
    {
      title: "List",
      icon: this.icons.list,
      component: ListComponent
    },
    {
      title: "Section",
      icon: this.icons.section,
      component: SectionComponent
    },
    {
      title: "Image",
      icon: this.icons.image,
      component: ImageComponent
    },
    {
      title: "Gallery",
      icon: this.icons.gallery,
      component: GalleryComponent
    }
  ];

  selectedComponents: any[] = [];

  public returnComponents() {
    return this.componentsToSelect;
  }

  public addComponent(component) {
    this.selectedComponents.push(component);
  }

  test() {
    console.log(this.selectedComponents);
  }

  onChangeRecipeEdit() {
    this.isRecipeEdited = !this.isRecipeEdited;
  }

  selectComponentToEdit(id) {
    this.editedComponentId = id;
  }

}
