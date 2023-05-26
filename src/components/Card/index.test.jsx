/**
 * @jest-environment jsdom
 */

import React from 'react'
import Card from './index'
import renderer from 'react-test-renderer'

test('HomePage snapshot', () => {
  const component = renderer.create(<Card data />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
