import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPages from "../../pages/Dashboard";


export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/dashboard/*" element={<DashboardPages />} />
                </Routes>
            </Router>
        </>
    )
}