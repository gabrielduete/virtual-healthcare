import Links from '.'

import { render, screen } from '@testing-library/react'

import { itemsLinks } from '../../Footer.data'

describe('<Links />', () => {
  beforeEach(() => {
    render(<Links title={itemsLinks[0].title} items={itemsLinks[0].texts} />)
  })

  const texts = itemsLinks[0].texts.map(item => item.text)

  it('should render title correctly', () => {
    screen.getByText(itemsLinks[0].title)
  })

  it.each(texts)('shold render %s texts correctly', text => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
