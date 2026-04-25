import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MakePost from "../pages/MakePost";
import UserProfile from "../pages/UserProfile";

function NotFound() {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark text-white flex-column">
            <p className="fw-bold h4">404 - Página não encontrada</p>
        </div>
    )
}

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/home/make-post" element={<MakePost />} />
                <Route path="/r/:id" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}