import {ListComponent} from '../list/list.component';
import {SectionComponent} from '../section/section.component';
import {ImageComponent} from '../image/image.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {faEdit, faEye, faImage, faImages, faList, faPuzzlePiece, faTrash} from '@fortawesome/free-solid-svg-icons';

const icons: {} = {
  preview: faEye,
  edit: faEdit,
  list: faList,
  "gallery": faImages,
  image: faImage,
  section: faPuzzlePiece,
  trash: faTrash
};

export const components = {
  "ListComponent": {
    title: "List",
    icon: icons.list,
    component: ListComponent
  },
  "SectionComponent": {
    title: "Section",
    icon: icons.section,
    component: SectionComponent
  },
  "ImageComponent": {
    title: "Image",
    icon: icons.image,
    component: ImageComponent
  },
  "GalleryComponent": {
    title: "Gallery",
    icon: icons.gallery,
    component: GalleryComponent
  }
};

