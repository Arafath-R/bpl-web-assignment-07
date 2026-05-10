import footerImg from "../../assets/logo-footer.png"
import heroBg from "../../assets/bg-shadow.png";

const Footer = () => {
    return (

        <footer className="bg-black text-gray-300 p-10 relative">
            <div className="absolute left-0 right-0 mx-auto -top-40 w-full max-w-6xl px-6">
                <div className="border border-white bg-white/20 p-6 rounded-3xl">


                    <div className="relative overflow-hidden text-center bg-white rounded-3xl py-20">


                        <img
                            className="absolute inset-0 w-full h-full object-cover z-0 border"
                            src={heroBg}
                            alt="background"
                        />
                        <div className="relative z-10 space-y-5">
                            <h2 className="text-black font-bold text-3xl">Subscribe to our Newsletter</h2>
                            <p className="text-black">Get the latest updates and news right in your inbox!</p>
                            <div className="flex justify-center gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="bg-white w-1/3 placeholder:text-gray-400 rounded-xl px-4 py-3" />
                                <button className="bg-[#d4ff00] text-black py-3.5 px-5 rounded-xl font-bold bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047] hover:scale-102">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <img className="mx-auto mb-10 mt-60" src={footerImg} alt="" />
            <div className="footer sm:footer-horizontal max-w-7xl mx-auto justify-between mb-16">
                <nav>
                    <h6 className="text-white font-bold pb-4">About Us</h6>
                    <p>
                        We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
                    </p>
                </nav>
                <nav>
                    <h6 className="text-white font-bold pb-4">Quick Links</h6>
                    <ul className="list-disc md:pl-8">
                        <li> <a className="link link-hover">Home</a></li>
                        <li><a className="link link-hover">Services</a></li>
                        <li><a className="link link-hover">About</a></li>
                        <li><a className="link link-hover">Contact</a></li>
                    </ul>
                </nav>
                <form>
                    <h6 className="text-white font-bold pb-4">Subscribe</h6>
                    <p className="pb-4"> Subscribe to our newsletter for the <br /> latest updates.</p>
                    <fieldset className="w-80">

                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="bg-white  placeholder:text-gray-400 rounded-l-xl px-4 py-3" />
                            <button className="bg-[#d4ff00] text-black py-3 px-4 rounded-r-xl font-bold bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047] hover:scale-102">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <hr />
            <p className="mt-10 text-center">@2024 Your Company All Rights Reserved.</p>
        </footer >
    );
};

export default Footer;