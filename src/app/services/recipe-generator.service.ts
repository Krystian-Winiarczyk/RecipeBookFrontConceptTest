import {ComponentFactoryResolver, ComponentRef, Injectable} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {SectionComponent} from '../section/section.component';
import {ImageComponent} from '../image/image.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {faEdit, faEye, faImage, faImages, faList, faPuzzlePiece, faTrash} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';

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
    section: faPuzzlePiece,
    trash: faTrash
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

  constructor(private httpClient: HttpClient) {
  }

  selectedComponents: any[] = [];

  public returnComponents() {
    return this.componentsToSelect;
  }

  public addComponent(component) {
    this.selectedComponents.push(component);
  }

  test() {
    let payload = [];
    this.selectedComponents.forEach(item => {
      payload.push({
        ...item,
        component: item.component.name
      })
    });

    this.httpClient.post("https://insta-6d8f2.firebaseio.com/recipes.json", {
      recipe: payload
    })
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log("err: ", err);
      });
  }

  onChangeRecipeEdit() {
    this.isRecipeEdited = !this.isRecipeEdited;
  }

  selectComponentToEdit(id) {
    this.editedComponentId = id;
  }

  updateData(data, currentPos) {
    if (this.selectedComponents[currentPos]['data'])
      this.selectedComponents[currentPos]['data'] = {};

    this.selectedComponents[currentPos]['data'] = data;
    this.selectedComponents[currentPos]['position'] = currentPos;
  }

  getRecipeById() {
    const id = "-MLh6y1kYvdBd62a2jm6";
    return this.httpClient.get(`https://insta-6d8f2.firebaseio.com/recipes/${id}.json`);
  }

}
