import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Routes, Route } from 'react-router'
import ContestantDetails from './components/contestant-details.js'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/:year" element={<App />} />
      </Route>
      <Route
        path="/contestant/:year/:contestantId"
        element={<ContestantDetails />}
      />
    </Routes>
  </BrowserRouter>
)
