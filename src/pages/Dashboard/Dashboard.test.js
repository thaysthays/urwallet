import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Dashboard from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Dashboard', () => {
  it('should render dashboard', () => {
    const { container } = renderWithRouter(<Dashboard />)

    expect(container).toBeVisible()
  })
})
