import Texts from '../Texts'
import { TEXTS_SIDEBAR } from '../Header.data'

type SideBarProps = {
  isOpen: boolean
  onClose: () => void
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <nav
      className={`
          right-0
          top-0
          h-screen
          bg-sky-100
          flex
          flex-col
          gap-2
          justify-start
          items-center
          p-7
          max-w-xs
          ${isOpen ? 'absolute' : 'hidden'}
        `}
    >
      <span className='self-end text-xl' onClick={() => onClose()}>
        X
      </span>
      <Texts items={TEXTS_SIDEBAR} isColumn={true} />
    </nav>
  )
}

export default SideBar
