import { Route , Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import Loginpage from "./pages/Loginpage"
import Homepage from "./pages/Homepage"
import "./index.css";



function App() {

  return (
   <Routes>
    <Route path='/' element={<SignUpPage />} />
    <Route path='/signup' element={<SignUpPage />} />
    <Route path='/login' element={<Loginpage />} />
				{/* <Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
				<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
				<Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
				<Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
				<Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
				<Route path='/*' element={<NotFoundPage />} /> */}


   </Routes>
  )
}

export default App
