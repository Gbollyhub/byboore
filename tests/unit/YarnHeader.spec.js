import { mount } from '@vue/test-utils'
import YarnHeader from '@/components/YarnHeader/YarnHeader.vue'

describe('YarnHeader.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = mount(YarnHeader, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
