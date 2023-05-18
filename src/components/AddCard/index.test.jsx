/**
 * @jest-environment jsdom
 */

import React from 'react'
import AddCard from './index'
import renderer from 'react-test-renderer'

test('HomePage snapshot', () => {
  const component = renderer.create(<AddCard />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
