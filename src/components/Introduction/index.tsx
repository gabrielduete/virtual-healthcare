import Image from 'next/image'

import Title from '../Title'
import Button from '../Button'

const Introduction = () => {
  return (
    <section
      className='max-md:px-4 px-48 flex justify-center items-center gap-28 mt-28'
      id='home'
    >
      <div>
        <Title fontSize='text-5xl' width='max-w-[427px]'>
          Virtual healthcare for you
        </Title>
        <p className='text-gray-500 text-xl mt-6 mb-11 max-w-[410px]'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button
          content='Consult today'
          textColor='text-white'
          padding='px-9'
          bgColor='bg-blue-500'
          style='filled'
        />
      </div>
      <div className='hidden lg:block'>
        <Image
          src='https://media.discordapp.net/attachments/778024116140769331/1137638119047446629/trafalgar-header_illustration_1.png'
          alt='Decorative medical design'
          width={700}
          height={600}
        />
      </div>
    </section>
  )
}

export default Introduction
