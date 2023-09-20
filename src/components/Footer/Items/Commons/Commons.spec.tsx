import Commons from '.'

import { itemsCommons } from '../../Footer.data'

import { render, screen } from '@testing-library/react'

describe('<Commons />', () => {
  beforeEach(() => {
    render(
      <Commons title={itemsCommons[0].title} items={itemsCommons[0].texts} />
    )
  })

  const texts = itemsCommons[0].texts

  it('should render title correctly', () => {
    screen.getByText(itemsCommons[0].title)
  })

  it.each(texts)('shold render %s texts correctly', text => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
