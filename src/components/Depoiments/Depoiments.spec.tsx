import { fireEvent, render, screen } from '@testing-library/react'

import Depoiments from '.'
import { DEPOIMENTS } from './Depoiments.data'
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
    expect(screen.getByText('What our customer are saying')).toBeInTheDocument()
  })

  it.each(Array.from(Array(4).keys()))(
    'should render %s step correctly when current button is clicked',
    id => {
      const button = screen.getByTestId(`depoiments-arrow__id-${id}`)

      fireEvent.click(button)

      expect(screen.getByText(DEPOIMENTS[id].jobRole)).toBeInTheDocument()
    }
  )

  it('should render prev step when arrow back is clicked', () => {
    const arrow = screen.getByTestId('depoiments-arrow__id-arrowBack')
    const button = screen.getByTestId('depoiments-arrow__id-1')

    fireEvent.click(button)
    fireEvent.click(arrow)

    expect(screen.getByText(DEPOIMENTS[0].jobRole)).toBeInTheDocument()
  })

  it('should render next step when arrow forward is clicked', () => {
    const arrow = screen.getByTestId('depoiments-arrow__id-arrowForward')

    fireEvent.click(arrow)

    expect(screen.getByText(DEPOIMENTS[1].jobRole)).toBeInTheDocument()
  })
})
