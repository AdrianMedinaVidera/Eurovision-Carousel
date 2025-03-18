import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import ContestantDetails from './components/contestant-details.js'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/2024" replace />} />
      <Route path="/:year" element={<App />} />
      <Route
        path="/contestant/:year/:contestantId"
        element={<ContestantDetails />}
      />
    </Routes>
  </BrowserRouter>
)
