import { configure } from '@storybook/vue';
import Vue from 'vue';
import Mybutton from '../packages/button/button.vue';
Vue.component('my-button', Mybutton);
function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
