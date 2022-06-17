import { mount } from '@vue/test-utils'
import YarnContentSelection from '@/components/YarnContentSelection/YarnContentSelection.vue'

describe('YarnContentSelection.vue', () => {
  it('renders selectedColors', () => {
    
    const wrapper = mount(YarnContentSelection)
    const temp = wrapper.get('[data-test="selectedColors"]')
    expect(wrapper.findAll('[data-test="selectedColors"]')).toHaveLength(5)
  })
})
