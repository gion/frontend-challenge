import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ItemList from '@/components/ItemList.vue'

describe('ItemList.vue', () => {
  let propsData = { people: [{}] }
  let wrapper

  beforeEach(function() {
    wrapper = mount(ItemList, {
      propsData,
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('render', () => {
    it('should render a `<div />` element with the `.itemList` classname', () => {
      expect(wrapper.is('div')).to.be.true
      expect(wrapper.classes('itemList')).to.be.true
    })

    it('should render an `.item` for each entry in the items data', () => {
      expect(wrapper.findAll('.item').length).to.equal(wrapper.vm.items.length)
    })
  })
})
