type LogoProps = {
  type: 'black' | 'white'
}

const Logo = ({ type }: LogoProps) => {
  const isBlack = type === 'black'

  return (
    <div className='flex items-center justify-center gap-3 w-40'>
      <p
        className={`text-3xl font-semibold p-1 rounded-full w-11 flex justify-center ${
          isBlack ? 'text-white bg-blue-500' : 'text-sky-300 bg-white'
        }`}
      >
        T
      </p>
      <h1
        className={`text-2xl font-semibold ${
          isBlack ? 'text-slate-950' : 'text-white'
        }`}
      >
        Trafalgar
      </h1>
    </div>
  )
}

export default Logo
