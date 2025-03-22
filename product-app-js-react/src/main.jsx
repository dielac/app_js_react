import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// the codes above strictmode= helps identify potential problems in application, createroot= creating react root to manage application tree
//css & app component imports styles and the main application component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//the code above is where the react app gets put togethr 
//render= renders the react component tree
//root component is wrapped in strictmode to catch mistakes and enforce best practices