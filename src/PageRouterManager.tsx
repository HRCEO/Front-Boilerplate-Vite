import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {DashboardPage} from "./pages/Dashboard/DashboardPage";

const PageRouterManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRouterManager;