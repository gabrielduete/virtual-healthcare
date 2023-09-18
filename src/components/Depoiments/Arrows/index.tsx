import { useContext } from 'react'
import { DepoimentsContext } from '../context'

import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { DEPOIMENTS } from '../Depoiments.data'

const Arrows = () => {
  const { goToStep, nextStep, prevStep, step, firstStep, lastStep } =
    useContext(DepoimentsContext)

  return (
    <div className='flex items-center gap-20 max-sm:gap-12'>
      <ArrowBack
        className={`cursor-pointer ${
          firstStep ? 'text-sky-300' : 'text-blue-500'
        }`}
        onClick={() => prevStep()}
      />
      <div className='flex gap-4'>
        {DEPOIMENTS.map(({ id }) => {
          return (
            <div
              className={`w-2.5	h-2.5 rounded-full cursor-pointer ${
                id === step ? 'bg-blue-500' : 'bg-sky-300'
              }`}
              onClick={() => goToStep(id)}
              key={id}
            />
          )
        })}
      </div>
      <ArrowForward
        className={`cursor-pointer ${
          lastStep ? 'text-sky-300' : 'text-blue-500'
        }`}
        onClick={() => nextStep()}
      />
    </div>
  )
}

export default Arrows
