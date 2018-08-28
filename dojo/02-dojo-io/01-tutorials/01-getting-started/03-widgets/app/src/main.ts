import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import HelloWorld from './hello-widget/HelloWorld';

// This line is optional. If a root element is not selected then the body is
// used instead. So this line can be commented, and the last line of code would
// be replaced by projector.append() without any argument.
// The same thing happens when the selector is wrong or not found in the document.
const root = document.querySelector('app') || undefined;

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(HelloWorld);
const projector = new Projector();

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().

// projector.append();
projector.append(root);
