import { render, waitFor, screen } from '@testing-library/react'

import { TEXTS_SIDEBAR } from '../Header.data'

import SideBar from '.'

describe('<SideBar />', () => {
  const items = TEXTS_SIDEBAR.map(item => item.name)

  it.each(items)('should render text %p when isOpen is true', name => {
    render(
      <SideBar
        isOpen={true}
        onClose={() => {
          console.log('como é amigo?')
        }}
      />
    )

    expect(screen.getByText(name)).toBeInTheDocument()
  })

  it('close sideBar when isOpen is false', () => {
    render(
      <SideBar
        isOpen={false}
        onClose={() => {
          console.log('como é amigo?')
        }}
      />
    )

    waitFor(() => {
      expect(TEXTS_SIDEBAR[0]).not.toBeInTheDocument()
    })
  })
})
