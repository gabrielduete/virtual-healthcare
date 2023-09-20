import Cards from './Cards'
import Button from '../Button'
import Title from '../Title'

const Articles = () => {
  return (
    <>
      <section
        className='flex flex-col items-center justify-center mt-48 mb-52 max-md:px-4 px-48'
        id='aboutUs'
      >
        <Title fontSize='text-3xl' hasLine={true} linePositionCenter={true}>
          Check out our latest article
        </Title>
        <Cards />
        <div className='mt-16'>
          <Button
            content='View all'
            padding='px-16'
            textColor='text-blue-500'
            style='outlined'
          />
        </div>
      </section>
    </>
  )
}

export default Articles
