import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
    return(
        <div className="text-white bg-bgMain bg-cover min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}