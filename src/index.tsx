import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import 'moment/locale/pt';

import { ModalProvider } from './context/Modal';
import { SidepanelProvider } from './context/Sidepanel';
import { AuthProvider } from './context/Auth';
import { LoadingProvider } from './context/Loading';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <SidepanelProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </SidepanelProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);