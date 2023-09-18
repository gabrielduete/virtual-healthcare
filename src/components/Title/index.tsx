import React from 'react'

type TitleProps = {
  fontSize?: string
  color?: 'black' | 'white'
  width?: string
  hasLine?: boolean
  linePositionCenter?: boolean
  children: string | React.ReactElement
}

const Title = ({
  fontSize,
  color = 'black',
  width,
  hasLine,
  linePositionCenter,
  children,
}: TitleProps) => {
  const isBlack = color === 'black'

  return (
    <h1
      className={`font-bold break-normal ${width} ${fontSize} ${
        isBlack ? 'text-black' : 'text-white'
      }`}
    >
      <span className='flex flex-col gap-6'>
        {children}
        {hasLine && (
          <span
            className={`
            ${linePositionCenter ? 'self-center' : 'self-start'}
            ${isBlack ? 'bg-black' : 'bg-white'}
            block w-14 h-0.5`}
          />
        )}
      </span>
    </h1>
  )
}

export default Title
