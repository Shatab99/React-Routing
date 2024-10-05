import { Outlet } from "react-router-dom";
import Navabar from "./components/Navabar";


const Root = () => {
    return (
        <div>
            <Navabar />
            <Outlet />
        </div>
    );
};

export default Root;