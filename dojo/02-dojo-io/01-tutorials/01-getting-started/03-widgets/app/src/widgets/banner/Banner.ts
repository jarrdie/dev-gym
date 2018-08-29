import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './Banner.m.css';

const logo = require('./../../img/logo.svg');
require('./../../styles/commons.css');

export class Banner extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			v('div', { classes: css.label }, ['Hello, Dojo World!']),
			v('h3', { title: 'I am a title!' }, ['Biz-E-Bodies from the widget'])
		]);
	}
}

export default Banner;
