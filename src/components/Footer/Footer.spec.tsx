import { render, screen } from '@testing-library/react'

import items from './Footer.data'

import Footer from '.'

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  const itemsTexts = items.map(item => item.title)

  it('should section about correctly', () => {
    expect(
      screen.getByText(
        /Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Trafalgar PTY LTD 2020. All rights reserved/i)
    ).toBeInTheDocument()
  })

  it.each(itemsTexts)('shold render %s section items correctly', title => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
