import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Layout from '@/components/Layout.vue'

describe('Layout.vue', () => {
  let propsData = {}
  let wrapper

  beforeEach(function() {
    wrapper = shallowMount(Layout, {
      propsData
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('render', () => {
    it('should render a `<div />` element with the `.layout` classname', () => {
      expect(wrapper.is('div')).to.be.true
      expect(wrapper.classes('layout')).to.be.true
    })

    describe('slots', () => {
      it('should render 3 default slots if none is provided', () => {
        expect(wrapper.find('.leftPanel').text()).to.equal('left panel')
        expect(wrapper.find('.topCell').text()).to.equal('top cell')
        expect(wrapper.find('.bottomCell').text()).to.equal('bottom cell')
      })

      it('should correctly render each slot', () => {
        const slots = {
          leftPanel: 'some left panel data',
          topCell: 'foo bar',
          bottomCell: 'some other content',
        }
        wrapper.setProps({slots})

        Object.entries(slots, ([slotName, slotContent]) =>
          expect(wrapper.find(`.${slotName}`).text()).to.equal(slotContent)
      )})
    })
  })
})
