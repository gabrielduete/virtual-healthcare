import { conditionsStyle } from './Button.data'

type ButtonProps = {
  content: string
  style: 'filled' | 'outlined'
  bgColor?: 'bg-blue-500'
  textColor: 'text-white' | 'text-blue-500'
  padding: 'px-9' | 'px-11'
}

const Button = ({
  content,
  style,
  bgColor,
  textColor,
  padding,
}: ButtonProps) => {
  const { isFilled, isOutlined } = conditionsStyle(style)

  return (
    <button
      className={`
        rounded-3xl
        py-3
        text-lg
        font-semibold
        hover:opacity-75
        delay-50 
        duration-500
        ${textColor} 
        ${padding} 
        ${isOutlined && 'outline outline-2'} 
        ${isFilled && bgColor}
      `}
    >
      {content}
    </button>
  )
}

export default Button
