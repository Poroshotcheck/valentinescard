import React from 'react';
import './App.css';
import girlfriendImage from './assets/girlfriend.jpg';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>С Днем Святого Валентина!</h1>
      </header>
      <main className="main-content">
        <div className="heart"></div>
        <div className="image-container">
          <img src={girlfriendImage} alt="My Valentine" className="girlfriend-photo" />
        </div>
        <div className="letter">
          <h2>Моя дорогая Оля,</h2>
          <p>
            Ты самая красивая, умная и смешная. Я тебя очень сильно люблю!
          </p>
          <p>
            Со всей моей любовью,
          </p>
          <p>
            Сергей
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
