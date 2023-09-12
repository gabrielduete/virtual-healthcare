import Title from '../Title'
import Button from '../Button'
import Cards from './Cards/Cards'

const SectionServices = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-48 mb-52 max-md:px-4 px-48'>
      <Title fontSize='text-3xl' hasLine={true} linePositionCenter={true}>
        Our Services
      </Title>
      <p className='text-gray-500 text-xl text-center mt-6 max-w-[1050px]'>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <Cards />
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
