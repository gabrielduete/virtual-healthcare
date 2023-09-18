import { useContext } from 'react'
import { DepoimentsContext } from '../context'

import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { DEPOIMENTS } from '../Depoiments.data'

const Arrows = () => {
  const { goToStep } = useContext(DepoimentsContext)

  return (
    <div className='flex items-center gap-4'>
      <ArrowBack className='cursor-pointer' />
      {DEPOIMENTS.map(({ id }) => {
        return (
          <div
            className='w-2.5	h-2.5 rounded-full cursor-pointer bg-sky-300 bg-blue-500'
            onClick={() => goToStep(id)}
            key={id}
          />
        )
      })}
      <ArrowForward className='cursor-pointer' />
    </div>
  )
}

export default Arrows
