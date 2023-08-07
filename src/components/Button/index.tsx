type ButtonProps = {
  content: string
  color: string
}

const Button = ({ content, color }: ButtonProps) => {
  return (
    <button
      className={`rounded-3xl py-3 px-9 text-white text-lg font-semibold ${color}`}
    >
      {content}
    </button>
  )
}

export default Button
