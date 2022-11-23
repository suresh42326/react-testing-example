import '../src/App.css'
import Counter from './Counter';
import Todo from './ToDo';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Unit testing examples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}





// export default App;
