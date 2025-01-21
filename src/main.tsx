import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './Home'
import Todo from './ToDo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Home/> */}
    < Todo />
  </StrictMode>,
)
