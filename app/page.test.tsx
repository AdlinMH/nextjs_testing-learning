import '@testing-library/jest-dom'

import React from 'react'
import {act, render, screen} from '@testing-library/react'

import Home from './page'

test("button has correct initial color", () => {
  render(<Home />)

  // find an element with a role of button and ext of "Change to Blue"
  const colorButton = screen.getByRole('button', { name: "Change to Blue" })

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test("button clicked and changes the color", () => {
  render(<Home />)

  // find an element with a role of button and ext of "Change to Blue"
  const colorButton = screen.getByRole('button', { name: "Change to Blue" })
  act(() => {
    /* fire events that update state */
    colorButton.click()
  });
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})
