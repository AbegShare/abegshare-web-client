import { navBarItems } from "../data/NavBarItems"
import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <>
            <header className="fixed tp-0 left-0 w-full bg-white shadow-md
">
    {/* justify-between items-center w-[92%] */}
                <nav className="flex  mx-3">
                    {/* Nav Icon */}
                        <div>
                            <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                        </div>
                        {/* Nav Items/Links */}
                        <div className=" md:flex-1 nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                            {navBarItems.map((item, index) => (
                                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                                    <li className="hover:text-gray-500 cursor-pointer">
                                        {item.title}
                                    </li>
                                </ul>
                            ))}

                        </div>
                        <div className="flex items-center gap-6">
                            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign In</button>
                            <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
                        </div>
                </nav>

            </header>
        </>
    )
}

export default Header