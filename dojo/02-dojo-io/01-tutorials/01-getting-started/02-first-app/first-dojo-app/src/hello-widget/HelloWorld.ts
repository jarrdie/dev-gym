import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './HelloWorld.m.css';

const logo = require('./../img/logo.svg');
require('./../styles/commons.css');


/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class HelloWorld extends WidgetBase {
	protected render() {
		// This is Hyper Script:
		//   https://ngrajblog.wordpress.com/2018/01/09/what-is-hyper-script/
		//   http://html-to-hyperscript.paqmind.com/
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			// This doesn't work since the class name "label" is replaced with
			// a new one like: HelloWorld-m__label__OYtm6
			//   v('div', { class: 'label' }, ['Hello, Dojo World!']),
			v('div', { classes: css.label }, ['Hello, Dojo World!']),
			v('h3', { title: 'I am a title!' }, ['Biz-E-Bodies from the widget'])
		]);
	}
}

export default HelloWorld;
