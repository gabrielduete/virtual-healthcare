import { render, screen } from '@testing-library/react'

import Depoiments from '.'
import { DepoimentsStorage } from './context'

describe('<Depoiments />', () => {
  beforeEach(() => {
    render(
      <DepoimentsStorage>
        <Depoiments />
      </DepoimentsStorage>
    )
  })

  it('should render title correctly', () => {
    screen.getByText('What our customer are saying')
  })

  it.todo('test slide')
})
