import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Homepage from "./pages/Homepage";
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
