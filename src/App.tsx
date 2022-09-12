import Modal from 'react-modal';
import { Global } from "./styles/global";
import { Router } from "./router/router";
import { FilesPage} from "./components/FilesPage";
import { Header } from "./components/Header";
import { ListDisks } from "./components/ListDisks";
import { InsertDiskForm } from "./components/InsertDiskForm";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <Router />
      <Global />
      {/* <Header information = {'As unidades de memória coloridas estão alocados'} /> */}
      {/* <FilesPage /> */}
    </>

  )
}
