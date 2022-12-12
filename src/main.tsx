import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import theme from './themes/theme'
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


const themes = responsiveFontSizes(theme);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themes} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
