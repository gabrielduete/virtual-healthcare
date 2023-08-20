import Button from '../Button'
import Title from '../Title'

import Image from 'next/image'

import DownloadIcon from '@mui/icons-material/Download'

const SectionApps = () => {
  return (
    <section className='flex gap-36 items-center justify-center px-9 mb-56'>
      <div>
        <Title hasLine={true} fontSize='text-4xl' width='max-w-[250px]'>
          Download our mobile apps
        </Title>
        <p className='text-gray-500 text-xl mt-8 mb-11 max-w-[400px]'>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <Button
          style='outlined'
          content={
            <span className='flex gap-3 items-end'>
              Download <DownloadIcon />
            </span>
          }
          padding='px-11'
          textColor='text-blue-500'
        />
      </div>
      <div className='hidden lg:block'>
        <Image
          src='https://media.discordapp.net/attachments/778024116140769331/1142600605924335797/mobile-apps.png'
          alt='Decorative healthcare apps'
          width={650}
          height={480}
          quality={100}
        />
      </div>
    </section>
  )
}

export default SectionApps
