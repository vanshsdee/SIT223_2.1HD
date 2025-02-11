import ContentSection from './components/Contentsection'
import Footer from './components/Footer'
import NewsletterForm from './components/NewsletterForm'

function App() {
  return (
    <div>
    <div className="min-h-screen bg-gray-100">
      <NewsletterForm />
    </div>
    <ContentSection/>
    <Footer/>
    </div>
    
  )
}

export default App