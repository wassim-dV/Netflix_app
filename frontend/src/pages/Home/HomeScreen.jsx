import React from 'react'
import { useAuthStore } from '../../Store/AuthUser'

function HomeScreen() {
  const {logout} = useAuthStore();
  return (
    <div><button onClick={logout}>
      
      logout
      </button></div>
  )
}

export default HomeScreen