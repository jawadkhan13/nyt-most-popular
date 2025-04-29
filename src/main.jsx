
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import store from "./app/store";
import App from './App.jsx'
import './index.css'

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
      </BrowserRouter>
  </Provider>

)
