import navLogo from "../../assets/logo.png"
import moneyLogo from "../../assets/dollar1.png"

const Navbar = ({ coin }) => {
    return (
        <div className="max-w-7xl mx-auto my-5 sticky top-0 z-20 bg-white/80 px-4 md:px-0">
            <div className="navbar">
                <div className="md:flex-1">
                    <img className="h-22 w-22" src={navLogo} alt="" />
                </div>
                <div className="flex  justify-center items-center gap-4">
                    <ul className="menu menu-horizontal px-1 space-x-4 hidden md:flex">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <div className=" border border-[#1313131a] rounded-xl p-2.5 font-bold flex items-center  gap-2 ml-32 md:ml-0">
                        <span>{coin}</span>
                        <span>Coin</span>
                        <img src={moneyLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;