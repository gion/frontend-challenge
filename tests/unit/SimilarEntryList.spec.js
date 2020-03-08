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
    isLoading: () => false,
    error: () => null,
    items: () => [],
    selectedItemId: () => null,
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
      expect(wrapper.find('.empty').exists()).to.be.true
      expect(wrapper.findAll(Card).length).to.equal(0)
    })

    it('should render a `similarEntry` Card for each entry in the items data', () => {
      expect(wrapper.findAll('.similarEntry').length).to.equal(
        wrapper.vm.items.length,
      )
    })
  })
})
