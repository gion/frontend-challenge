import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import PersonCard from '@/components/PersonCard.vue'

describe('PersonCard.vue', () => {
  let propsData = {}
  let wrapper

  beforeEach(function() {
    wrapper = shallowMount(PersonCard, {
      propsData
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('computed', () => {
    it('should compute fullName', () => {
      const firstName = 'foo'
      const lastName = 'bar'
      const expectedName = `${firstName} ${lastName}`

      wrapper.setProps({
        firstName,
        lastName,
      })

      expect(wrapper.vm.fullName).to.equal(expectedName)
    })
  })

  describe('render', () => {
    it('should render a `<div />` element with the `.personCard` classname', () => {
      expect(wrapper.is('div')).to.be.true
      expect(wrapper.classes('personCard')).to.be.true
    })

    // for some reason, this doesn't work as expected
    // I think `setProps` doesn't trigger an immediate update,
    // so I can't test the props reativity
    // I may be wrong (although some had a similar issue: https://github.com/vuejs/vue-test-utils/issues/402), since I'm new to vue,
    // but I'll come back to this after the main functionality is done

    // @TODO: fix the props tests
    // describe('props', () => {
    //   it('should render the computed full name', () => {
    //     const firstName = 'foo'
    //     const lastName = 'bar'
    //     const expectedName = `${firstName} ${lastName}`

    //     wrapper.setProps({
    //       firstName,
    //       lastName,
    //     })

    //     console.log('props', wrapper.props)

    //     expect(wrapper.find('.name').text()).to.equal(expectedName)
    //   })

    //   it('should correctly render the title', async () => {
    //     const title = 'some title'
    //     wrapper.setProps({title})
    //     wrapper.vm.$parent.$forceUpdate();

    //     // expect(wrapper.vm.title).to.equal(title)
    //     expect(wrapper.find('.title').text()).to.equal(title)
    //   })

    //   xit('should correctly render the details', () => {
    //     const details = {
    //       foo: 'bar',
    //       bar: 'baz'
    //     }

    //     wrapper.setProps({details})

    //     const items = wrapper.findAll('.details > li')

    //     Object.entries(details).forEach(([key, value], index) => {
    //       const item = items.at(index)

    //       expect(item.find('.detailsKey').text()).to.equal(key)
    //       expect(item.find('.detailsValue').text()).to.equal(value)
    //     })
    //   })
    // })
  })
})
