import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../m-2-bll/store';
import { Main } from './main/Main';

//11

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <Main/>
          </Provider>
        </BrowserRouter>
      </div>
  );
}

export default App;
