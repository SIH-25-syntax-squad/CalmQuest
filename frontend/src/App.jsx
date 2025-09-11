import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Explore, Home } from './pages';
import { Login, Signup } from './components';
import { useUserContext } from './contexts/UserContext';

function App() {

  const userContext = useUserContext();
  const user = userContext?.user;
  console.log(user);
  return (
    <>
      <Routes>
      {/* <Toaster /> */}
      <Route path="/" element={<Home />} />
      {!user ? (
        <>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </>
      ) : (
        <Route path="/dashboard" element={<Explore />} />
      )}
      
    </Routes>
    </>
  )
}

export default App
