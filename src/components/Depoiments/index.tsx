import Arrows from './Arrows'
import Card from './Card'

import { DepoimentsStorage } from './context'

const Depoiments = () => {
  return (
    <DepoimentsStorage>
      <section className='flex flex-col items-center justify-center px-9 mb-56'>
        <Card
          image='image'
          depoiment='depoiments'
          jobRole='jobRole'
          name='name'
        />
        <Arrows />
      </section>
    </DepoimentsStorage>
  )
}

export default Depoiments
