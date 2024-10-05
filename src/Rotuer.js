import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';

import Vulnerabilities from './Pages/Vulnerabilities/Vulnerabilities';
import Settings from './Pages/Settings/Settings';
import Dashboard from './Pages/Dashboard/Dashboard';



const Rotuer = () => {
  return (
    <Routes>

      <Route path='/*' element={<NoPages></NoPages>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/vulnerabilities' element={<Vulnerabilities></Vulnerabilities>} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default Rotuer;
