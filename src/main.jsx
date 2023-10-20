import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RecoilRoot>
     <Suspense fallback={<div>Loading... </div>}>
    <App />
    </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
)
