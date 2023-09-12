import { render, screen } from '@testing-library/react'

import Item from '.'

describe('<Item />', () => {
  const mockItems = ['Cazuza', 'Titãs', 'Mamonas Assassinas']

  beforeEach(() => {
    render(<Item title='Raul Seixas' items={mockItems} />)
  })

  it('should render title correctly', () => {
    screen.getByText('Raul Seixas')
  })

  it.each(mockItems)('shold render %s texts correctly', title => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
