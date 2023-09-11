import { render, screen } from '@testing-library/react'

import { CARDS } from './Cards/Cards.data'

import SectionServices from '.'

describe('<SectionServices />', () => {
  beforeEach(() => {
    render(<SectionServices />)
  })

  const items = CARDS.map(card => card.title)

  it('should render title, subtitle and button correctly', () => {
    expect(screen.getByText(/Our services/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/Learn more/i)).toBeInTheDocument()
  })

  it.each(items)('shold render %s title card correctly', title => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
