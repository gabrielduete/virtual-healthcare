import Logo from '../Logo'
import Item from './Item'

import items from './Footer.data'

const Footer = () => {
  return (
    <footer
      className='
        flex
        max-lg:flex-col
        items-center
        max-lg:items-start
        justify-center
        gap-48
        max-lg:gap-20
        py-28
        px-14
        bg-gradient-to-b
        from-sky-300
        to-blue-500
        text-white
      '
    >
      <div className='max-w-[330px]'>
        <Logo type='white' />
        <p className='mt-5'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className='mt-7'>
          &copy; Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </div>
      <div className='flex max-lg:flex-col gap-40 max-lg:gap-14'>
        {items.map(({ title, texts }) => {
          return <Item title={title} items={texts} key={title} />
        })}
      </div>
    </footer>
  )
}

export default Footer
