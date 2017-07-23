import React from 'react';
import ReactDOM from 'react-dom';
import css from 'main.css';

const App = function (props) {
  return (
    <p className={css.container}>
      Hello World
      <div className={css.bigpicture}></div>
    </p>
  );
};

ReactDOM.render(<App />, document.querySelector('main'));

