import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProposalPage from './pages/ProposalPage'
import CommercialPage from './pages/CommercialPage'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProposalPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
