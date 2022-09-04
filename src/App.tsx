import { ListDisks } from "./components/ListDisks";
import { Header } from "./components/Header";
import { Global } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { InsertDiskForm } from "./components/InsertDiskForm";
import { Router } from "./router/router";


Modal.setAppElement('#root');

export function App() {



  return (
    <>
      <Global />
      <Router />
    </>

  )
}
