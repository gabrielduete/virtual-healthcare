import { useState } from 'react'
import Logo from './Logo'
import Texts from './Texts'
import SideBar from './Siderbar'

import MenuIcon from '@mui/icons-material/Menu'

import { TEXTS_SIDEBAR } from './Header.data'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <header className='flex justify-between items-center p-4 xl:px-48 xl:py-16'>
        <Logo />
        <nav className='hidden xl:block'>
          <Texts items={TEXTS_SIDEBAR} />
        </nav>
        <MenuIcon onClick={() => setIsOpen(true)} className='block xl:hidden' />
      </header>
    </>
  )
}

export default Header
