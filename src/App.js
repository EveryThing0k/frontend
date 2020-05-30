import React from 'react';
import './styles/steps.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from '~/services/history';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
    </DndProvider>
  );
}
