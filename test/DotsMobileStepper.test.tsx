import { mount } from 'enzyme'
import React from 'react'
import { Button } from '@material-ui/core'
import { DotsMobileStepper } from '../src/components/DotsMobileStepper'

describe('handleNext', () => {
  const proba = {
    imageIndex: 1,
    steppingFunction: jest.fn(),
    imageListLenght: 1,
  }
  it('Matches snapshot', () => {
    const wrapper = mount(<DotsMobileStepper {...proba} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Handle Next Click', () => {
    const l = mount(<DotsMobileStepper {...proba} />)
    l.find(Button)
      .last()
      .simulate('click')
    expect(proba.steppingFunction).toBeCalledWith(2, false)
  })
  it('Handle Back Click', () => {
    const l = mount(<DotsMobileStepper {...proba} />)
    l.find(Button)
      .first()
      .simulate('click')
    expect(proba.steppingFunction).toBeCalledWith(0, false)
  })
})