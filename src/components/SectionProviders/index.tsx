import Button from '../Button'
import Title from '../Title'

import Image from 'next/image'

const SectionProviders = () => {
  return (
    <section className='flex gap-36 items-center justify-center px-9 mb-56'>
      <div className='hidden lg:block'>
        <Image
          src='https://media.discordapp.net/attachments/778024116140769331/1142600606234718321/providers.png'
          alt='Decorative healthcare providers'
          width={650}
          height={480}
          quality={100}
        />
      </div>
      <div>
        <Title hasLine={true} fontSize='text-4xl' width='max-w-[330px]'>
          Leading healthcare providers
        </Title>
        <p className='text-gray-500 text-xl mt-8 mb-9 max-w-[440px]'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <Button
          style='outlined'
          content='Learn more'
          padding='px-11'
          textColor='text-blue-500'
        />
      </div>
    </section>
  )
}

export default SectionProviders
