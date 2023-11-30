import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import MainMenu from './components/MainMenu';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import ShowBook from './components/ShowBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/show-book/:id" element={<ShowBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
