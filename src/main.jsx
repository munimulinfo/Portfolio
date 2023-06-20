import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './providers/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
          <div className="max-w-screen-xl mx-auto bg-base-100">
              <App />        
          </div>
        </ThemeProvider>

  </React.StrictMode>,
)
