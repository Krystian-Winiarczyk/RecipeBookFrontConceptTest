import {ListComponent} from '../components/creator/parts/list/list.component';
import {SectionComponent} from '../components/creator/parts/section/section.component';
import {ImageComponent} from '../components/creator/parts/image/image.component';
import {GalleryComponent} from '../components/creator/parts/gallery/gallery.component';
import {faEdit, faEye, faHeading, faImage, faImages, faList, faPuzzlePiece, faTrash} from '@fortawesome/free-solid-svg-icons';
import {TitleComponent} from '../components/creator/parts/title/title.component';

const icons: {} = {
  'preview': faEye,
  'edit': faEdit,
  'list': faList,
  'gallery': faImages,
  'image': faImage,
  'section': faPuzzlePiece,
  'trash': faTrash,
  'title': faHeading
};

export const components = {
  'TitleComponent': {
    title: 'Title',
    icon: icons.title,
    component: TitleComponent
  },
  'SectionComponent': {
    title: 'Section',
    icon: icons.section,
    component: SectionComponent
  },
  'ListComponent': {
    title: 'List',
    icon: icons.list,
    component: ListComponent
  },
  'ImageComponent': {
    title: 'Image',
    icon: icons.image,
    component: ImageComponent
  },
  'GalleryComponent': {
    title: 'Gallery',
    icon: icons.gallery,
    component: GalleryComponent
  }
};

