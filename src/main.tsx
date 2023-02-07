import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {StoreProvider} from "./pages/Context";
import {RootStore} from "./pages/RootStore";

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <StoreProvider value={rootStore}>
          <App />
      </StoreProvider>
  </React.StrictMode>,
)
