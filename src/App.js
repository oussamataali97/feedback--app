import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import QuestionAbout from './components/QuestionAbout';
import { FeedbackProvider } from './components/context/FeedbackContext';


function App() {

  return (
    <FeedbackProvider>
    <>
    <Router>
      <Header title="Feedback app UI"/>
   
      <div className="container">
        <Routes>
          <Route path='/' exact element={

            <> 
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList  />
            <QuestionAbout  />
            </>
            
            
  
          }
          
          />
          
          <Route path='/About' element={<AboutPage/>} />

        </Routes>
      </div>


    </Router>
    </>
    </FeedbackProvider>
  );
}

export default App;
