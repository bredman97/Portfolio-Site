import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
    return(
        <div className="bg-gradient-to-br from-white to-sky-300 min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}