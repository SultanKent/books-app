import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from './store'; // Подключаем ваш Redux store
import Menu from './components/Menu/Menu'; // Ваш компонент меню
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails'; // Добавляем компонент BookDetails
import "./App.scss"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Menu /> {/* Ваш компонент меню */}
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} /> {/* Добавляем маршрут для деталей книги */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;