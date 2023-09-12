import Title from '../../Title'

import { infosCards } from './Cards.data'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const Cards = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-9 mt-20'>
      {infosCards.map(({ image, buttonText, text, title, alt }) => {
        return (
          <div
            className='max-w-[320px] h-[480px] flex flex-col rounded-2xl bg-white drop-shadow-xl'
            key={text}
          >
            <img src={image} alt={alt} className='rounded-t-2xl' />
            <div className='px-8 mt-6'>
              <Title fontSize='text-xl'>{title}</Title>
              <p className='text-gray-500 text-base mt-3'>{text}</p>
              <button className='mt-6 text-blue-500 hover:opacity-75 delay-75 duration-300'>
                {buttonText} <TrendingFlatIcon />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
