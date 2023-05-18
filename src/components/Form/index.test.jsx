/**
 * @jest-environment jsdom
 */

import React from 'react'
import Form from './index'
import renderer from 'react-test-renderer'

test('HomePage snapshot', () => {
  const component = renderer.create(<Form />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
