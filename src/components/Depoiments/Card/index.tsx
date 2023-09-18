import Title from '~/src/components/Title'

type CardProps = {
  image: string
  name: string
  jobRole: string
  depoiment: string
}

const Card = ({ image, name, jobRole, depoiment }: CardProps) => {
  return (
    <div
      className='
        flex
        flex-col
        items-center
        justify-center
        px-9
        mb-10'
    >
      <div className='bg-gradient-to-b from-sky-300 to-blue-500 p-16 rounded-3xl'>
        <Title
          color='white'
          fontSize='text-4xl'
          hasLine={true}
          linePositionCenter={true}
        >
          What our customer are saying
        </Title>
        <div className='flex mt-20'>
          <div className='flex'>
            <img src={image} alt={`Profile pic for ${name}`} />
            <div className='flex flex-col'>
              <p>{name}</p>
              <p>{jobRole}</p>
            </div>
          </div>
          <p>{depoiment}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
