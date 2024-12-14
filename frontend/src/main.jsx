import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Routes/HomePage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query'
import TraiteurPage from './Routes/TraiteurPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/traiteur" element={<TraiteurPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
