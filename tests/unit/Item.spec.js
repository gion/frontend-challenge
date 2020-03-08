import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { spy } from 'sinon'
import moment from 'moment'
import Item from '@/components/Item.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Item.vue', () => {
  let wrapper
  let propsData = {
    onSelect: spy(),
    selected: false,
    data: {
      guid: 'guid',
      type: 'ADMISSION',
      status: 'DECLINED',
      amount: 1234,
      created: '2003-11-24T10:39:50.000Z',
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
      expect(wrapper.vm.created).to.equal(
        moment('2003-11-24T10:39:50.000Z').format('dd/mm/YYYY hh:mm:ss'),
      )
    })

    it('classObject', () => {
      expect(wrapper.vm.classObject.selected).to.be.false
      expect(wrapper.vm.classObject.success).to.be.false
      expect(wrapper.vm.classObject.fail).to.be.true
    })

    it('itemUrl', () => {
      expect(wrapper.vm.itemUrl).to.equal('/list/guid')
      wrapper.setProps({ selected: true })
      expect(wrapper.vm.itemUrl).to.equal('/list')
    })
  })

  it('should call the `onSelect` function when calling `handleClick`', async () => {
    expect(propsData.onSelect.called).to.be.false
    // wrapper.find('.item').trigger('click')
    wrapper.vm.handleClick()
    await wrapper.vm.$nextTick()
    expect(propsData.onSelect.called).to.be.true
  })
})
