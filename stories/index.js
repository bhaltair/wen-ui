/* eslint-disable */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs } from 'storybook-readme';
import ButtonReadme from '../packages/button/README.md';
import MyButton from '../packages/button/button.vue';

storiesOf('MyButton', module)
  .add('types', withReadme(ButtonReadme, () => ({
    components: { MyButton },
    template: `
      <div>
        <my-button type="default" size="normal">默认按钮</my-button>
        <my-button type="primary" size="normal">主要按钮</my-button>
      </div>
    `,
    methods: { action: action('clicked') }
  })))
  .add('with size', () => ({
    components: { MyButton },
    template: '<my-button @click="action" type="primary" size="large">Hello Button233</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">? ? ? ?</my-button>',
    methods: { action: action('clicked') },
  }));
