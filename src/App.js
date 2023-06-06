import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NevoGrow from './pages/NevoGrow';
import NevoSecure from './pages/NevoSecure';
import NevoSupport from './pages/NevoSupport';
import 'boxicons';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Navigate to="/nevo-support" />} />
        <Route path='/' element={<MainLayout/>}>
          <Route path='/nevo-grow' element={<NevoGrow/>}/>
          <Route path='/nevo-secure' element={<NevoSecure/>}/>
          <Route path='/nevo-support' element={<NevoSupport/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
