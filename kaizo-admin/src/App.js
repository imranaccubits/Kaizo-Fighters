import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import GetRoutes from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {GetRoutes().map((item, key) => (
          <Route
            path={item.path}
            key={key}
            element={item.redirectTo ? <Navigate to={item.redirectTo} /> : <item.element />}
          >
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
