import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router'
import ContestantDetails from './components/contestant-details'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
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
