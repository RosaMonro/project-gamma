import { BrowserRouter } from 'react-router-dom'
import { FirebaseAppProvider } from 'reactfire'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App title="useScroll with spring smoothing"/>
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);