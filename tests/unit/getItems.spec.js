import { expect } from 'chai'
import { getItems } from '@/services/getItems'

describe('getItems()', () => {
  it('should return a Promise', () => {
    expect(getItems()).to.be.an.instanceof(Promise)
  })
})
