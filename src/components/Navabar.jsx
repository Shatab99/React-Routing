import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Navabar = () => {

    const [fix, setFix] = useState('')

    useEffect(()=>{
        window.addEventListener('scroll', fixNav)

        return ()=>{
            window.removeEventListener('scroll',fixNav)
        }
    },[])

    const fixNav = ()=>{
        if(window !== undefined){
            window.scrollY > 50 ? setFix("fixed") : setFix('') ;
        }
    }


    console.log(window.scrollY)

    return (
        <div className={`navbar bg-green-300 ${fix} `}>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={"/me"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to={"/settings"}>Settings</Link></li>
                        <li><Link to={"/orders"}>Orders</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navabar;