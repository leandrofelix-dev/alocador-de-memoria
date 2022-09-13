import Modal from 'react-modal';
import { Global } from "./styles/global";
import { Router } from "./router/router";

import { DisksProvider } from './hooks/useDisks';

Modal.setAppElement('#root');

export function App() {
  return (
    <DisksProvider>
      <Router />
      <Global />
      {/* <Header information = {'As unidades de memória coloridas estão alocados'} /> */}
      {/* <FilesPage /> */}
    </DisksProvider>

  )
}
