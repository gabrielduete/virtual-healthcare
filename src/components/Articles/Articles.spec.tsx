import { render, screen } from '@testing-library/react'

import { infosCards } from './Cards/Cards.data'

import Articles from '.'

describe('<Articles />', () => {
  beforeEach(() => {
    render(<Articles />)
  })

  const items = infosCards.map(card => card.title)

  it('should render title, subtitle and button correctly', () => {
    expect(
      screen.getByText(/Check out our latest article/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/View all/i)).toBeInTheDocument()
  })

  it.each(items)('shold render %s title card correctly', title => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
