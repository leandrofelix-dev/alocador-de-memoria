import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { DiskManagement } from "../pages/disk-management"
export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/disk-management" element={<DiskManagement />} />
        </Routes>
    </BrowserRouter>
    )
}