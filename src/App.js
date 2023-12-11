import {Contact} from './pages/Contact';
import {Home} from './pages/Home';
import {Coursedetails} from './pages/Coursedetails';
import {Inquiryform} from './pages/Inquiryform';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';

function App() 
{
  return (
    
    <div className="body">

      <h1>CLEAN<span>CODE</span></h1>
      
      <Router>
      <Link to="/Home">Home</Link>
      <Link to="/CourseDetails">Course Details</Link> 
        <Link to="/Contact">Contact</Link>
        <Link to="/InquiryForm">Inquiry Form</Link> 
         
         
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CourseDetails" element={<Coursedetails />} />
          <Route path="/InquiryForm" element={<Inquiryform />} />
        </Routes>
      </Router>
      
     
    </div>
   
  );
}
export default App;
