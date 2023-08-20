import React from 'react'

type TitleProps = {
  children: string | React.ReactElement
  fontSize?: string
  width?: string
  hasLine?: boolean
  linePositionCenter?: boolean
}

const Title = ({
  children,
  fontSize,
  width,
  hasLine,
  linePositionCenter,
}: TitleProps) => {
  return (
    <h1 className={`font-bold break-all ${width} ${fontSize}`}>
      <span className='flex flex-col gap-6'>
        {children}
        {hasLine && (
          <span
            className={`
            ${linePositionCenter ? 'self-center' : 'self-start'} 
            block w-14 h-0.5 bg-black`}
          />
        )}
      </span>
    </h1>
  )
}

export default Title
