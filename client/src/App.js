import {BrowserRouter , Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
