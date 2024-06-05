import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            {/* <div className="max-w-6xl mx-auto px-2 min-h-[calc(100vh-318px)]">
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;