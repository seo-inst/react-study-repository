import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap CSS를 전역으로 import 
import 'bootstrap/dist/css/bootstrap.min.css'
// 커스텀 CSS는 Bootstrap 다음에 import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
