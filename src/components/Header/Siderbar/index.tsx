import Texts from '../Texts'
import { TEXTS_SIDEBAR } from '../Header.data'
import CloseIcon from '@mui/icons-material/Close'

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
          rounded-bl-2xl
          bg-blue-500
          text-white
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
      <CloseIcon className='self-end w-7' onClick={onClose} />
      <Texts items={TEXTS_SIDEBAR} isColumn={true} />
    </nav>
  )
}

export default SideBar
