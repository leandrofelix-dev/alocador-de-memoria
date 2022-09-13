import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contigua } from "../pages/contigua"
import { Encadeada } from "../pages/encadeada"
import { Indexada } from "../pages/indexada"

import Main from "../pages/main"
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contigua/" element={<Contigua />} />
            <Route path="/encadeada" element={<Encadeada />} />
            <Route path="/indexada" element={<Indexada />} />
            <Route path="/disk/:id" element={<Indexada />} />
            <Route path='*' element={
                <h1 style={{
                    color: "#FFF",
                }}>Not Found</h1>
            } />
        </Routes>
    )
}