import { useState } from 'react'
import Logo from '../Logo'
import Texts from './Texts'
import SideBar from './Siderbar'

import MenuIcon from '@mui/icons-material/Menu'

import { TEXTS_SIDEBAR } from './Header.data'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white'>
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className='flex justify-between items-center p-4 xl:px-48'>
        <Logo type='black' />
        <nav className='hidden xl:block'>
          <Texts items={TEXTS_SIDEBAR} />
        </nav>
        <MenuIcon onClick={() => setIsOpen(true)} className='block xl:hidden' />
      </div>
    </header>
  )
}

export default Header
