import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

async () => {
            try {
                const response = await fetch('/get-secret-data/.env');
                const data = await response.json();
                console.log(data)
            } catch (error) {
                document.getElementById('output').textContent = 'Error fetching data.';
            }
        }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
