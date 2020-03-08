import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { spy } from 'sinon'
import Item from '@/components/Item.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Item.vue', () => {
  let wrapper
  let propsData = {
    onSelect: spy(),
    data: {
      type: 'ADMISSION',
      status: 'DECLINED',
      amount: 1234,
      created: 'Mon Nov 24 2003 10:39:50 GMT+0000 (UTC)',
    },
  }

  beforeEach(function() {
    wrapper = mount(Item, {
      propsData,
      localVue,
      router,
    })
  })

  it('should work without exploding 😄', () => {
    expect(wrapper.exists()).to.be.true
  })

  describe('render', () => {
    it('should render a `.link` classname', () => {
      expect(wrapper.classes('link')).to.be.true
    })
  })

  describe('computed', () => {
    it('amount', () => {
      expect(wrapper.vm.amount).to.equal('1,234')
    })

    it('created', () => {
      expect(wrapper.vm.created).to.equal('Mo/39/2003 12:39:50')
    })

    it('classObject', () => {
      expect(wrapper.vm.classObject.selected).to.be.false
      expect(wrapper.vm.classObject.success).to.be.false
      expect(wrapper.vm.classObject.fail).to.be.true
    })
  })

  xit('should call the `onSelect` function when clicked', async () => {
    expect(propsData.onSelect.called).to.be.false
    wrapper.find('.item').trigger('click')
    await wrapper.vm.$nextTick()
    expect(propsData.onSelect.called).to.be.true
  })
})
