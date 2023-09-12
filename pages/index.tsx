import Introduction from '~/src/components/Introduction'
import Header from '~/src/components/Header'
import SectionServices from '~/src/components/SectionServices'
import SectionProviders from '~/src/components/SectionProviders'
import SectionApps from '~/src/components/SectionApps'
import Articles from '~/src/components/Articles'
import Footer from '~/src/components/Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <Introduction />
      <SectionServices />
      <SectionProviders />
      <SectionApps />
      <Articles />
      <Footer />
    </main>
  )
}

export default Home
