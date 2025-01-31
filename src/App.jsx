import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
