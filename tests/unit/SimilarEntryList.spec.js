import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SimilarEntryList from '@/components/SimilarEntryList.vue'
import Card from '@/components/Card.vue'

describe('SimilarEntryList.vue', () => {
  let wrapper
  let propsData = { items: [], selectedItemId: '' }

  beforeEach(function() {
    wrapper = shallowMount(SimilarEntryList, {
      propsData,
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('render', () => {
    it('should render a `<div />` element with the `.similarEntryList` classname', () => {
      expect(wrapper.is('div')).to.be.true
      expect(wrapper.classes('similarEntryList')).to.be.true
    })

    it('should render only the empty message when no items provided', () => {
      expect(wrapper.find('.empty').exists()).to.be.true
      expect(wrapper.findAll(Card).length).to.equal(0)
    })

    it('should render a `similarEntry` Card for each entry in the items data', () => {
      expect(wrapper.findAll('.similarEntry').length).to.equal(
        wrapper.vm.items.length,
      )
    })
  })

  describe('computed', () => {
    it('selectedItem', () => {
      expect(wrapper.vm.selectedItem).to.not.be.ok

      wrapper.setProps({
        items: [
          { index: 1, guid: 'guid1' },
          { index: 2, guid: 'guid2' },
          { index: 3, guid: 'guid3' },
        ],
        selectedItemId: 'guid2',
      })

      expect(wrapper.vm.selectedItem).to.deep.equal({ index: 2, guid: 'guid2' })
    })

    it('unselectedItems', () => {
      expect(wrapper.vm.unselectedItems).to.deep.equal([])

      wrapper.setProps({
        items: [
          { index: 1, guid: 'guid1' },
          { index: 2, guid: 'guid2' },
          { index: 3, guid: 'guid3' },
        ],
        selectedItemId: 'guid2',
      })

      expect(wrapper.vm.unselectedItems).to.deep.equal([
        { index: 1, guid: 'guid1' },
        { index: 3, guid: 'guid3' },
      ])
    })

    it('similarEntryList', () => {
      expect(wrapper.vm.similarEntryList).to.deep.equal([])

      wrapper.setProps({
        items: [
          { index: 1, guid: 'guid1', type: 'a', status: 'done' },
          { index: 2, guid: 'guid2', type: 'a', status: 'in progress' },
          { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
        ],
        selectedItemId: 'guid2',
      })

      expect(wrapper.vm.similarEntryList).to.deep.equal([
        { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
      ])
    })

    it('isEmpty', () => {
      expect(wrapper.vm.isEmpty).to.be.true

      wrapper.setProps({
        items: [
          { index: 1, guid: 'guid1', type: 'a', status: 'done' },
          { index: 2, guid: 'guid2', type: 'a', status: 'in progress' },
          { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
        ],
        selectedItemId: 'guid2',
      })

      expect(wrapper.vm.isEmpty).to.be.false
    })
  })
})
