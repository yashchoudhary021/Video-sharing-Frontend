import SignIn from './component/Sign-register/SignIn';
import Home from './component/Home/Home';
import Register from './component/Sign-register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyVideoes from './component/MyVideoes/MyVideoes';
import SearchPage from './component/Search/SearchPage';
import './App.css'

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myvideos" element={<MyVideoes/>} />
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/register" element={<Register />} />
        <Route path='/search/:keyword' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
