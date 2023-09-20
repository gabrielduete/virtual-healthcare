import { render, waitFor, screen } from '@testing-library/react'

import { TEXTS_SIDEBAR } from './Header.data'

import Header from '.'

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />)
  })

  const texts = TEXTS_SIDEBAR.map(text => text.name)

  it.each(texts)('should render %p correctly', name => {
    waitFor(() => expect(screen.getByText(name)).toBeInTheDocument())
  })

  it('should render logo correctly', () => {
    const title = 'Trafalgar'

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
