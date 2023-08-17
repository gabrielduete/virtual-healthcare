import { render, waitFor, screen } from '@testing-library/react'

import { TEXTS_SIDEBAR } from './Header.data'

import Header from '.'

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it.each(TEXTS_SIDEBAR)('should render %p correctly', text => {
    waitFor(() => expect(screen.getByText(text)).toBeInTheDocument())
  })

  it('should render logo correctly', () => {
    const title = 'Trafalgar'

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
