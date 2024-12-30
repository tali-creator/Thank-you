import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./pages/Home"
import Appreciation from './pages/Appreciation'
import ThankYou from './pages/ThankYou'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <RootLayout />}>
        <Route index element={ <Home />} />
        <Route path='appreciation' element={ <Appreciation />} />
        <Route path='thankYou' element={ <ThankYou />} />
      </Route>
    )
  )
  return <RouterProvider router={router}/>

}

export default App