import Title from '../../Title'

type ItemProps = {
  title: string
  items: string[]
}

const Item = ({ title, items }: ItemProps) => {
  return (
    <div>
      <Title color='white'>{title}</Title>
      <div className='mt-6'>
        {items.map(text => {
          return (
            <p className='mt-2' key={text}>
              {text}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Item
