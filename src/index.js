import _ from 'lodash';

import { boilerPlate } from './mainPage';
import { orderNow } from './orderNow';
import { menuContent } from './menu';
import { faqContent } from './faq';

boilerPlate();

const orderNowB= document.getElementById('orderNowB');
const menuB= document.getElementById('menuB');
const faqB= document.getElementById('faqB')

orderNowB.addEventListener('click', orderNow);
menuB.addEventListener('click', menuContent);
faqB.addEventListener('click', faqContent);