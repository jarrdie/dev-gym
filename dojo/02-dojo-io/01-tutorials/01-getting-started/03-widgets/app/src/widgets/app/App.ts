import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Banner from './../banner/Banner';
import Worker from './../worker/Worker';

export default class App extends WidgetBase {
	protected render() {
		return v('div', [w(Banner, {}), w(Worker, { firstName: 'Tim', lastName: 'Jones' })]);
	}
}
