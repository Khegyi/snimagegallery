import { shallow } from 'enzyme'
import React from 'react'
import { AdvancedGridList, pickTile } from '../src/components/AdvancedGridList'

describe('AdvancedGridList', () => {
  const testprops = {
    openFunction: jest.fn(),
    imgList: [],
  }
  it('Matches snapshot', () => {
    const wrapper = shallow(<AdvancedGridList {...testprops} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('pickTile', () => {
    it('should return 1 or 2', () => {
      const value = pickTile(456)
      expect(value).toBe(2)
    })
  })
})
