import Arrows from './Arrows'
import Cards from './Cards'

import { DepoimentsStorage } from './context'

const Depoiments = () => {
  return (
    <DepoimentsStorage>
      <section
        className='flex flex-col items-center justify-center px-9 mb-56'
        id='testimonials'
      >
        <Cards />
        <Arrows />
      </section>
    </DepoimentsStorage>
  )
}

export default Depoiments
