import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  const setup = props => {
    render(<Button {...props} />)
  }

  const getButton = () => {
    return screen.getByRole('button', { name: /default/i })
  }

  const defaultProps = {
    content: 'default',
    padding: 'px-11',
    style: 'filled',
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-500',
  }

  it('should render content correctly', () => {
    const content = 'One night with you'

    setup({
      ...defaultProps,
      content,
    })

    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it('should change textColro prop correctly', () => {
    setup(defaultProps)

    const button = getButton()

    expect(button).toHaveClass('text-blue-500')
  })

  it('should change bgColor prop correctly', () => {
    setup({ ...defaultProps, bgColor: 'bg-black' })

    const button = getButton()

    expect(button).toHaveClass('bg-black')
  })

  it('should change padding prop correctly', () => {
    setup({ ...defaultProps, padding: 'px-10' })

    const button = getButton()

    expect(button).toHaveClass('px-10')
  })

  it('should render outlined style correctly', () => {
    setup({ ...defaultProps, style: 'outlined' })

    const button = getButton()

    expect(button).toHaveClass('outline outline-2')
  })
})
