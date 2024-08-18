import {Route, Routes} from 'react-router-dom';
import Layout from './layout';
import IndexPage from './pages/indexPage';
import AboutPage from './pages/aboutPage';
import EducationPage from './pages/educationPage';
import ExperiencePage from './pages/experiencePage';
import ContactPage from './pages/contactPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/qualifications' element={<EducationPage />} />
      <Route path='/experience' element={<ExperiencePage />} />
      <Route path='/contact' element={<ContactPage />} />
      </Route>

    </Routes>

    
  )
}

export default App;
