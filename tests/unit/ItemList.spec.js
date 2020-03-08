import { expect } from 'chai'
import { stub } from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ItemList from '@/components/ItemList.vue'
import Item from '@/components/Item.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ItemList.vue', () => {
  let wrapper
  let propsData = { getItems: () => {} }
  let getters = {
    isLoading: () => false,
    error: () => null,
    items: () => [],
    selectedItemId: () => null,
  }
  let store

  stub(propsData, 'getItems').resolves([])

  beforeEach(function() {
    store = new Vuex.Store({
      getters,
    })

    wrapper = shallowMount(ItemList, {
      propsData,
      localVue,
      store,
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

    it('should render an `Item` for each entry in the items data', () => {
      expect(wrapper.findAll(Item).length).to.equal(wrapper.vm.items.length)
    })
  })
})
