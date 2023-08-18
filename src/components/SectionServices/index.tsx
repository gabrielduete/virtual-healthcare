import Title from '../Title'
import { CARDS } from './SectionServices.data'
import Image from 'next/image'
import Button from '../Button'

const SectionServices = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-48 mb-52 max-md:px-4 px-48'>
      <Title type='medium'>Our Services</Title>
      <p className='text-gray-500 text-xl text-center max-w-[1050px]'>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className='flex flex-wrap items-center justify-center gap-9 mt-20 '>
        {CARDS.map(({ title, subtitle, image }) => {
          return (
            <div
              key={title}
              className='p-10 pr-16 max-w-full rounded-2xl bg-white drop-shadow-xl h-[350px]'
            >
              <div className='mb-6'>
                <Image
                  src={image}
                  alt={image}
                  width={title === CARDS[0].title ? 85 : 70}
                  height={93}
                  quality={100}
                />
              </div>
              <Title type='medium'>{title}</Title>
              <p className='w-64 mt-3 text-gray-500'>{subtitle}</p>
            </div>
          )
        })}
      </div>
      <div className='mt-20'>
        <Button
          style='outlined'
          content='Learn more'
          padding='px-9'
          textColor='text-blue-500'
        />
      </div>
    </section>
  )
}

export default SectionServices
