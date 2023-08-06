type TitleProps = {
  content: string
  width?: string
}

const Title = ({ content, width }: TitleProps) => {
  return <h1 className={`text-5xl font-bold ${width}`}>{content}</h1>
}

export default Title
