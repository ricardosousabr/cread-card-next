/**
 * @jest-environment jsdom
 */

import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

test('HomePage snapshot', () => {
  const component = renderer.create(<Button />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
