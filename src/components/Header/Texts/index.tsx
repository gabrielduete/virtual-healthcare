export type ItemsProps = {
  items: Array<{ name: string; id: string }>
  isColumn?: boolean
}

const Texts = ({ items, isColumn }: ItemsProps) => {
  return (
    <div>
      <ul className={`flex gap-10 ${isColumn && 'flex-col'} `}>
        {items.map(({ name, id }) => {
          return (
            <li
              className='cursor-pointer text-lg text-white xl:text-slate-400 hover:text-black	delay-50 duration-500 font-medium list-none'
              key={id}
            >
              <a href={`#${id}`}>{name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Texts
