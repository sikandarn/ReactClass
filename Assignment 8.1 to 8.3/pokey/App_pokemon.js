import './App.css';

import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/SideBar';
import Detail from './component/Detail';


function App() {
  return (
    <Router>

      <div className="app-container">
      
        <Sidebar />
        <Routes>
          <Route path="/pokemon/:id" element={<Detail/>} />
        </Routes>



      </div>
    </Router>
  );
}

export default App;
