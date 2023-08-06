import { render, waitFor, screen } from '@testing-library/react'

import { TEXTS_SIDEBAR } from '../Header.data'

import SideBar from '.'

describe('<SideBar />', () => {
  it.each(TEXTS_SIDEBAR)('should render text %p when isOpen is true', text => {
    render(
      <SideBar
        isOpen={true}
        onClose={() => {
          console.log('como é amigo?')
        }}
      />
    )

    expect(screen.getByText(text)).toBeInTheDocument()
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
