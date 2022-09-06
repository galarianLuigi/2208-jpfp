import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CampusesList, StudentsList } from './';

function App() {
  return (
    <BrowserRouter>
      <>
        <div>Test Your App</div>
      </>
      <Routes>
        <Route path='/campuses' elements={<CampusesList />} />
        <Route path='/students' elements={<StudentsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
