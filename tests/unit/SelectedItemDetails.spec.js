import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import SelectedItemDetails from '@/components/SelectedItemDetails.vue'
import PersonCard from '@/components/PersonCard.vue'

describe('SelectedItemDetails.vue', () => {
  let propsData = {people: [{}]}
  let wrapper

  beforeEach(function() {
    wrapper = mount(SelectedItemDetails, {
      propsData
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('computed', () => {
    it('should compute isEmpty', () => {
      expect(wrapper.vm.isEmpty).to.be.false

      wrapper.setProps({
        people: []
      })

      expect(wrapper.vm.isEmpty).to.be.true
    })
  })

  describe('render', () => {
    it('should render a `<div />` element with the `.selectedItemDetails` classname', () => {
      expect(wrapper.is('div')).to.be.true
      expect(wrapper.classes('selectedItemDetails')).to.be.true
    })

    it('should render a `PersonCard` for each entry in the people prop', () => {
      expect(wrapper.findAll(PersonCard).length).to.equal(wrapper.vm.people.length)
    })
  })
})
