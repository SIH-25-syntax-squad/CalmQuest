import { Button } from '@/components/ui/button'
import { useUserContext } from '@/contexts/UserContext';
import React from 'react'

const Home = () => {

  const userContext = useUserContext();
  const logout = userContext?.logout;

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default Home