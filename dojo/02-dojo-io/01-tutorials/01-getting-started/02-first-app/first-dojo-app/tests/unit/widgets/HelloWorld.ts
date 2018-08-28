const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';

import { v, w } from '@dojo/framework/widget-core/d';

import HelloWorld from '../../../src/hello-widget/HelloWorld';
import * as css from '../../../src/hello-widget/HelloWorld.m.css';

const logo = require('./../../../src/img/logo.svg');

describe('HelloWorld', () => {
	it('should render widget', () => {
		var html = v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			v('div', { classes: css.label }, ['Hello, Dojo World!']),
			v('h3', { title: 'I am a title!' }, ['Biz-E-Bodies from the widget'])
		]);
		const h = harness(() => w(HelloWorld, {}));
		h.expect(() => html);
	});
});
