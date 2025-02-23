import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from './Header';
import SuspenseLoader from './SuspenseLoader';
import "./App.css";
import Dashboard from './Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<React.Suspense fallback={<SuspenseLoader />}>
          <Dashboard />
        </React.Suspense>} />

        <Route path="projects" element={<React.Suspense fallback={<SuspenseLoader />}>
          {/* <Authenticate /> */}
        </React.Suspense>} />

        <Route path="team" element={<React.Suspense fallback={<SuspenseLoader />}>
          {/* <Logout /> */}
        </React.Suspense>} />
        
        <Route path="clients" element={<React.Suspense fallback={<SuspenseLoader />}>
          {/* <Logout /> */}
        </React.Suspense>} />

        <Route path="time" element={<React.Suspense fallback={<SuspenseLoader />}>
          {/* <Logout /> */}
        </React.Suspense>} />

        <Route path="reports" element={<React.Suspense fallback={<SuspenseLoader />}>
          {/* <Logout /> */}
        </React.Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
