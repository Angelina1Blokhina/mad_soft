import React from 'react';

import './App.css';
import { TestProvider } from './context/TestContext';
import TestPage from './pages/TestPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <TestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </TestProvider>
  );
}

export default App;
