import heroBg from "../../assets/bg-shadow.png"
import bannerImg from "../../assets/banner-main.png"

const Hero = ({ addCoin }) => {
    return (

        <div className="mx-5 overflow-hidden max-w-7xl md:mx-auto bg-black relative rounded-3xl">
            <img className="absolute rounded-3xl inset-0 w-full h-full object-cover z-0" src={heroBg} alt="" />

            <div className="text-center space-y-8 py-12 relative">
                <img className="mx-auto" src={bannerImg} alt="" />
                <h1 className="md:text-4xl text-xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="md:text-2xl font-medium text-white/70">
                    Beyond Boundaries Beyond Limits.
                </p>
                <div className="inline-block p-px bg-[#d4ff00] rounded-2xl hover:bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047]">
                    <div className="p-1.5 bg-black rounded-2xl">
                        <button onClick={addCoin} className="bg-[#d4ff00] py-3.5 px-5 rounded-xl font-bold hover:bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047] hover:scale-95">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Hero;