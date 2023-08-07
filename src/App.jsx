import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Header from './components/Header/Header';
import './App.scss'
import Favorites from './components/Favorites/Favorites';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header handleSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<BookList searchText={searchText} />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path='/favorites' element={<Favorites/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
