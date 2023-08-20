import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import SectionApps from '.'

describe('<SectionApps />', () => {
  beforeEach(() => {
    render(<SectionApps />)
  })

  it('should render texts and buttons correctly', () => {
    expect(screen.getByText(/Download our mobile apps/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/Download /i)).toBeInTheDocument()
  })

  it('should render image in desktop correctly', () => {
    expect(
      screen.getByAltText('Decorative healthcare apps')
    ).toBeInTheDocument()
  })

  it('should dont render image in mobile', () => {
    window.innerWidth = 500

    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(
        screen.getByAltText('Decorative healthcare apps')
      ).not.toBeInTheDocument()
    })
  })
})
