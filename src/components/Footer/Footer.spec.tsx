import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

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
})
