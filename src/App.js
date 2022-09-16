import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CampusesList, StudentsList } from './components';

function App() {
  return (
    <div>
      <div>Test Your App</div>

      <nav>
        <Link to='/students'>All Students</Link>
        <Link to='/campuses'>All Campuses</Link>
      </nav>

      <Routes>
        <Route path='/campuses' element={<CampusesList />} />
        <Route path='/students' element={<StudentsList />} />
      </Routes>
    </div>
  );
}

export default App;
