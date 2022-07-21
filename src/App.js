import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page31 from './pages/Page31';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (

      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/panels/1" element={<Page1 />} />
          <Route path="/panels/2" element={<Page2 />} />
          <Route path="/panels/3" element={<Page3 />} />
          <Route path="/panels/:id" element={<Page31 />} />

        </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
