import { expect } from 'chai'
import { stub } from 'sinon'
import { shallowMount } from '@vue/test-utils'
import ItemList from '@/components/ItemList.vue'

describe('ItemList.vue', () => {
  let wrapper
  let propsData = { getItems: () => {} }

  stub(propsData, 'getItems').resolves([])

  beforeEach(function() {
    wrapper = shallowMount(ItemList, {
      propsData,
      data() {
        return {
          error: null,
          isLoading: true,
        }
      },
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

    it('should render only the error message if an error is set', () => {
      expect(wrapper.find('.error').exists()).to.be.false

      // I still don't know why updating the props/data
      // doesn't trigger a "render" in unit tests
      // so I just created a new wrapper to test whith a different state
      const wrapperWithError = shallowMount(ItemList, {
        data() {
          return {
            error: 'some error',
          }
        },
      })

      expect(wrapperWithError.find('.error').exists()).to.be.true
      expect(wrapperWithError.findAll('.item').length).to.equal(0)
      expect(wrapperWithError.find('.loading').exists()).to.be.false
    })

    it('should render an `.item` for each entry in the items data', () => {
      expect(wrapper.findAll('.item').length).to.equal(wrapper.vm.items.length)
    })
  })

  describe('mount', () => {
    it('should call `this.getItems()` when mounted', async () => {
      await wrapper.vm.$mount()
      expect(propsData.getItems.called).to.be.true
    })

    it('should not set the error message if `this.getItems()` is succesfull', async () => {
      await wrapper.vm.$mount()
      expect(wrapper.vm.error).to.equal(null)
    })

    it('should set the error message when `this.getItems()` fails', async () => {
      const error = { message: 'some error' }
      const p = { getItems: () => {} }
      stub(p, 'getItems').rejects(error)

      const wrapper2 = shallowMount(ItemList, {
        propsData: p,
      })

      await wrapper2.vm.$mount()
      expect(wrapper2.vm.error).to.equal(error)
    })

    it('should set `isLoading` to false after retrieving items', async () => {
      await wrapper.vm.$mount()
      expect(wrapper.vm.isLoading).to.be.false
    })
  })
})
