import {Injectable} from '@angular/core';
import {faEdit, faEye, faImage, faImages, faList, faPuzzlePiece, faTrash} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';
import {components} from '../shared/components';

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

  constructor(private httpClient: HttpClient) {
  }

  selectedComponents: any[] = [];

  public returnComponents() {
    const componentsToSelect: any[] = [];
    for (let component in components) {
      componentsToSelect.push(components[component])
    }
    return componentsToSelect;
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
    if (this.selectedComponents[currentPos] && this.selectedComponents[currentPos]['data'])
      this.selectedComponents[currentPos]['data'] = {};

    this.selectedComponents[currentPos]['data'] = data;
    this.selectedComponents[currentPos]['position'] = currentPos;
  }

  getRecipeById() {
    const id = "-MLnkgXhJM_N2C2CDpGs";
    return this.httpClient.get(`https://insta-6d8f2.firebaseio.com/recipes/${id}.json`);
  }

}
