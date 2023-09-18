import { CARDS } from './Cards.data'
import Image from 'next/image'
import Title from '../../Title'

const Cards = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-9 mt-20'>
      {CARDS.map(({ title, subtitle, image }) => {
        return (
          <div
            key={title}
            className='flex flex-col justify-center p-10 pr-16 max-w-full rounded-2xl bg-white drop-shadow-xl h-[350px]'
          >
            <div className='mb-6'>
              <Image
                src={image}
                alt={image}
                width={
                  title === CARDS[0].title || title === CARDS[4].title ? 85 : 70
                }
                height={title === CARDS[4].title ? 70 : 93}
                quality={100}
              />
            </div>
            <Title fontSize='text-2xl'>{title}</Title>
            <p className='max-sm:max-w-64 sm:w-64 mt-3 text-gray-500'>
              {subtitle}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
