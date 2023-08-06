import Image from 'next/image'

import Title from '../Title'

const Introduction = () => {
  return (
    <section className='px-48 flex justify-center items-center gap-28'>
      <div>
        <Title content='Virtual healthcare for you' width='w-[427px]' />
        <p className='text-gray-500 text-xl mt-6 w-[410px]'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
      </div>
      <Image
        src='https://media.discordapp.net/attachments/778024116140769331/1137638119047446629/trafalgar-header_illustration_1.png'
        alt='decorative image'
        width={700}
        height={600}
      />
    </section>
  )
}

export default Introduction
