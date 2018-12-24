import Button from '../../../packages/button'
import { shallowMount } from '@vue/test-utils'

describe('Button.vue', () => {
  it('create a default button', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.classes('wen-button')).toBe(true)
  })
  it('create a primary button', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'primary'
      }
    })
    expect(wrapper.classes('wen-button')).toBe(true)
    expect(wrapper.classes('wen-button--primary')).toBe(true)
    expect(wrapper.props('type')).toBe('primary')
  })
  it('create a default size button', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        size: 'default'
      }
    })
    expect(wrapper.classes('wen-button')).toBe(true)
    expect(wrapper.classes('wen-button--primary')).toBe(true)
    expect(wrapper.attributes('width')).toBe('primary')
  })
})
