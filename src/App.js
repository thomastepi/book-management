import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Setup from "./components/Setup";
import MainMenu from "./components/MainMenu";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";
import Quit from "./components/Quit";
import QuitMessage from "./components/QuitMessage";
import SearchBook from "./components/SearchBook";
import ShowBookByAuthor from "./components/ShowBookByAuthor";
import ShowBookByPrice from "./components/ShowBookByPrice";
import { BookProvider } from "./contexts/BookContext";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/update-book" element={<UpdateBook />} />
            <Route path="/delete-book" element={<DeleteBook />} />
            <Route path="/search-book" element={<SearchBook />} />
            <Route path="/quit" element={<Quit />} />
            <Route path="/quit-message" element={<QuitMessage />} />
            <Route path="/show-book-author" element={<ShowBookByAuthor />} />
            <Route path="/show-book-price" element={<ShowBookByPrice />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BookProvider>
  );
}

export default App;
