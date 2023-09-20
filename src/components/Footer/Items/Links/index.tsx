import Title from '../../../Title'

type LinksProps = {
  title: string
  items: Array<{ text: string; id: string }>
}

const Links = ({ title, items }: LinksProps) => {
  return (
    <div>
      <Title color='white'>{title}</Title>
      <div className='mt-6'>
        {items.map(({ text, id }) => {
          return (
            <p className='mt-2' key={id}>
              <a
                href={`#${id}`}
                className='hover:text-black	delay-50 duration-500'
              >
                {text}
              </a>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Links
