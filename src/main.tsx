import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App'

import {StoreProvider} from "./pages/Context";
import {RootStore} from "./pages/RootStore";

const rootStore = new RootStore();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <StoreProvider value={rootStore}>
              <App />
          </StoreProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
