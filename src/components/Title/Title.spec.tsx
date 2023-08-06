import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render title correctly', () => {
    const title = 'Shiryu amigo'

    render(<Title content={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
