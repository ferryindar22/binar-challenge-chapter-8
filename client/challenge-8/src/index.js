//IMPORT REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT GLOBAL CSS
import './css/index.css';
//IMPORT PAGES
import App from './App';
import GetAllPlayers from './pages/Dashboard';
import CreatePlayer from './pages/CreatePlayer';
import EditPlayer from './pages/EditPlayer';
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/api/v1/players" element={<GetAllPlayers/>}/>
      <Route path="/create-player" element={<CreatePlayer/>}/>
      <Route path="/edit-player" element={<EditPlayer/>}/>
    </Routes>
  </BrowserRouter>
);
