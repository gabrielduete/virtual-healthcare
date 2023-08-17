import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import Introduction from '.'

describe('<Introduction />', () => {
  beforeEach(() => {
    render(<Introduction />)
  })

  it('should render texts correctly', () => {
    const title = 'Virtual healthcare for you'
    const subTitle =
      'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone'

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(subTitle)).toBeInTheDocument()
  })

  it('should render button correctly', () => {
    const button = 'Consult today'

    expect(screen.getByText(button)).toBeInTheDocument()
  })

  it('should render image correctly', () => {
    const altImage = 'Decorative medical design'

    expect(screen.getByAltText(altImage)).toBeInTheDocument()
  })

  it('should hidden image in mobile', () => {
    const altImage = 'Decorative medical design'

    window.innerWidth = 500

    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.getByAltText(altImage)).not.toBeInTheDocument()
    })
  })
})
