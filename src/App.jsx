import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { DocumentDetails } from './pages/document-details';

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main className="content--container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<h1>Mater List</h1>} />
                <Route path="/document-details/:id" element={<DocumentDetails />} />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;