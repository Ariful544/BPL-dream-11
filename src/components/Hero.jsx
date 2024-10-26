
import banner from '../assets/banner-main.png';
// eslint-disable-next-line react/prop-types
const Hero = ({ handleFreeCredit }) => {

    return (
        <div className="bg-black rounded-xl">
            <div className="bg-[url('./assets/bg-shadow.png')] flex flex-col items-center justify-center min-h-[515px] bg-cover mt-6 bg-no-repeat rounded-xl">
                <img src={banner} alt="" />
                <h1 className='text-white text-center text-2xl md:text-[40px] font-bold mt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-white/70 text-xl md:text-2xl font-medium py-3'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className="border-2  border-[#E7FE29] rounded-xl mt-6 py-5 px-2" ><span className=' font-bold text-black bg-gradient-to-r from-purple-500 to-yellow-300 rounded-xl py-4 px-5 hover:bg-gradient-to-l hover:from-purple-500 hover:to-yellow-300'>Claim Free Credit</span></button>
            </div>
        </div>
    );
};

export default Hero;