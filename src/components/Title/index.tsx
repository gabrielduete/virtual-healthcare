import React from 'react'

type TitleProps = {
  children: string | React.ReactElement
  type: 'large' | 'medium'
  width?: string
}

const Title = ({ children, type, width }: TitleProps) => {
  return (
    <h1
      className={`font-bold break-all ${width} ${
        type === 'large' ? 'text-5xl' : 'text-3xl'
      }`}
    >
      {children}
    </h1>
  )
}

export default Title
