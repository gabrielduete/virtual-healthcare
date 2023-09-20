import React from 'react'
import {
  Intro,
  Header,
  Services,
  Providers,
  Apps,
  Articles,
  Footer,
  Depoiments,
} from '../src/components/components'

const Home = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Services />
      <Providers />
      <Apps />
      <Depoiments />
      <Articles />
      <Footer />
    </main>
  )
}

export default Home
