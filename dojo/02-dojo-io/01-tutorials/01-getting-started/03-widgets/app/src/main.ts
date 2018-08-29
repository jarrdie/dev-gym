import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import App from './widgets/app/App';

const root = document.querySelector('app') || undefined;
const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.append(root);
