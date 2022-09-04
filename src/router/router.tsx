import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DiskManagement } from "../pages/disk-management"
import Main  from "../pages/main"
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/disk-management" element={<DiskManagement />} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
    )
}