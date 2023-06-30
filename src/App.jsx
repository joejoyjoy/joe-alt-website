import PageLayout from './views/layouts/PageLayout'
import SiteContextProvider from './context/SiteContext'
import './app.scss'

const App = () => {
  return (
    <SiteContextProvider>
      <PageLayout />
    </SiteContextProvider>
  )
}

export default App