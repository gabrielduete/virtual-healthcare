import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import SectionProviders from '.'

describe('<SectionProviders />', () => {
  beforeEach(() => {
    render(<SectionProviders />)
  })

  it('should render texts and buttons correctly', () => {
    expect(
      screen.getByText(/Leading healthcare providers/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/Learn more/i)).toBeInTheDocument()
  })

  it('should render image in desktop correctly', () => {
    expect(
      screen.getByAltText('Decorative healthcare providers')
    ).toBeInTheDocument()
  })

  it('should dont render image in mobile', () => {
    window.innerWidth = 500

    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(
        screen.getByAltText('Decorative healthcare providers')
      ).not.toBeInTheDocument()
    })
  })
})
