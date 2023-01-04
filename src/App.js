
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';

function App() {
  return (

    <>
    <BrowserRouter>




    <Header />
    <div className='w-full flex flex-col items-center'>
    <div className='border-2 border-t-4 border-black mt-4 w-[80%] p-6 bg-sky-200 rounded-xl'>
    <Routes>
      
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/sign-in' element={<SignIn />} />
   


    </Routes>
    </div></div>

</BrowserRouter>
    
    
    </>
  );
}

export default App;
