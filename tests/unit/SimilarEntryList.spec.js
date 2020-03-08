import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SimilarEntryList from '@/components/SimilarEntryList.vue'
import Card from '@/components/Card.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SimilarEntryList.vue', () => {
  let wrapper
  let propsData = { items: [], selectedItemId: '' }
  let getters = {
    items: () => [
      { index: 1, guid: 'guid1', type: 'a', status: 'done' },
      { index: 2, guid: 'guid2', type: 'a', status: 'in progress' },
      { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
    ],
    selectedItemId: () => 'guid2',
    selectedItem: () => ({
      index: 2,
      guid: 'guid2',
      type: 'a',
      status: 'in progress',
    }),
  }
  let store

  beforeEach(function() {
    store = new Vuex.Store({
      getters,
    })

    wrapper = shallowMount(SimilarEntryList, {
      propsData,
      localVue,
      store,
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
      const newGetters = {
        items: () => [],
      }

      const wrapper2 = shallowMount(SimilarEntryList, {
        propsData,
        localVue,
        store: new Vuex.Store({
          getters: {
            ...getters,
            ...newGetters,
          },
        }),
      })

      expect(wrapper2.find('.empty').exists()).to.be.true
      expect(wrapper2.findAll(Card).length).to.equal(0)
    })

    it('should render a `.similarEntry` Card for each entry in the similarEntryList', () => {
      expect(wrapper.findAll('.similarEntry').length).to.equal(
        wrapper.vm.similarEntryList.length,
      )
    })
  })

  describe('computed', () => {
    it('unselectedItems', () => {
      expect(wrapper.vm.unselectedItems).to.deep.equal([
        { index: 1, guid: 'guid1', type: 'a', status: 'done' },
        { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
      ])
    })

    it('similarEntryList', () => {
      expect(wrapper.vm.similarEntryList).to.deep.equal([
        { index: 3, guid: 'guid3', type: 'a', status: 'in progress' },
      ])

      const newGetters = {
        selectedItem: () => null,
      }

      const wrapper2 = shallowMount(SimilarEntryList, {
        propsData,
        localVue,
        store: new Vuex.Store({
          getters: {
            ...getters,
            ...newGetters,
          },
        }),
      })
      expect(wrapper2.vm.similarEntryList).to.deep.equal([])
    })

    it('isEmpty', () => {
      expect(wrapper.vm.isEmpty).to.be.false
    })
  })
})
