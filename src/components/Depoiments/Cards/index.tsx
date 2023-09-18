/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { DepoimentsContext } from '../context'
import Title from '../../Title'
import { DEPOIMENTS } from '../Depoiments.data'

const Card = () => {
  const { step } = useContext(DepoimentsContext)
  const { image, name, jobRole, depoiment } = DEPOIMENTS[step]

  return (
    <div
      className='
        flex
        flex-col
        items-center
        justify-center
        mb-10
        text-white
        transition delay-150 duration-300 ease-in-out
      '
    >
      <div className='flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-blue-500 p-16 rounded-3xl '>
        <Title
          color='white'
          fontSize='text-4xl'
          hasLine={true}
          linePositionCenter={true}
        >
          What our customer are saying
        </Title>
        <div className='flex max-md:flex-col items-center justify-center mt-16 gap-24 max-sm:gap-16'>
          <div className='flex max-sm:flex-col items-center justify-center gap-7'>
            <img
              src={image}
              alt={`Profile pic for ${name}`}
              className='w-32 rounded-full border-solid border-2 border-white'
            />
            <div className='flex flex-col justify-center max-sm:items-center w-44 m-sm:m-w-44'>
              <Title color='white'>{name}</Title>
              <p className='font-thin'>{jobRole}</p>
            </div>
          </div>
          <p className='sm:w-[318px] m-w-[318px]'>&quot;{depoiment}&quot;</p>
        </div>
      </div>
    </div>
  )
}

export default Card
